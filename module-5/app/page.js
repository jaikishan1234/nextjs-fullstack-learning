"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });

  const data = await res.json();
  
  console.log(data);

  if(data.success) {
    setMessage("Todo created successfully!" + data.todo.title);
  } else {
    setMessage("Failed to create todo.");
  } 
};

  return (
    <div>
      <h2>Create todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {
        message && <p>{message}</p>
      }
    </div>
  );
}