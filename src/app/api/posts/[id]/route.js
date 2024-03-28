import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const posts = await Post.findById(id);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export async function PUT(request, { params }) {
  const { id } = params;
  const { newImg: img, username, newContent: content } = await request.json();
  await connect();
  await Post.findByIdAndUpdate(id, { img, content, username });
  return NextResponse.json({ message: " Posted Update" }, { status: 200 });
}
