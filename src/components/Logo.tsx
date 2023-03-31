import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const isIndex = pathname === "/";

  return (
    <Link
      href="/"
      className={clsx(
        "text-xl font-mono",
        isIndex
          ? "text-gray-900 dark:text-gray-200"
          : "text-xl text-pink-600 dark:text-pink-300"
      )}
    >
      aljoseph.co
    </Link>
  );
};

export default Logo;
