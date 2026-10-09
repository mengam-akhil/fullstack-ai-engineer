
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function EnterpriseProjectForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6 md:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Project Management
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Create New Project
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Provide the project information below. Required fields
          should be completed before submitting the form.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-8 p-6 md:p-8">
          {/* Project Information */}
          <section>
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Project Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Basic information about the project.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="project-name"
                  className="text-sm font-medium text-slate-800"
                >
                  Project Name
                </label>

                <Input
                  id="project-name"
                  name="projectName"
                  type="text"
                  placeholder="AI Analytics Platform"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="project-code"
                  className="text-sm font-medium text-slate-800"
                >
                  Project Code
                </label>

                <Input
                  id="project-code"
                  name="projectCode"
                  type="text"
                  placeholder="AI-PLATFORM-001"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="technology"
                  className="text-sm font-medium text-slate-800"
                >
                  Primary Technology
                </label>

                <Input
                  id="technology"
                  name="technology"
                  type="text"
                  placeholder="Next.js"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="repository"
                  className="text-sm font-medium text-slate-800"
                >
                  Repository URL
                </label>

                <Input
                  id="repository"
                  name="repository"
                  type="url"
                  placeholder="https://github.com/example/project"
                />
              </div>
            </div>
          </section>

          {/* Owner Information */}
          <section className="border-t border-slate-200 pt-8">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Project Owner
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Information about the person responsible for the project.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="owner-name"
                  className="text-sm font-medium text-slate-800"
                >
                  Owner Name
                </label>

                <Input
                  id="owner-name"
                  name="ownerName"
                  type="text"
                  placeholder="Project owner"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="owner-email"
                  className="text-sm font-medium text-slate-800"
                >
                  Owner Email
                </label>

                <Input
                  id="owner-email"
                  name="ownerEmail"
                  type="email"
                  placeholder="owner@example.com"
                  required
                />
              </div>
            </div>
          </section>

          {/* Deployment Information */}
          <section className="border-t border-slate-200 pt-8">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Deployment Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Provide the initial deployment configuration.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="environment"
                  className="text-sm font-medium text-slate-800"
                >
                  Environment
                </label>

                <Input
                  id="environment"
                  name="environment"
                  type="text"
                  placeholder="Production"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="region"
                  className="text-sm font-medium text-slate-800"
                >
                  Cloud Region
                </label>

                <Input
                  id="region"
                  name="region"
                  type="text"
                  placeholder="eu-central-1"
                  required
                />
              </div>
            </div>
          </section>

          {/* Actions */}
          <section className="flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitted(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              Create Project
            </Button>
          </section>

          {submitted && (
            <div
              role="status"
              className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
            >
              Project form submitted successfully.
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
