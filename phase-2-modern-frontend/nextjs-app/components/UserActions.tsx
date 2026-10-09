"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserActionsProps {
  users: User[];
}

export default function UserActions({
  users,
}: UserActionsProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <section>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} - {user.email}
          </p>

          <button onClick={() => setSelectedUser(user)}>
            Select
          </button>
        </div>
      ))}

      {selectedUser && (
        <div>
          <h3>Selected User</h3>

          <p>ID: {selectedUser.id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </section>
  );
}