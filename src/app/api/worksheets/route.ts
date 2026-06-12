import { NextRequest, NextResponse } from "next/server";
import { ALL_WORKSHEETS } from "@/data/worksheets";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  let filtered = [...ALL_WORKSHEETS];

  if (category && category !== "ALL") {
    filtered = filtered.filter((w) => w.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.tags.some((t) => t.includes(q)) ||
        w.description.toLowerCase().includes(q)
    );
  }

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    worksheets: paginated,
    total,
    page,
    pages: Math.ceil(total / limit),
  });
}
