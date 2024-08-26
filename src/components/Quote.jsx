"use client";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional for default styling
const Quote = () => {
  return (
    <section className="bg h-96">
      <div className=" dark:text-black flex justify-center flex-col w-full h-full items-center">
        <h2 className=" text-3xl mb-5 font-bold">الله</h2>
        <Tippy content="but as for those who refused to acknowledge the truth and gave the lie to Our messages - and [thus] to the announcement12 of a life to come - they will be given over to suffering.">
          <q className=" z-50 text-xl leading-loose sm:text-[3vw] text-center font-amiri mb-5">
            وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِـَٔايَـٰتِنَا وَلِقَآئِ
            ٱلْـَٔاخِرَةِ فَأُو۟لَـٰٓئِكَ فِى ٱلْعَذَابِ مُحْضَرُونَ
          </q>
        </Tippy>
        <p className=" text-lg mb-5">Surah Ar-Rum</p>
      </div>
    </section>
  );
};

export default Quote;
