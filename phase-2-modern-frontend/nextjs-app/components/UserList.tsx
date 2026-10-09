
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  deleteUser,
  getUsers,
  type ApiUser,
} from "../lib/api/users";

import { getApiErrorMessage } from "../lib/api/errors";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./ui/alert";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface UserListProps {
  refreshKey?: number;
}

const USERS_PER_PAGE = 2;

export default function UserList({
  refreshKey = 0,
}: UserListProps) {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingUserId, setDeletingUserId] =
    useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await getUsers();

        if (!cancelled) {
          setUsers(data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load users:", error);
          setErrorMessage(getApiErrorMessage(error));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadUsers();

    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return users;
    }

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / USERS_PER_PAGE)
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedUsers = useMemo(() => {
    const startIndex =
      (safeCurrentPage - 1) * USERS_PER_PAGE;

    return filteredUsers.slice(
      startIndex,
      startIndex + USERS_PER_PAGE
    );
  }, [filteredUsers, safeCurrentPage]);

  const handleDelete = useCallback(
    async (userId: number) => {
      try {
        setDeletingUserId(userId);
        setErrorMessage("");

        await deleteUser(userId);

        setUsers((currentUsers) =>
          currentUsers.filter((user) => user.id !== userId)
        );
      } catch (error) {
        console.error("Failed to delete user:", error);
        setErrorMessage(getApiErrorMessage(error));
      } finally {
        setDeletingUserId(null);
      }
    },
    []
  );

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handlePreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function handleNextPage() {
    setCurrentPage((page) =>
      Math.min(page + 1, totalPages)
    );
  }

  if (loading) {
    return (
      <section
        aria-labelledby="users-heading"
        aria-busy="true"
        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
      >
        <h2 id="users-heading" className="text-2xl font-bold">
          Registered Users
        </h2>

        <p
          role="status"
          className="mt-4 text-sm text-slate-600 dark:text-slate-400"
        >
          Loading users…
        </p>
      </section>
    );
  }

  if (errorMessage && users.length === 0) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Unable to Load Users</AlertTitle>
        <AlertDescription>{errorMessage}</AlertDescription>
      </Alert>
    );
  }

  return (
    <section
      aria-labelledby="users-heading"
      className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <header className="border-b border-slate-200 p-4 sm:p-6 dark:border-slate-800">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Data Integration
        </p>

        <h2
          id="users-heading"
          className="mt-2 text-2xl font-bold"
        >
          Registered Users
        </h2>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Search, review, and manage user records.
        </p>

        <div className="mt-5">
          <label
            htmlFor="user-search"
            className="mb-2 block text-sm font-medium"
          >
            Search users
          </label>

          <Input
            id="user-search"
            type="search"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(event) =>
              handleSearchChange(event.target.value)
            }
            autoComplete="off"
          />
        </div>

        <p
          className="mt-3 text-sm text-slate-500"
          aria-live="polite"
          aria-atomic="true"
        >
          {filteredUsers.length}{" "}
          {filteredUsers.length === 1 ? "user" : "users"} found
        </p>
      </header>

      {errorMessage && (
        <div className="p-4 sm:p-6">
          <Alert variant="destructive">
            <AlertTitle>Request Failed</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </div>
      )}

      <ul className="divide-y divide-slate-200 dark:divide-slate-800">
        {paginatedUsers.length === 0 ? (
          <li className="p-6">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No users match your search.
            </p>
          </li>
        ) : (
          paginatedUsers.map((user) => (
            <li
              key={user.id}
              className="flex min-w-0 flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="min-w-0">
                <p className="wrap-break-word font-semibold">
                  {user.name}
                </p>

                <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                  {user.email}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  User ID: {user.id}
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  type="button"
                  variant="destructive"
                  disabled={deletingUserId !== null}
                  onClick={() => void handleDelete(user.id)}
                  aria-label={`Delete ${user.name}`}
                  className="min-h-11 w-full sm:w-auto"
                >
                  {deletingUserId === user.id
                    ? "Deleting…"
                    : "Delete"}
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>

      <footer className="flex flex-col gap-4 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-slate-800">
        <p
          className="text-sm text-slate-600 dark:text-slate-400"
          aria-live="polite"
        >
          Page {safeCurrentPage} of {totalPages}
        </p>

        <nav
          aria-label="User list pagination"
          className="flex gap-2"
        >
          <Button
            type="button"
            variant="outline"
            disabled={safeCurrentPage === 1}
            onClick={handlePreviousPage}
            className="min-h-11 flex-1 sm:flex-none"
          >
            Previous
          </Button>

          <Button
            type="button"
            variant="outline"
            disabled={safeCurrentPage >= totalPages}
            onClick={handleNextPage}
            className="min-h-11 flex-1 sm:flex-none"
          >
            Next
          </Button>
        </nav>
      </footer>
    </section>
  );
}
