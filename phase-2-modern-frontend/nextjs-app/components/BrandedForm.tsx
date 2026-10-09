"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function BrandedForm() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          User Profile
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Create Profile
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Enter your information to create a developer profile.
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-800"
          >
            Full Name
          </label>

          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-800"
          >
            Email Address
          </label>

          <Input
            id="email"
            type="email"
            placeholder="akhil@example.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="role"
            className="text-sm font-medium text-slate-800"
          >
            Professional Role
          </label>

          <Input
            id="role"
            type="text"
            placeholder="Full Stack AI Engineer"
          />
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button>
            Save Profile
          </Button>

          <Button variant="outline">
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}