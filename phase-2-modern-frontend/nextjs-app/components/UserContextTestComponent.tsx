"use client";

import { useUser } from "../context/UserContext";

export default function UserContextTestComponent() {
  const { user, updateUser } = useUser();

  return (
    <div>
      <p data-testid="user-name">
        {user.name}
      </p>

      <p data-testid="user-email">
        {user.email}
      </p>

      <p data-testid="user-role">
        {user.role}
      </p>

      <button
        type="button"
        onClick={() => updateUser("Updated User")}
      >
        Update User
      </button>
    </div>
  );
}