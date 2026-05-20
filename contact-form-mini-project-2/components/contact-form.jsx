"use client";

import Form from "next/form";

export default function ContactForm({ action }) {
  return (
    <Form action={action} className="space-y-4 flex flex-col">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border p-2 w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border p-2 w-full"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="border p-2 w-full"
      ></textarea>

      <button
        type="submit"
        className="bg-black text-white px-4 py-12"
      >
        Submit
      </button>
    </Form>
  );
}