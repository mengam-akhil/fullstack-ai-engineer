import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <h1>AI Engineer Dashboard</h1>

        <nav>
          <Link href="/dashboard">Dashboard</Link>{" "}
          <Link href="/dashboard/analytics">Analytics</Link>{" "}
          <Link href="/dashboard/users">Users</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}