interface ApiUserCardProps {
  name: string;
  email: string;
}

export default function ApiUserCard({
  name,
  email,
}: ApiUserCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </article>
  );
}