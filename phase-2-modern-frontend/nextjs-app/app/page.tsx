import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Full Stack AI Engineer</h1>

      <p>Next.js App Router Learning Project</p>

      <nav>
        <Link href="/">Home</Link>{" "}
        <Link href="/dashboard">Dashboard</Link>{" "}
        <Link href="/profile">Profile</Link>{" "}
        <Link href="/projects">Projects</Link>{" "}
        <Link href="/settings">Settings</Link>
      </nav>

      <h2>Chat Examples</h2>

      <ul>
        <li>
          <Link href="/chat/101">Chat 101</Link>
        </li>

        <li>
          <Link href="/chat/202">Chat 202</Link>
        </li>

        <li>
          <Link href="/chat/303">Chat 303</Link>
        </li>
      </ul>
    </main>
  );
}