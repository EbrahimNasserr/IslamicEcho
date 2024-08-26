"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { usePathname } from "next/navigation";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="px-6 py-3 max-w-6xl mx-auto flex justify-between items-center gap-2 z-50">
      <Link href="/" className="z-50">
        <Image src={logo} alt="logo" width={100} height={100} priority />
      </Link>
      <div className=" z-50 flex gap-5 items-center flex-row-reverse">
        <button className=" md:hidden" onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
        <DarkModeSwitch />
      </div>
      <nav className=" hidden z-50 md:flex text-slate-800 dark:text-slate-200 items-center justify-between w-full font-bold text-sm md:text-lg lg:text-xl md:w-1/2">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 text-amber-500 rounded-lg"
              : ""
          }`}
        >
          home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          aboutIslam
        </Link>
        <Link
          href="/quran"
          className={`${
            pathname === "/quran"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          qur&apos;an
        </Link>
        <Link
          href="/prayerTimes"
          className={`${
            pathname === "/prayerTimes"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          prayerTimes
        </Link>
      </nav>
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
