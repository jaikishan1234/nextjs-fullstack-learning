import Image from "next/image";
import ContactForm from "./components/contact-form";
import { createContact } from "@/actions/contact";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Contact us
      </h1>
      <ContactForm action={createContact} />
    </div>
  );
}
