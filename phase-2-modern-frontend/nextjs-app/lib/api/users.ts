import apiClient from "./client";

export interface ApiUser {
  id: number;
  name: string;
  email: string;
}

export async function getUsers() {
  const response = await apiClient.get<ApiUser[]>(
    "/users"
  );

  return response.data;
}

export async function deleteUser(userId: number) {
  const response = await apiClient.delete(
    `/users/${userId}`
  );

  return response.data;
}