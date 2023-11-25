import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/lib/hooks";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className="relative lg:hidden">
      <button type="button" onClick={() => setOpen(!open)}>
        <FaBars className="w-6 h-6" />
      </button>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="bg-white rounded-xl shadow-lg absolute right-0 p-4 min-w-[16rem]">
          <ul className="w-full">
            {links.map((link) => (
              <Fragment key={link.hash}>
                <li className="py-2 w-full text-center">
                  <Link
                    className={clsx("text-blue hover:text-mountain", {
                      "text-mountain": activeSection === link.name,
                    })}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default MobileNavbar;
