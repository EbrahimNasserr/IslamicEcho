import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={`fixed right-0 bg-slate-200 dark:bg-[#1F3352] z-50 top-0 w-full md:w-96 h-screen duration-1000 ${
        open ? " visible translate-x-0" : "invisible translate-x-full"
      }`}
    >
      <button
        className=" text-4xl absolute right-0 pr-10 pt-10"
        onClick={() => {
          setOpen(!open);
        }}
      >
        x
      </button>
      <nav className=" flex flex-col text-xl font-bold items-center py-52 justify-around h-full">
        <Link
          href="/"
          onClick={() => {
            setOpen(!open);
          }}
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
          onClick={() => {
            setOpen(!open);
          }}
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
          onClick={() => {
            setOpen(!open);
          }}
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
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/prayerTimes"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          prayerTimes
        </Link>
      </nav>
    </div>
  );
}
