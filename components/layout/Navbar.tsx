import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          ASTRIX
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <button className="px-5 py-2 rounded-lg bg-indigo-600">Contact</button>
      </div>
    </header>
  );
}
