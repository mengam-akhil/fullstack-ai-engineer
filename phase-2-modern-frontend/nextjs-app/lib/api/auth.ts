
import apiClient from "./client";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export async function login(data: LoginRequest) {
  const response = await apiClient.post(
    "/auth/login",
    data
  );

  return response.data;
}

export async function logout() {
  const response = await apiClient.post(
    "/auth/logout"
  );

  return response.data;
}

export async function getCurrentUser() {
  const response =
    await apiClient.get<AuthUser>("/auth/me");

  return response.data;
}

export interface RegistrationRequest {
  fullName: string;
  email: string;
  password: string;
  department: string;
  jobRole: string;
}

export async function registerUser(
  data: RegistrationRequest
) {
  const response = await apiClient.post(
    "/auth/register",
    data
  );

  return response.data;
}
