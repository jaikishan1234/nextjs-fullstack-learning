import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/notes-mini-app"
    );

    console.log(conn.STATES);
  } catch (error) {
    throw new Error(error);
  }
}