import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks for subscribing",
};

export default function Thanks() {
  return (
    <main>
      <h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold">
        Thank you for subscribing
      </h1>
      <section className="text-xl leading-8">
        <p>
          You are now confirmed. You can expect to receive emails as I create
          new content.
        </p>
      </section>
    </main>
  );
}
