import "server-only";

import { cookies } from "next/headers";

import apiClient from "./client";
import type { AuthUser } from "./auth";

export async function getCurrentUserServer() {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore.toString();

  const response = await apiClient.get<AuthUser>(
    "/auth/me",
    {
      headers: {
        Cookie: cookieHeader,
      },
    }
  );

  return response.data;
}