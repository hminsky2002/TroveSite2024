"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  if (pathname.match("/admin/")) {
    return <></>;
  }
  return (
    <div
      className="flex flex-wrap justify-center items-center space-x-2 md:space-x-5 mx-auto text-xl md:text-4xl border-b-8 border-black text-center"
      style={{ maxWidth: "800px" }}
    >
      <Link
        className="hover:text-sky-400 transition-colors px-1 md:px-0"
        href="/"
      >
        HOME
      </Link>
      <Link
        className="hover:text-sky-400 transition-colors px-1 md:px-0"
        href="/treasures"
      >
        TREASURES
      </Link>
      <Link
        className="hover:text-sky-400 transition-colors px-1 md:px-0"
        href="/trinkets"
      >
        TRINKETS
      </Link>
      <Link
        className="hover:text-sky-400 transition-colors px-1 md:px-0"
        href="/triangle"
      >
        TRIANGLE
      </Link>
      <Link
        className="hover:text-sky-400 transition-colors px-1 md:px-0"
        href="/team"
      >
        TEAM
      </Link>
    </div>
  );
}
