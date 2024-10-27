import React from 'react'

const About = () => {
  return (
    <div name ="About"  className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">About</p>
        </div>
        <p className="text-xl mt-20">
        I'm Anshuman Parida, a passionate MERN stack developer with a strong foundation in JavaScript, React, and Node.js. As a fresher, I’ve solved over 450+ problems on LeetCode and ranked in the top 15%, demonstrating my dedication to problem-solving and algorithmic thinking. I enjoy building efficient, scalable applications 
        and thrive when tackling complex challenges using React and Node.js.</p>
      </div>
    </div>
  )
}

export default About
