import React from "react";
import Logo from "../logo";

const Footer = () => {
  return (
    <section id="footer" className="px-8 py-4 bg-blue w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-h-full">
            <div className="w-7">
              <Logo />
            </div>
            <h2 className="font-bold text-2xl text-white">Craft.me</h2>
          </div>
          <div>
            <p className="text-desc">+84 935 5727 55 | Eddie</p>
          </div>
          <div>
            <p className="text-desc">Craft.me © All right reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
