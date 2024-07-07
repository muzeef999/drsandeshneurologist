import Meta from "@/models/Meta";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const Model = await Meta.findById(id);
    return new NextResponse(JSON.stringify(Model), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error" + err.message, { status: 500 });
  }
};
