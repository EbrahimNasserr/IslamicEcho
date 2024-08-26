"use client";
import { useGetSurahsQuery } from "@/services/quranApi";
import Link from "next/link";
import Error from "../error";
import Loader from "../loading";

function Quran() {
  const { data: surahs, error, isLoading } = useGetSurahsQuery();
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <section className="px-3">
      <h1 className=" text-5xl text-[#1F3352] dark:text-slate-300 text-center max-w-6xl mx-auto mt-10 font-bold flex justify-center items-center">
        read & listen to the holy of qur&apos;an
      </h1>
      <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-10">
        {surahs.data.map((surah) => (
          <li key={surah.number}>
            <Link
              className=" w-full h-full bg-[#1F3352] flex items-center justify-between p-6 rounded-xl"
              href={`/quran/${surah.number}`}
            >
              <div className=" rotate-45 rounded w-14 h-14 bg-red-600 flex items-center justify-center">
                <p className=" -rotate-45 text-slate-100">{surah.number}</p>
              </div>
              <div className=" w-full flex flex-col gap-4 items-center justify-between">
                <p className=" text-2xl text-slate-100">{surah.name}</p>
                <p className=" text-slate-300 font-bold font-roboto">
                  {surah.englishNameTranslation}
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center gap-4">
                <p className=" text-2xl font-roboto text-slate-100">ayahs</p>
                <p className=" text-lg font-roboto text-slate-300">{surah.numberOfAyahs}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Quran;
