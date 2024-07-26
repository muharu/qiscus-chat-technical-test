"use server";

import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";

export interface Auth {
  exp: number;
  data: {
    id: string;
    name: string;
    role: number;
  };
  iat: number;
}

export async function getAuth() {
  try {
    const user = cookies().get("token")?.value;

    if (!user) {
      return null;
    }

    const decoded = jsonwebtoken.verify(user, "secret") as Auth;

    return decoded.data;
  } catch (error) {
    return null;
  }
}
