"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  if (pathname.match('/admin/')) {
    return <></>;
  }
  return (

    <div className="flex items-center space-x-5 mx-auto text-xl md:text-4xl border-b-8 border-black	" style={{ maxWidth: "800px" }}>
        <Link className="hover:text-sky-400 transition-colors" href="/">HOME</Link>
        <Link className="hover:text-sky-400 transition-colors" href="/treasures">TREASURES</Link>
        <Link className="hover:text-sky-400 transition-colors" href="/trinkets">TRINKETS</Link>
        <Link className="hover:text-sky-400 transition-colors" href="/triangle">TRIANGLE</Link>
        <Link className="hover:text-sky-400 transition-colors" href="/team">TEAM</Link>
    </div>
  );
}
