"use client";

import Image from "next/image";
import { Signup } from "./Signup";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export function Aside() {
  const pathname = usePathname();
  const isIndex = pathname === "/";

  return (
    <aside>
      {!isIndex && (
        <>
          <Signup />
          <div className="mb-7">
            <Logo />
          </div>
        </>
      )}
      <div className="flex mb-12 items-center text-base">
        <Image
          src="/assets/images/me.jpeg"
          alt="Al Joseph Condino"
          width={48}
          height={48}
          className="rounded-full"
        />
        <p className="ml-3.5 max-w-xs text-gray-700 dark:text-gray-400">
          Personal blog by Al Joseph Condino.
          <span className="block">
            Web developer at{" "}
            <a
              className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
              href="https://whatoplay.com/"
            >
              whatoplay.com
            </a>
            .
          </span>
        </p>
      </div>
    </aside>
  );
}
