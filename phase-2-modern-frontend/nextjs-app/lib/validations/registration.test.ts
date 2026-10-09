import { describe, expect, test } from "vitest";

import {
  registrationSchema,
} from "./registration";

describe("registrationSchema", () => {
  test("accepts valid registration data", () => {
    const result = registrationSchema.safeParse({
      fullName: "Akhil Kumar",
      email: "akhil@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    });

    expect(result.success).toBe(true);
  });

  test("rejects an invalid email", () => {
    const result = registrationSchema.safeParse({
      fullName: "Akhil Kumar",
      email: "invalid-email",
      password: "Password123",
      confirmPassword: "Password123",
    });

    expect(result.success).toBe(false);
  });

  test("rejects a weak password", () => {
    const result = registrationSchema.safeParse({
      fullName: "Akhil Kumar",
      email: "akhil@example.com",
      password: "password",
      confirmPassword: "password",
    });

    expect(result.success).toBe(false);
  });

  test("rejects mismatched passwords", () => {
    const result = registrationSchema.safeParse({
      fullName: "Akhil Kumar",
      email: "akhil@example.com",
      password: "Password123",
      confirmPassword: "Password456",
    });

    expect(result.success).toBe(false);
  });

  test("rejects a short full name", () => {
    const result = registrationSchema.safeParse({
      fullName: "A",
      email: "akhil@example.com",
      password: "Password123",
      confirmPassword: "Password123",
    });

    expect(result.success).toBe(false);
  });
});