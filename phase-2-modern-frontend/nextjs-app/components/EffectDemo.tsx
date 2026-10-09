"use client";

import { useEffect, useState } from "react";

export default function EffectDemo() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name
      ? `Hello, ${name}`
      : "React Effect Demo";
  }, [name]);

  return (
    <section>
      <h2>useEffect Demo</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Name: {name}</p>
    </section>
  );
}