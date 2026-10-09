
import apiClient from "./client";

export type TaskStatus =
  | "Pending"
  | "In Progress"
  | "Completed";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  project: string;
  status: TaskStatus;
  due_date: string | null;
  created_at: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string | null;
  project: string;
  status: TaskStatus;
  due_date?: string | null;
}

export type UpdateTaskInput = Partial<CreateTaskInput>;

export async function getTasks(): Promise<Task[]> {
  const response = await apiClient.get<Task[]>("/tasks");
  return response.data;
}

export async function createTask(
  data: CreateTaskInput
): Promise<Task> {
  const response = await apiClient.post<Task>("/tasks", data);
  return response.data;
}

export async function updateTask(
  id: number,
  data: UpdateTaskInput
): Promise<Task> {
  const response = await apiClient.patch<Task>(
    `/tasks/${id}`,
    data
  );
  return response.data;
}

export async function deleteTask(id: number): Promise<void> {
  await apiClient.delete(`/tasks/${id}`);
}
