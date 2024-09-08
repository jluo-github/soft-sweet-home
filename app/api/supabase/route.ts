import db from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const products = await db.product.findMany({
      where: {
        name: "Scandinavian Bed Frame",
      },
    });

    return NextResponse.json({ message: "Supabase accessed successfully", products });
  } catch (error) {
    console.error("Error accessing Supabase:", error);
    NextResponse.error();
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const name = `CuteCat-${Math.ceil(Math.random() * 999)}`;
  try {
    const testProfile = await db.testProfile.update({
      where: {
        id: "4dbb7aed-3854-4e4c-9cd7-bd42d770a8b9",
      },
      data: {
        name,
      },
    });

    return NextResponse.json({ message: "Supabase updated successfully", testProfile });
  } catch (error) {
    console.error("Error creating Supabase record:", error);
    return NextResponse.json({ error: "Error updating Supabase record" }, { status: 500 });
  }
}
