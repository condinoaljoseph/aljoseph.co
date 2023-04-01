import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Subscription",
};

export default function Confirm() {
  return (
    <main>
      <h1 className="mb-7 mt-10 sm:text-4xl text-3xl font-bold font-serif">
        Confirm Your Subscription
      </h1>
      <article className="prose dark:prose-dark w-full">
        Thank you for subscribing. You will need to check your inbox and confirm
        your subscription. If you cant find the email try searching{" "}
        <code>aljoseph.co</code> or check your spam folder.
      </article>
    </main>
  );
}
