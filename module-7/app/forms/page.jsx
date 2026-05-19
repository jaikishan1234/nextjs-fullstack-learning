"use client";
import React from "react";
import Form from "next/form";
import { submitUser } from "@/actions/actions";
import { useRouter } from "next/navigation";

const FormsPage = () => {
    const router = useRouter();

  return (
    <div>
      <h1>Create User</h1>

      <Form action={submitUser}>
        <input type="text" name="name" placeholder="Enter name" />

        <input type="email" name="email" placeholder="Enter email" />

        <button type="submit">Submit</button>
      </Form>

      <h1>Search Form</h1>

      <Form action={"/search"}>
        <input type="text" name="query" placeholder="Search post id" />

        <button type="submit">Search</button>
      </Form>

      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default FormsPage;
