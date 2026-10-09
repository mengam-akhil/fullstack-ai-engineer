"use client";

import { useAuth } from "../context/AuthContext";

export default function AuthContextTestComponent() {
  const {
    user,
    isAuthenticated,
    login,
    logout,
  } = useAuth();

  return (
    <div>
      <p data-testid="auth-status">
        {isAuthenticated
          ? "Authenticated"
          : "Not Authenticated"}
      </p>

      {user && (
        <p data-testid="auth-user">
          {user.name}
        </p>
      )}

      <button
        type="button"
        onClick={login}
      >
        Login
      </button>

      <button
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}