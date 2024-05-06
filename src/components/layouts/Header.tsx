import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-background px-10 py-4 text-white md:px-10">
        <Link className="flex items-center space-x-2" href="/">
          <p className="text-lg font-bold text-white">YUU BLOG</p>
        </Link>
        <nav className="ml-8 hidden space-x-4 md:flex">
          <Link className="text-white" href="/">
            Home
          </Link>
          <Link className="text-white" href="/page/1">
            Articles
          </Link>
          <Link className="text-white" href="/about">
            About
          </Link>
          <Link className="text-white" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}
