"use client";

import { useState } from "react";

export default function StateDemo() {
  const [name, setName] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h2>State Demo</h2>

      <div>
        <h3>Text Input</h3>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <p>Name: {name}</p>
      </div>

      <div>
        <h3>Open / Close</h3>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>

        {isOpen && (
          <p>
            The panel is currently open.
          </p>
        )}
      </div>
    </section>
  );
}