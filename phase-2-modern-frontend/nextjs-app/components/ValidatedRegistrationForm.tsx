"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  registrationSchema,
  type RegistrationFormData,
} from "../lib/validations/registration";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ValidatedRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),

    mode: "onBlur",

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(
    data: RegistrationFormData
  ) {
    console.log("Submitting form:", data);

    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    console.log("Form submission completed.");

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Day 143
        </p>

        <h2 className="text-2xl font-bold">
          Form Reset After Submission
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          The form resets its values and validation state
          after a successful submission.
        </p>
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-medium"
        >
          Full Name
        </label>

        <Input
          id="fullName"
          placeholder="Enter your full name"
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
          Email
        </label>

        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
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
          placeholder="Enter your password"
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
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting
          ? "Submitting..."
          : "Create Account"}
      </Button>
    </form>
  );
}