'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  if (pathname.match('/admin/') || pathname.match('/hotline')) {
    return <></>;
  }
  return (
    <div
      className="mx-auto flex flex-wrap items-center justify-center space-x-2 border-b-8 border-black text-center text-xl md:space-x-5 md:text-4xl"
      style={{ maxWidth: '800px' }}
    >
      <Link
        className="px-1 transition-colors hover:text-sky-400 md:px-0"
        href="/"
      >
        HOME
      </Link>
      <Link
        className="px-1 transition-colors hover:text-sky-400 md:px-0"
        href="/treasures"
      >
        TREASURES
      </Link>
      <Link
        className="px-1 transition-colors hover:text-sky-400 md:px-0"
        href="/trinkets"
      >
        TRINKETS
      </Link>
      <Link
        className="px-1 transition-colors hover:text-sky-400 md:px-0"
        href="/triangle"
      >
        TRIANGLE
      </Link>
      <Link
        className="px-1 transition-colors hover:text-sky-400 md:px-0"
        href="/team"
      >
        TEAM
      </Link>
    </div>
  );
}
