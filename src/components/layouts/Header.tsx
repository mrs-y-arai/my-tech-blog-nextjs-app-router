import Link from "next/link";
import { SheetTrigger, SheetContent, Sheet } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Menu } from "~/components/icons/Menu";

export default function Header() {
  return (
    <>
      <header className="fixed left-0 top-0 z-40 flex w-screen items-center justify-between bg-background px-6 py-4 text-white md:px-10">
        <Link className="flex items-center space-x-2" href="/">
          <p className="text-lg font-bold text-white">YUU BLOG</p>
        </Link>
        {/* PC */}
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
        {/* SP */}
        <Sheet>
          <SheetTrigger className="block md:hidden" asChild>
            <Button size="icon" variant="ghost">
              <Menu className="h-8   w-8" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="block w-64 bg-strong-gray text-white md:hidden"
            side="right"
          >
            <div className="flex flex-col gap-4">
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
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
