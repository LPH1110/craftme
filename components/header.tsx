"use client";

import Link from "next/link";
import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { Logo } from "@/components";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/lib/hooks";
import clsx from "clsx";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <div className="px-8 fixed top-0 inset-x-0 bg-blue text-white flex justify-center items-center shadow-lg">
        <div className="container flex items-center justify-between h-[4.5rem]">
          <div className="flex items-center gap-3 min-h-full">
            <div className="w-7">
              <Logo />
            </div>
            <h2 className="font-bold text-2xl">Craft.me</h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-12">
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
          <button className="md:hidden" type="button">
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
