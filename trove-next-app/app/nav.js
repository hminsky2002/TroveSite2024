"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  if (pathname.match('/admin/')) {
    return <></>;
  }
  return (

    <div className="space-x-5">
        <Link href="/">HOME</Link>
        <Link href="/treasures">TREASURES</Link>
        <Link href="/trinkets">TRINKETS</Link>
        <Link href="/triangle">TRIANGLE</Link>
        <Link href="/team">TEAM</Link>
    </div>
  );
}
