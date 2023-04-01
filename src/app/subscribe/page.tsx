import { Signup } from "@/components/Signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Newsletter",
};

export default function Subscribe() {
  return (
    <main>
      <h1 className="mb-7 mt-10 sm:text-4xl text-3xl font-bold font-serif">
        Subscribe to My Newsletter
      </h1>
      <p className="prose dark:prose-dark w-full">
        Stay up-to-date with the latest news and updates! Subscribe to my
        newsletter and never miss a beat.
      </p>
      <Signup className="my-4" />
    </main>
  );
}
