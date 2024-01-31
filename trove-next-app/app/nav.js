import Link from "next/link";

export default function Nav() {
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
