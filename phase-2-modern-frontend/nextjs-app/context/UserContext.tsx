"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UserContextValue {
  user: User;
  updateUser: (name: string) => void;
}

const defaultUser: User = {
  id: 1,
  name: "Akhil Kumar",
  email: "akhil@example.com",
  role: "Full Stack AI Engineer",
};

const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export function UserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User>(defaultUser);

  function updateUser(name: string) {
    setUser((currentUser) => ({
      ...currentUser,
      name,
    }));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser must be used inside UserProvider"
    );
  }

  return context;
}