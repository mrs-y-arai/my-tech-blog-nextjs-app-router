"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Menu } from "~/components/icons/Menu";
import TwitterX from "~/components/icons/TwitterX";
import Zenn from "~/components/icons/Zenn";
import Github from "~/components/icons/Github";
import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "~/libs/utils";
import { SITE_NAME } from "~/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-40 flex w-screen items-center justify-between bg-background px-6 py-4 text-white md:px-10">
        <Link className="flex items-center space-x-2" href="/">
          <p className="text-lg font-bold text-white">{SITE_NAME}</p>
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
        <div className="block md:hidden">
          <Button
            aria-controls="navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={toggleMenu}
            size="icon"
            variant="ghost"
          >
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <div
            onClick={closeMenu}
            className={cn(
              "fixed left-0 top-0 h-screen w-screen bg-black transition-opacity duration-500",
              isOpen
                ? "pointer-events-auto opacity-70"
                : "pointer-events-none opacity-0",
            )}
          ></div>
          {/* TODO: 閉じている時、フォーカスが当たらないようにしたい */}
          <div
            className={cn(
              "fixed right-0 top-0 block h-screen w-64 transform bg-strong-gray p-4 pt-10 text-white transition-all duration-500",
              isOpen ? "visible translate-x-0" : "invisible translate-x-full",
            )}
          >
            <Button
              className="absolute right-2 top-2"
              size="icon"
              variant="ghost"
              onClick={closeMenu}
              aria-controls="navigation"
              aria-expanded={isOpen}
              aria-label="メニューを閉じる"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close navigation menu</span>
            </Button>
            <div className="mb-6 flex flex-col gap-4">
              <Link onClick={closeMenu} className="text-white" href="/">
                Home
              </Link>
              <Link onClick={closeMenu} className="text-white" href="/page/1">
                Articles
              </Link>
              <Link onClick={closeMenu} className="text-white" href="/about">
                About
              </Link>
              <Link onClick={closeMenu} className="text-white" href="/contact">
                Contact
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
          </div>
        </div>
      </header>
    </>
  );
}
