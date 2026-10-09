import UserActions from "../../components/UserActions";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function ServerClientDemoPage() {
  const response = await fetch(
    "http://127.0.0.1:8000/users",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  const users: User[] = await response.json();

  return (
    <main>
      <h1>Server and Client Components</h1>

      <p>
        Users are fetched on the server and passed
        to an interactive client component.
      </p>

      <UserActions users={users} />
    </main>
  );
}