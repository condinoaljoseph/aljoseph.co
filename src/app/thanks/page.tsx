import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks for subscribing",
};

export default function Thanks() {
  return (
    <main>
      <h1 className="mb-7 mt-10 sm:text-4xl text-3xl font-bold font-serif">
        Thank You for Subscribing!
      </h1>
      <article className="prose dark:prose-dark w-full">
        You are now confirmed. You can expect to receive emails as I create new
        content.
      </article>
    </main>
  );
}
