"use server";

import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction({
  id,
  name,
  role,
}: {
  id: string;
  name: string;
  role: number;
}) {
  const data = {
    id,
    name,
    role,
  };

  const jwt = jsonwebtoken.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data,
    },
    "secret" // just for example demo secret key
  );

  cookies().set("token", jwt);

  redirect("/chat");
}
