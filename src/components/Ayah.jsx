"use client";
import Error from "@/app/error";
import Loader from "@/app/loading";
import { useGetSurahsAyahsQuery } from "@/services/quranApi";
import PlayAudio from "@/utils/PlayAudio";
import Link from "next/link";

export default function Ayah() {
  const { data: ayah, error, isLoading } = useGetSurahsAyahsQuery(2);
  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <section className=" px-3 py-24">
      <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        <div>
          <h2 className=" text-start md:text-end text-4xl font-bold font-roboto">
            qur&apos;an
          </h2>
          {ayah.data.ayahs[254] && (
            <div key={ayah.data.ayahs[254].number}>
              <p className="text-start md:text-end text-xl dark:text-slate-300 mt-1">
                Ayah: {ayah.data.ayahs[254].numberInSurah}
              </p>
              <p className=" mt-5 text-end text-3xl leading-relaxed">
                {ayah.data.ayahs[254].text}
              </p>
              <div className=" w-full text-end mt-5">
                <PlayAudio
                  audio={ayah.data.ayahs[254].audio}
                  ayahnumberInSurah={ayah.data.ayahs[254].numberInSurah}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className=" text-start md:text-start text-4xl font-bold font-roboto">
            translation
          </h2>
          <div>
            <p className=" mb-5 text-xl dark:text-slate-300 mt-1">
              ayah: 255
            </p>
            <q className=" text-3xl dark:text-slate-300 normal-case">
              GOD - there is no deity save Him, the Ever-Living, the
              Self-Subsistent Fount of All Being. Neither slumber overtakes Him,
              nor sleep. His is all that is in the heavens and all that is on
              earth. Who is there that could intercede with Him, unless it be by
              His leave? He knows all that lies open before men and all that is
              hidden from them, whereas they cannot attain to aught of His
              knowledge save that which He wills [them to attain]. His eternal
              power overspreads the heavens and the earth, and their upholding
              wearies Him not. And he alone is truly exalted, tremendous.
            </q>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-10">
      <Link
          href="/quran"
          className=" p-3 bg-amber-500 rounded z-50 font-bold text-white"
        >
          discover qur&apos;an
        </Link>
      </div>
    </section>
  );
}
