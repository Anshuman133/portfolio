import React from 'react';
import pimg from "../assets/pimg.jpg";
import livedocs  from "../assets/livedocs.avif";
import videocalling  from "../assets/videocall.avif";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Yoom",
            description: " A robust video calling app .",
            image: videocalling,
            technologies: ["React", "Next.js", "Tailwind","Typescript","ShadCN UI"," Clerk"],
            github: "https://github.com/Anshuman133/YOOM",
            live: "https://yoom.vercel.app"
        },
        {
            id: 2,
            title: "LiveDocs",
            description: " A live documentation tool for real-time collaboration.",
            image: livedocs,
            technologies:["React", "Next.js", "Tailwind","Typescript","ShadCN UI"," Clerk"],
            github: "https://github.com/Anshuman133/LiveDocs",
            live: "https://jsm-live-docs.vercel.app"
        },
        ,
        {
            id: 2,
            title: "Url-shortner",
            description: " A URL shortener for easy link management.",
            image: pimg,
            technologies:["React", "Next.js", "Tailwind","Typescript","MongoDB"],
            github: "https://github.com/Anshuman133/short-url",
            live: "https://yoom.vercel.app"
        }
    ];

    return (
        <div name="Projects" className="w-full md:h-screen bg-gradient-to-b text-white from-black to-gray-800">
            <div className="flex flex-col w-full h-full max-w-screen-lg mx-auto p-4 justify-center">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Latest Projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 sm:px-0">
                    {projects.map(({ id, title, description, image, technologies, github, live }) => (
                        <div key={id} className="shadow-md rounded-lg shadow-gray-600">
                            <img src={image} alt={title} className="rounded-md w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                <p className="text-stone-400 mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {technologies.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-700 text-sm rounded">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex justify-around">
                                    <a href={live} target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 duration-200">
                                            Live
                                        </button>
                                    </a>
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 duration-200">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
