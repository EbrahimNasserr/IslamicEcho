"use client";
import Loader from "@/app/loading";
import {
  useGetAyahsTransQuery,
  useGetSurahsAyahsQuery,
} from "@/services/quranApi";
import PlayAudio from "@/utils/PlayAudio";


function SurahAyahs({ params }) {
  const id = params.id;
  const { data, error, isLoading } = useGetSurahsAyahsQuery(id);
  const { data: trans } = useGetAyahsTransQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading Ayahs.</p>;


  return (
    <section className=" px-3">
      <h2 className=" text-3xl sm:text-5xl flex justify-center items-center mt-10 font-bold font-roboto text-[#1F3352] dark:text-slate-300">
        Surah {data.data.number}. {data.data.englishName}
      </h2>
      <div className=" flex justify-between gap-10 flex-col text-center items-center max-w-6xl mx-auto mt-10 md:flex-row md:items-start">
        <ul className="flex flex-wrap max-w-xl gap-10 flex-row-reverse">
          {data.data.ayahs.map((ayah) => (
            <li
              className=" flex gap-1 text-end leading-loose flex-row text-3xl font-amiri"
              key={ayah.numberInSurah}
            >
              <PlayAudio audio={ayah.audio} ayahnumberInSurah={ayah.numberInSurah} />
              {ayah.text} <span>.{ayah.numberInSurah}</span>
            </li>
          ))}
        </ul>
        <div className=" w-full h-1 bg-slate-800 max-w-6xl mx-auto mt-10 md:w-1 md:h-96"></div>
        <ul className=" flex flex-col gap-10 mt-4">
          {trans?.data.ayahs.map((trans) => (
            <li
              className=" flex text-2xl gap-1 justify-start text-start "
              key={trans.numberInSurah}
            >
              {trans.numberInSurah}.<p>{trans.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SurahAyahs;
