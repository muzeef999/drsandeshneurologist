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
<<<<<<< HEAD
=======

export const PUT = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const { title, description, keywords } = await request.json();
    await Meta.findByIdAndUpdate(id, { title, description, keywords });
    return new NextResponse(JSON.stringify({ message: "successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ error: "Database Error", message: err.message }),
      { status: 500 }
    );
  }
};
>>>>>>> 1aa8044dce791e3b02ae3f41e98b9bbbf9dabcf1
