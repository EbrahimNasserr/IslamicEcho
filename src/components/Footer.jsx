import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full p-6 bg-[#1F3352] mt-10">
      <div className=" flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between gap-5 max-w-6xl mx-auto">
        <div>
          <Image src="/logo.png" className=" hidden sm:flex" width={100} height={100} alt="logo" />
          <p className=" text-3xl text-slate-300">
            learn qur&apos;an with islamicEcho
          </p>
        </div>
        <div className=" text-slate-300">
          <h2 className=" text-3xl">api Resources</h2>
          <div className=" flex flex-col gap-2 mt-2">
            <a href="https://alquran.cloud/api" target="_blank">
              Al Quran Cloud
            </a>
            <a href="https://aladhan.com/prayer-times-api" target="_blank">
              prayer times
            </a>
          </div>
        </div>
      </div>
      <p className=" w-full flex justify-center items-center mt-5 text-lg text-slate-300">
        designed & built by ebrahimNasser
      </p>
    </footer>
  );
}
