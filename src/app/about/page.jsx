"use client";
import { useRef } from "react";
import Slider from "react-slick";

function PreviousNextMethods() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderContent = [
    {
      id: 1,
      text: [
        "ISLAM is derived from the Arabic root SALEMA: peace, purity, submission, and obedience. In the religious sense, Islam means submission to the will of God and obedience to His law.",
        "Everything and every phenomenon in the world, other than man, is administered TOTALLY by God-made laws i.e., they are obedient to God and submissive to His laws i.e., they are in the STATE OF ISLAM. Man possesses the quality of intelligence and choice; thus, he is invited to submit to the good will of God and obey His law i.e., become a Muslim. Submission to the good will of God, together with obedience to His beneficial law, i.e., becoming a Muslim, is the best safeguard for man's peace and harmony.",
        "Islam dates back to the edge of Adam and its message has been conveyed to man by God’s Prophets and Messengers including Abrahim, Moses, Jesus, and Muhammad. Islam's message has been restored and enforced in the last stage of the religious evolution by God's last Prophet and Messenger Muhammad.",
        "The word Allah in the Arabic language means God, or more accurately The One and Only Eternal God, Creator of the Universe, Lord of all lords, King of all kings, Most Compassionate, Most Merciful. The word Allah to mean God is also used by Arabic-speaking Jews and Christians.",
      ],
    },
    {
      id: 2,
      text: [
        "A Muslim believes in ONE GOD, Supreme and Eternal, Infinite and Mighty, Merciful and Compassionate, Creator and Provider. God has no father nor mother, no sons, nor was He fathered. None equal to Him. He is God of all mankind, not of a special tribe or race.",
        "God is High and Supreme, but He is very near to the pious thoughtful believers; He answers their prayers and helps them. He loves the people who love Him and forgives their sins. He gives them peace, happiness, knowledge, and success. God is the Loving and the Provider, the Generous, and the Benevolent, the Rich and the Independent, the Forgiving and the Clement, the Patient and the Appreciative, the Unique and the Protector, the Judge and the Peace. God's attributes are mentioned in the Quran.",
      ],
    },
    {
      id: 3,
      text: [
        "A Muslim believes in ONE GOD, Supreme and Eternal, Infinite and Mighty, Merciful and Compassionate, Creator and Provider. God has no father nor mother, no sons, nor was He fathered. None equal to Him. He is God of all mankind, not of a special tribe or race.",
        "God is High and Supreme, but He is very near to the pious thoughtful believers; He answers their prayers and helps them. He loves the people who love Him and forgives their sins. He gives them peace, happiness, knowledge, and success. God is the Loving and the Provider, the Generous, and the Benevolent, the Rich and the Independent, the Forgiving and the Clement, the Patient and the Appreciative, the Unique and the Protector, the Judge and the Peace. God's attributes are mentioned in the Quran.",
      ],
    },
    {
      id: 4,
      text: [
        "A Muslim believes in ONE GOD, Supreme and Eternal, Infinite and Mighty, Merciful and Compassionate, Creator and Provider. God has no father nor mother, no sons, nor was He fathered. None equal to Him. He is God of all mankind, not of a special tribe or race.",
        "God is High and Supreme, but He is very near to the pious thoughtful believers; He answers their prayers and helps them. He loves the people who love Him and forgives their sins. He gives them peace, happiness, knowledge, and success. God is the Loving and the Provider, the Generous, and the Benevolent, the Rich and the Independent, the Forgiving and the Clement, the Patient and the Appreciative, the Unique and the Protector, the Judge and the Peace. God's attributes are mentioned in the Quran.",
      ],
    },
  ];

  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className=" h-full lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-xs mx-auto p-5"
      >
        {sliderContent.map((slide) => (
          <div key={slide.id} className=" space-y-4 dark:text-slate-200 text-xl">
            {slide.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </Slider>
      <div className=" flex justify-center items-center gap-10 relative top-10">
        <button
          className="button bg-red-600 p-3 rounded-lg text-slate-100"
          onClick={previous}
        >
          Previous
        </button>
        <button
          className="button  bg-red-600 p-3 px-6 text-slate-100 rounded-lg"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;
