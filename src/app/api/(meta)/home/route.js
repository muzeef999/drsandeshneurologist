import Meta from "@/models/Meta.js";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { id, title, description, keywords } = await request.json();
  try {
    await connect();
    await await Meta.create({ _id: id, title, description, keywords }); // Set your own default ID
    return new NextResponse.json({ message: "Post created" }, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error: " + err.message, { status: 500 });
  }
};
