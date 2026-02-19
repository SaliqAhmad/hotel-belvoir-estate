"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";


interface NavItem {
  label: string;
  href: string;
  isLeft: boolean;
}

const navItems: NavItem[] = [
  { label: 'ABOUT', href: '/', isLeft: true },
  { label: 'ROOMS', href: '/', isLeft: true },
  { label: 'GALLERY', href: '/', isLeft: false },
  { label: 'CONTACT', href: '/', isLeft: false }];


export default function HeaderNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = navItems.filter((item) => item.isLeft);
  const rightNavItems = navItems.filter((item) => !item.isLeft);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body",
          isScrolled ? "py-4 bg-[#0F1A24]/90 backdrop-blur-md shadow-lg" : "py-10"
        )}>

        <div className="mx-auto flex h-[30px] max-w-[1320px] items-center justify-between px-5 relative">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-12">
              {leftNavItems.map((item) =>
                <li key={item.label}>
                  <Link href={item.href} className="text-white hover:text-primary hover:underline underline-offset-4 transition-all !text-xs">
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-300">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Belvoir Estate Logo"
                width={200}
                height={40}
                className={cn(
                  "h-auto object-contain transition-all duration-300",
                  isScrolled ? "w-[120px] md:w-[140px]" : "w-[160px] md:w-[220px]"
                )}
                priority />
            </Link>
          </div>

          <div className="flex items-center gap-x-12">
            {/* Desktop Right Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-12">
                {rightNavItems.map((item) =>
                  <li key={item.label}>
                    <Link href={item.href} className="text-white hover:text-primary hover:underline underline-offset-4 transition-all !text-xs">
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <Dialog.Trigger asChild>
                  <button
                    aria-label="Open menu"
                    className="text-white">
                    <Menu className="h-8 w-8" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" />
                  <Dialog.Content className="fixed top-0 left-0 h-full w-full bg-[#0F1A24] text-white p-5 z-[101] outline-none animate-in slide-in-from-left duration-500">
                    <div className="flex justify-between items-center mb-10">
                      <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <Image
                          src="/Logo.svg"
                          alt="Belvoir Estate Logo"
                          width={120}
                          height={22}
                          className="w-[120px] h-auto object-contain" />
                      </Link>
                      <Dialog.Close asChild>
                        <button aria-label="Close menu">
                          <X className="h-8 w-8" />
                        </button>
                      </Dialog.Close>
                    </div>
                    <nav>
                      {navItems.map((item) =>
                        <div key={item.label} className="border-b border-white/10">
                          <Link
                            href={item.href}
                            className="block py-4 text-lg w-full hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}>
                            {item.label}
                          </Link>
                        </div>
                      )}
                    </nav>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>
      </header>
    </>);

}
