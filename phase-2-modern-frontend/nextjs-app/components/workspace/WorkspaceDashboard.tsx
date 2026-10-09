
"use client";

import { useEffect, useState } from "react";

import WorkspaceSkeleton from "./WorkspaceSkeleton";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  type Task,
  type TaskStatus,
} from "../../lib/api/tasks";

import { getApiErrorMessage } from "../../lib/api/errors";

const statuses: TaskStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
];

const statusStyles: Record<TaskStatus, string> = {
  "In Progress":
    "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Pending:
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  Completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

export default function WorkspaceDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("General");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadTasks() {
      try {
        setError("");

        const data = await getTasks();

        if (!cancelled) {
          setTasks(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(getApiErrorMessage(err));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadTasks();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Enter a task title.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setNotice("");

      const task = await createTask({
        title: title.trim(),
        project: project.trim() || "General",
        description: description.trim() || null,
        status: "Pending",
        due_date: dueDate || null,
      });

      setTasks((current) => [task, ...current]);
      setTitle("");
      setProject("General");
      setDescription("");
      setDueDate("");
      setNotice("Task created successfully.");
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function handleStatusChange(
    task: Task,
    status: TaskStatus
  ) {
    try {
      setError("");
      setNotice("");

      const updated = await updateTask(task.id, { status });

      setTasks((current) =>
        current.map((item) =>
          item.id === updated.id ? updated : item
        )
      );

      setNotice("Task status updated.");
    } catch (err) {
      setError(getApiErrorMessage(err));
    }
  }

  async function handleRename(task: Task) {
    if (!editingTitle.trim()) {
      setError("Task title cannot be empty.");
      return;
    }

    try {
      setError("");
      setNotice("");

      const updated = await updateTask(task.id, {
        title: editingTitle.trim(),
      });

      setTasks((current) =>
        current.map((item) =>
          item.id === updated.id ? updated : item
        )
      );

      setEditingId(null);
      setEditingTitle("");
      setNotice("Task updated successfully.");
    } catch (err) {
      setError(getApiErrorMessage(err));
    }
  }

  async function handleDelete(task: Task) {
    if (!window.confirm(`Delete "${task.title}"?`)) {
      return;
    }

    try {
      setError("");
      setNotice("");

      await deleteTask(task.id);

      setTasks((current) =>
        current.filter((item) => item.id !== task.id)
      );

      setNotice("Task deleted successfully.");
    } catch (err) {
      setError(getApiErrorMessage(err));
    }
  }

  if (loading) {
    return <WorkspaceSkeleton />;
  }

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const stats = [
    { label: "Total tasks", value: tasks.length },
    { label: "In progress", value: inProgress },
    { label: "Pending", value: pending },
    { label: "Completed", value: completed },
  ];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Workspace
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          My Dashboard
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Manage tasks backed by your PostgreSQL database.
        </p>
      </header>

      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300"
        >
          {error}
        </p>
      )}

      {notice && (
        <p
          role="status"
          className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
        >
          {notice}
        </p>
      )}

      <section
        aria-label="Task summary"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Create a task
        </h3>

        <form
          onSubmit={handleCreate}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <label className="space-y-1 text-sm font-medium">
            Task title
            <input
              required
              maxLength={200}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
              placeholder="Build task API"
            />
          </label>

          <label className="space-y-1 text-sm font-medium">
            Project
            <input
              maxLength={120}
              value={project}
              onChange={(event) => setProject(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
              placeholder="Backend Integration"
            />
          </label>

          <label className="space-y-1 text-sm font-medium sm:col-span-2">
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
              rows={2}
              placeholder="Optional task details"
            />
          </label>

          <label className="space-y-1 text-sm font-medium">
            Due date
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <div className="flex items-end">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {saving ? "Creating..." : "Create task"}
            </button>
          </div>
        </form>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 xl:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent tasks
          </h3>

          {tasks.length === 0 ? (
            <p className="py-8 text-sm text-slate-500">
              No tasks yet. Create your first task above.
            </p>
          ) : (
            <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
              {tasks.map((task) => (
                <article key={task.id} className="space-y-3 py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      {editingId === task.id ? (
                        <form
                          className="flex flex-wrap gap-2"
                          onSubmit={(event) => {
                            event.preventDefault();
                            void handleRename(task);
                          }}
                        >
                          <input
                            autoFocus
                            value={editingTitle}
                            onChange={(event) =>
                              setEditingTitle(event.target.value)
                            }
                            className="min-w-0 flex-1 rounded border border-slate-300 px-2 py-1 dark:border-slate-700 dark:bg-slate-950"
                          />
                          <button
                            className="text-sm font-medium text-indigo-600"
                            type="submit"
                          >
                            Save
                          </button>
                          <button
                            className="text-sm text-slate-500"
                            type="button"
                            onClick={() => {
                              setEditingId(null);
                              setEditingTitle("");
                            }}
                          >
                            Cancel
                          </button>
                        </form>
                      ) : (
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {task.title}
                        </h4>
                      )}

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {task.project}
                        {task.due_date
                          ? ` · Due ${task.due_date}`
                          : ""}
                      </p>

                      {task.description && (
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                          {task.description}
                        </p>
                      )}
                    </div>

                    <span
                      className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status]}`}
                    >
                      {task.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <label className="text-sm text-slate-600 dark:text-slate-400">
                      Status{" "}
                      <select
                        value={task.status}
                        onChange={(event) =>
                          void handleStatusChange(
                            task,
                            event.target.value as TaskStatus
                          )
                        }
                        className="ml-1 rounded border border-slate-300 px-2 py-1 dark:border-slate-700 dark:bg-slate-950"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      type="button"
                      className="text-sm font-medium text-indigo-600 hover:underline"
                      onClick={() => {
                        setEditingId(task.id);
                        setEditingTitle(task.title);
                      }}
                    >
                      Edit title
                    </button>

                    <button
                      type="button"
                      className="text-sm font-medium text-red-600 hover:underline"
                      onClick={() => void handleDelete(task)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Task progress
          </h3>

          <div className="mt-6 space-y-6">
            {stats.slice(1).map((stat) => {
              const percentage = tasks.length
                ? Math.round((stat.value / tasks.length) * 100)
                : 0;

              return (
                <div key={stat.label}>
                  <div className="mb-2 flex justify-between gap-2 text-sm">
                    <span>{stat.label}</span>
                    <span>{percentage}%</span>
                  </div>

                  <div
                    className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                    role="progressbar"
                    aria-label={`${stat.label} percentage`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={percentage}
                  >
                    <div
                      className="h-full rounded-full bg-indigo-600 transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </section>
    </div>
  );
}
