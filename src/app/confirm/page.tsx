import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Subscription",
};

export default function Confirm() {
  return (
    <main>
      <h1 className="mb-7 mt-14 sm:text-5xl text-4xl font-bold">
        Just one more thing...
      </h1>
      <article className="text-xl leading-8">
        <p>
          Thank you for subscribing. You will need to check your inbox and
          confirm your subscription. If you cant find email try searching{" "}
          <code>aljoseph.co</code>.
        </p>
      </article>
    </main>
  );
}
