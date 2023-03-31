import { Signup } from "@/components/Signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Newsletter",
};

export default function Subscribe() {
  return (
    <main>
      <header>
        <h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold">Yay!</h1>
      </header>
      <article className="text-xl leading-8 mb-5">
        <p>Want to keep updated? Subscribe to my newsletter.</p>
      </article>
      <Signup />
    </main>
  );
}
