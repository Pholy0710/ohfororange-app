import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { z } from "zod";

const createChildSchema = z.object({
  name: z.string().min(1).max(50),
  age: z.number().min(3).max(10).optional(),
  avatar: z.string().optional(),
});

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const children = await db.child.findMany({
      where: { parentId: session.user.id },
      include: {
        streaks: true,
        _count: {
          select: {
            progress: true,
            achievements: true,
            storyProgress: true,
          },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(children);
  } catch (error) {
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
    const { name, age, avatar } = createChildSchema.parse(body);

    const child = await db.child.create({
      data: {
        name,
        age,
        avatar,
        parentId: session.user.id,
      },
    });

    return NextResponse.json(child, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
