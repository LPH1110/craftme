"use client";

import { Logo } from "@/components";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/lib/hooks";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import MobileNavbar from "../mobileNavbar";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 20) {
          headerRef.current.classList.add("shadow-xl");
        } else {
          headerRef.current.classList.remove("shadow-xl");
        }
      }
    };
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });
  return (
    <header
      ref={headerRef}
      className="px-8 z-[999] fixed inset-x-0 top-0 bg-blue text-white flex justify-center items-center transition"
    >
      <div className="container flex items-center justify-between h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3 min-h-full">
          <div className="w-7">
            <Logo />
          </div>
          <h2 className="font-bold text-2xl">Craft.me</h2>
        </Link>
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex items-center justify-between h-full">
            <ul className="flex items-center justify-center gap-12">
              {links.map((link) => (
                <Fragment key={link.hash}>
                  <li className=" flex items-center justify-center relative">
                    <Link
                      className={clsx("hover:text-sea transition-all", {
                        "text-sea": activeSection === link.name,
                      })}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>
          <Link
            href="#contact"
            className="hover:text-sea transition-all py-2 px-8 rounded-full border border-gray-100"
          >
            Let's talk
          </Link>
        </div>
        {/* Mobile */}
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
