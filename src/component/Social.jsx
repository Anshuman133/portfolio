import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from 'react-icons/hi'

const links =[
    {
        id: 1, 
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        herf: "https://www.linkedin.com/in/anshumanparida/",
        style: "rounded-tr-md"
    },
    {
        id: 2, 
        child:(
            <>
            GitHub<FaGithub size={30}/>
            </>
        ),
        herf: "https://github.com/Anshuman133",
        
    },
    {
        id: 3, 
        child:(
            <>
             Leetcode <SiLeetcode size={30}/>
            </>
        ),
        herf: "https://leetcode.com/u/Anshuman48/",
        
    },
    {
        id: 4, 
        child:(
            <>
             Mail <HiOutlineMail size={30}/>
            </>
        ),
        herf: "mailto:paridaanshuman48@gmail.com",
        style:"rounded-bl-md"
        
    }
]
const Social = () => {
  return (
    <div className=" hidden lg:flex flex flex-col left-0 fixed top-[35%]">
      <ul>
        {links.map(({id,child,herf,style}) =>(
            <li key={id} className={"flex justify-between items-center w-40 px-4 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + "" + style }>
             <a href={herf} className="flex justify-between items-center w-full text-white" >
                {child}
                
             </a>
         </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Social
 