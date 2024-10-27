import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            These are the technologies I've worked with:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 px-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center bg-gray-900 rounded-lg p-4 transition-transform transform hover:scale-110 hover:bg-opacity-80 duration-300 ${style}`}
            >
              <img src={src} alt={title} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
