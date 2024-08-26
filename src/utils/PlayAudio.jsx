import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function PlayAudio({ ayahnumberInSurah, audio }) {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingAyah, setPlayingAyah] = useState(null);

  const handlePlayAudio = (audioUrl, ayahNumber) => {
    if (currentAudio) {
      currentAudio.pause();
      setIsPlaying(false);
    }

    if (playingAyah !== ayahNumber || !isPlaying) {
      const audio = new Audio(audioUrl);
      audio.play();
      setCurrentAudio(audio);
      setPlayingAyah(ayahNumber);
      setIsPlaying(true);

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        setPlayingAyah(null);
      });
    } else {
      setPlayingAyah(null);
      setIsPlaying(false);
    }
  };
  return (
    <button onClick={() => handlePlayAudio(audio, ayahnumberInSurah)}>
      {isPlaying && playingAyah === ayahnumberInSurah ? (
        <FaPause className="text-lg mr-5" />
      ) : (
        <FaPlay className="text-lg mr-5" />
      )}
    </button>
  );
}
