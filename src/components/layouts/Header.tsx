import Link from "next/link";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Menu } from "~/components/icons/Menu";
import TwitterX from "~/components/icons/TwitterX";
import Zenn from "~/components/icons/Zenn";
import Github from "~/components/icons/Github";

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
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="block w-64 bg-strong-gray text-white md:hidden"
            side="right"
          >
            <div className="mb-6 flex flex-col gap-4">
              <Link className="text-white" href="/">
                <SheetClose className="block h-full w-full text-start">
                  Home
                </SheetClose>
              </Link>
              <Link className="text-white" href="/page/1">
                <SheetClose className="block h-full w-full text-start">
                  Articles
                </SheetClose>
              </Link>
              <Link className="text-white" href="/about">
                <SheetClose className="block h-full w-full text-start">
                  About
                </SheetClose>
              </Link>
              <Link className="text-white" href="/contact">
                <SheetClose className="block h-full w-full text-start">
                  Contact
                </SheetClose>
              </Link>
            </div>
            <div className="flex items-center justify-start gap-x-3">
              <Link
                className="inline-block w-7 duration-300 hover:opacity-70"
                href="https://twitter.com/yuu_a_prog"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterX />
              </Link>
              <Link
                className="inline-block w-7 duration-300 hover:opacity-70"
                href="https://github.com/mrs-y-arai"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </Link>
              <Link
                className="inline-block w-7 duration-300 hover:opacity-70"
                href="https://zenn.dev/yarai"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Zenn />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
