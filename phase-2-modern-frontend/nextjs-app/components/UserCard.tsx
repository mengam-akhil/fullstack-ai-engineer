interface UserCardProps {
  name: string;
  role: string;
  experience: number;
}

export default function UserCard({
  name,
  role,
  experience,
}: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Experience: {experience} years</p>
    </article>
  );
}