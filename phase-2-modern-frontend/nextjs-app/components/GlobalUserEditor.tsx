"use client";

import { useState } from "react";

import { useUser } from "../context/UserContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function GlobalUserEditor() {
  const { user, updateUser } = useUser();

  const [name, setName] = useState(user.name);

  function handleUpdate() {
    if (!name.trim()) {
      return;
    }

    updateUser(name.trim());
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Update Global User
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Change the user name stored in the global Context.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter user name"
        />

        <Button onClick={handleUpdate}>
          Update User
        </Button>
      </div>
    </section>
  );
}