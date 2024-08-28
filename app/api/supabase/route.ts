import db from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const products = await db.product.findMany({
    where: {
      name: "Scandinavian Bed Frame",
    },
  });

  return NextResponse.json(products);
}
