import { NextRequest, NextResponse } from "next/server";
import { STORIES } from "@/data/stories";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const story = STORIES.find((s) => s.id === id || s.slug === id);
    if (!story) return NextResponse.json({ error: "Story not found" }, { status: 404 });
    return NextResponse.json(story);
  }

  return NextResponse.json(STORIES);
}
