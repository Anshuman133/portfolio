import React from 'react'
import heroImg from "../assets/Hero.png"
const openResume = () => {
    window.open('https://drive.google.com/file/d/1AW3dCvnRDM9XCP2b3vZWYbvegSAGvFZJ/view?usp=sharing', '_blank');
  }
  
const Home = () => {
  return (
    <div name = "Home" className=" w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-white">Hi, I'm Anshuman</h1>
                <h2 className="text-2xl sm:text-5xl font-bold text-white">And I'm a Full Stack Devloper</h2>

                <p className="text-gray-500 py-4 max-w-md">
                    Passionate Computer Science Undergrad | I love to work on web applicaton
                     using technologie MERN Stack.
                </p>
                <div>
                    <button onClick={openResume}
                     className="text-white w-fit px-6 py-3 my-2
                     flex justify-center rounded-md bg-blue-500">
                        Resume
                    </button>
                </div>
            </div>
            <div>
                    <img src={heroImg} alt="My Profile" 
                     className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home
