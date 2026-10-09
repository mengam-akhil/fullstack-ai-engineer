
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  enterpriseRegistrationSchema,
  type EnterpriseRegistrationFormData,
} from "../lib/validations/enterprise-registration";

import { registerUser } from "../lib/api/auth";
import { getApiErrorMessage } from "../lib/api/errors";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function EnterpriseRegistrationForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnterpriseRegistrationFormData>({
    resolver: zodResolver(enterpriseRegistrationSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: "",
      jobRole: "",
      acceptTerms: false,
    },
  });

  async function onSubmit(data: EnterpriseRegistrationFormData) {
    try {
      setSuccessMessage("");
      setApiError("");

      const response = await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        department: data.department,
        jobRole: data.jobRole,
      });

      console.log("Registration response:", response);

      setSuccessMessage(
        "Your account has been registered successfully.",
      );

      reset();
    } catch (error) {
      console.error("Registration failed:", error);
      setApiError(getApiErrorMessage(error));
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="border-b border-slate-200 px-6 py-8 dark:border-slate-800 sm:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Day 150
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Enterprise User Registration
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Register a real test user through the frontend
            and FastAPI backend.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8"
        >
          {successMessage && (
            <Alert className="mb-6">
              <AlertTitle>Registration Successful</AlertTitle>
              <AlertDescription>
                {successMessage}
              </AlertDescription>
            </Alert>
          )}

          {apiError && (
            <Alert variant="destructive" className="mb-6">
              <AlertTitle>Registration Failed</AlertTitle>
              <AlertDescription>{apiError}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium"
              >
                Full Name
              </label>

              <Input
                id="fullName"
                placeholder="Your full name"
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Work Email
              </label>

              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...register("email")}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <Input
                id="password"
                type="password"
                placeholder="Create a secure password"
                autoComplete="new-password"
                {...register("password")}
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirm Password
              </label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                {...register("confirmPassword")}
              />

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium"
              >
                Department
              </label>

              <select
                id="department"
                {...register("department")}
                className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/20 dark:border-slate-700"
              >
                <option value="">Select department</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
                <option value="operations">Operations</option>
                <option value="human-resources">Human Resources</option>
              </select>

              {errors.department && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.department.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="jobRole"
                className="mb-2 block text-sm font-medium"
              >
                Job Role
              </label>

              <select
                id="jobRole"
                {...register("jobRole")}
                className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/20 dark:border-slate-700"
              >
                <option value="">Select job role</option>
                <option value="full-stack-engineer">Full Stack Engineer</option>
                <option value="frontend-engineer">Frontend Engineer</option>
                <option value="backend-engineer">Backend Engineer</option>
                <option value="devops-engineer">DevOps Engineer</option>
                <option value="ai-engineer">AI Engineer</option>
              </select>

              {errors.jobRole && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.jobRole.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register("acceptTerms")}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />

                <span className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  I agree to the organization&apos;s terms and
                  conditions and confirm that the information
                  provided is accurate.
                </span>
              </label>

              {errors.acceptTerms && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-500">
              All required fields must be completed before
              registration.
            </p>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting
                ? "Creating Account..."
                : "Create Enterprise Account"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
