export default async function DashboardPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </main>
  );
}