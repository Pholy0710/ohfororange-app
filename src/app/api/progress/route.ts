import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const childId = searchParams.get("childId");

    if (!childId) {
      return NextResponse.json({ error: "childId required" }, { status: 400 });
    }

    const child = await db.child.findFirst({
      where: { id: childId, parentId: session.user.id },
    });

    if (!child) {
      return NextResponse.json({ error: "Child not found" }, { status: 404 });
    }

    const progress = await db.progress.findMany({
      where: { childId },
      include: { lesson: true },
      orderBy: { updatedAt: "desc" },
    });

    const storyProgress = await db.storyProgress.findMany({
      where: { childId },
      include: { story: true },
    });

    const gameScores = await db.gameScore.findMany({
      where: { childId },
      orderBy: { createdAt: "desc" },
      take: 20,
    });

    const achievements = await db.childAchievement.findMany({
      where: { childId },
      include: { achievement: true },
    });

    const streak = await db.streak.findUnique({ where: { childId } });

    return NextResponse.json({
      progress,
      storyProgress,
      gameScores,
      achievements,
      streak,
    });
  } catch (error) {
    console.error("Progress GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { childId, lessonId, status, score, timeSpent } = body;

    const child = await db.child.findFirst({
      where: { id: childId, parentId: session.user.id },
    });

    if (!child) {
      return NextResponse.json({ error: "Child not found" }, { status: 404 });
    }

    const progress = await db.progress.upsert({
      where: { childId_lessonId: { childId, lessonId } },
      update: {
        status,
        score,
        timeSpent: { increment: timeSpent || 0 },
        attempts: { increment: 1 },
        completedAt: status === "COMPLETED" || status === "MASTERED" ? new Date() : undefined,
      },
      create: {
        childId,
        lessonId,
        status,
        score,
        timeSpent: timeSpent || 0,
        attempts: 1,
        completedAt: status === "COMPLETED" || status === "MASTERED" ? new Date() : undefined,
      },
    });

    await db.streak.upsert({
      where: { childId },
      update: { lastActivity: new Date(), currentStreak: { increment: 1 } },
      create: { childId, currentStreak: 1, longestStreak: 1 },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
