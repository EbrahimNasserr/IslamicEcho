"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import "./hero.css";

// SliderItem Component for Reusability
const SliderItem = ({ src, alt, quote, surah, isActive }) => (
  <div className={`item ${isActive ? "active" : ""}`}>
    <Image src={src} fill alt={alt} priority />
    <div className="content">
      <p>الله</p>
      <h2>
        <q>{quote}</q>
      </h2>
      <p>{surah}</p>
    </div>
  </div>
);

export default function Hero() {
  const [itemActive, setItemActive] = useState(0);

  const items = [
    {
      src: "/hero5.webp",
      alt: "heroImage",
      quote: "So be patient. Indeed, the promise of Allah is truth.",
      surah: "Surah Ar-Rum (30:60)",
    },
    {
      src: "/hero2.webp",
      alt: "heroImage",
      quote: "Allah does not burden a soul beyond that it can bear.",
      surah: "Surah Al-Baqarah (2:286)",
    },
    {
      src: "/hero3.jpeg",
      alt: "heroImage",
      quote: "And He found you lost and guided [you].",
      surah: "Surah Ad-Duha (93:7)",
    },
    {
      src: "/hero4.webp",
      alt: "heroImage",
      quote:
        "Kind words and forgiveness are better than charity followed by injury.",
      surah: "Surah Al-Baqarah (2:263)",
    },
    {
      src: "/hero.webp",
      alt: "heroImage",
      quote: "Call upon Me; I will respond to you.",
      surah: "Surah Ghafir (40:60)",
    },
  ];

  const countItem = items.length;

  const showSlider = useCallback(() => {
    setItemActive((prev) => (prev + 1) % countItem);
  }, [countItem]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      requestAnimationFrame(showSlider);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [showSlider]);

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <section>
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <SliderItem
              key={index}
              src={item.src}
              alt={item.alt}
              quote={item.quote}
              surah={item.surah}
              isActive={index === itemActive}
            />
          ))}
        </div>
        <div className="arrows">
          <button
            id="prev"
            aria-label="Previous slide"
            onClick={() =>
              setItemActive((prev) => (prev - 1 + countItem) % countItem)
            }
          >
            {"<"}
          </button>
          <button id="next" aria-label="Next slide" onClick={showSlider}>
            {">"}
          </button>
        </div>
        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
              role="button"
              aria-label={`Thumbnail for ${item.alt}`}
            >
              <Image
                priority
                src={item.src}
                width={200}
                height={200}
                alt={item.alt}
              />
              <div className="content">Name Slider</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
