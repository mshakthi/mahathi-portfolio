import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // TODO: integrate with email service and send the email to the recipient.
  console.log("Contact message", { name, email, message });

  return NextResponse.json({ ok: true });
}