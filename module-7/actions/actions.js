"use server";

export async function createTodo(formData) {
  const title = formData.get("title");

  console.log("creating a todo", title);
}

export async function updateTodo(title, desc, isCompleted) {

  const newData = {
    title,
    desc,
    isCompleted
  };

  // db call

  return {
    success: true,
    message: "Updated successfully"
  };
}

export async function submitUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  console.log("Submitting user data", name, email);

  // db logic
}