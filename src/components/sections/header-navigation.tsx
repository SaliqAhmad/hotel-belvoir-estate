"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e3803ac6-8c4f-45bd-8330-882b643f54bd/visual-edit-uploads/1763974296161-ki9ja7jsij.png"
                alt="Luxorefi Logo"
                width={160}
                height={30}
                className="!text-base !w-full !h-full !max-w-full"
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
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="text-white">

                <Menu className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-0 left-0 h-full w-full bg-[#0F1A24] text-white p-5 z-[100] transition-transform duration-500 ease-in-out lg:hidden",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-10">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e3803ac6-8c4f-45bd-8330-882b643f54bd/visual-edit-uploads/1763974296161-ki9ja7jsij.png"
              alt="Luxorefi Logo"
              width={140}
              height={26} />

          </Link>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X className="h-8 w-8" />
          </button>
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
      </div>
    </>);

}
