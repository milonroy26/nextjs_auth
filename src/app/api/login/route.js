import { tokenCookie } from "@/app/services/TokenCookie";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, res) {
  let json = req.json();
  let email = json["email"];
  let password = json["password"];

  if (email === "milonchandro35@gmail.com" && password === "123") {
    let cookie = await tokenCookie(email);

    return NextResponse.json(
      {
        status: true,
        msg: "Login Success",
      },
      {
        status: 201,
        msg: "login Success",
      }
    );
  } else {
    return NextResponse.json({
      status: false,
      msg: "login Fail",
    });
  }
}

// Logout

export async function GET(req, res) {
  cookies().delete("token");

  return NextResponse.json({
    status: true,
    msg: "Logout successful",
  });
}
