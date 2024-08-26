import Image from "next/image";
import { FaPray, FaBook, FaHeadphones, FaHandsHelping } from "react-icons/fa";
import PrayerTimes from "./PrayerTimes";

export default function About() {
  const services = [
    {
      title: "Prayer Times",
      description:
        "Stay connected with accurate prayer times tailored to your location.",
      icon: <FaPray className=" text-amber-500 text-4xl mb-4" />,
    },
    {
      title: "Quranic Recitations",
      description:
        "Listen to beautiful recitations of Qur’an by renowned sheikhs.",
      icon: <FaHeadphones className=" text-amber-500 text-4xl mb-4" />,
    },
    {
      title: "Islamic Teachings",
      description:
        "Explore the teachings of Islam through various articles, and resources.",
      icon: <FaBook className=" text-amber-500 text-4xl mb-4" />,
    },
    {
      title: "Charity and Zakat",
      description: "Learn about the importance of charity and Zakat in Islam.",
      icon: <FaHandsHelping className="text-amber-500 text-4xl mb-4" />,
    },
  ];
  return (
    <section className=" py-10 max-w-6xl mx-auto px-6">
      <div className=" flex md:justify-center md:items-center md:flex-row flex-col items-center">
        <div>
          <Image src="/desc.webp" alt="about.webp" width={500} height={300} priority />
        </div>
        <div className=" max-w-md text-center md:text-start">
          <h2 className=" text-3xl font-bold mb-5">
            Discover the beauty of Islam with IslamicEcho
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div className="p-2" key={index}>
                <i className=" flex justify-center items-center md:justify-start">
                  {service.icon}
                </i>
                <h3 className=" text-xl font-bold">{service.title}</h3>
                <p className=" line-clamp-3 text-slate-400 normal-case">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PrayerTimes />
      <hr className=" bg-slate-500 h-[0.5px]" />
    </section>
  );
}
