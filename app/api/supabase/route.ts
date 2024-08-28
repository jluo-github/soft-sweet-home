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
