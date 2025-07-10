import { useState } from 'react';
import Image from 'next/image';
import mypic from '../public/images/mypic.jpeg';
import { ArrowDownV, Hamburger } from '@/public/Icons';
import Link from 'next/link';

const Nav = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  return (
    <nav className="flex items-center p-5 text-white relative">
      <h2 className="font-[cursive] text-2xl">&lt; A E A / &gt;</h2>

      <div className="ml-auto flex items-center gap-4">
        {/* Desktop Links */}
        <div className="hidden sm:flex gap-5">
          <Link
            href='https://docs.google.com/document/d/1fYQR1V3ZiHF0sgxrq5OShiLa1XOmU0V2ZbpEjmRtKd8/edit?tab=t.0'
            className="hover:underline"
            target='_blank'
          >
            <h5>Resume</h5>
          </Link>
          <a href="#about" className="hover:underline">
            <h5>About Me</h5>
          </a>
          <a href="#projects" className="hover:underline">
            <h5>Projects</h5>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={handleMenu}
          className="sm:hidden"
          aria-expanded={isShowMenu}
          aria-label="Toggle Menu"
        >
          {isShowMenu ? <ArrowDownV /> : <Hamburger />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isShowMenu && (
        <div className="absolute top-14 right-4 bg-black border-white border rounded-md p-3 flex flex-col gap-3 sm:hidden z-10">
          <a
            href="https://www.cakeresume.com/s--YVVLxMd653WV6--xgGjYHg--/ademola-adeyemi"
            className="hover:underline"
            target='_blank'
          >
            <h5>Resume</h5>
          </a>
          <a href="#about" className="hover:underline">
            <h5>About Me</h5>
          </a>
          <a href="#projects" className="hover:underline">
            <h5>Projects</h5>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
