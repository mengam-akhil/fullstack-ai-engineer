interface ChatPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChatPage({
  params,
}: ChatPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Chat</h1>
      <p>Chat ID: {id}</p>
    </main>
  );
}