import { mailOptions, transporter } from "@/utils/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  if (request.method !== "POST") {
    return NextResponse.error("Method Not Allowed", { status: 405 });
  }

  const reqBody = await request.json();
  const { name, email, phone, message, subject } = reqBody;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject || "Default Subject",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<h1>${
        subject || "Default Subject"
      }</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
