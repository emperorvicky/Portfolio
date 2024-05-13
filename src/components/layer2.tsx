"use client"
import { itimFont } from "./fonts/font"
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpo } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SiFramer } from "react-icons/si";
import { githubVariants } from "./layer1";
import {motion} from "framer-motion"

export default function Layer2() {

  const PinfoVariants = {
    view:{
      scale: 1.3
    }
  }

  return (
    <div>
    <section>
    <motion.div variants={PinfoVariants} whileHover="view">
        <h3 className={`${itimFont.className} text-center`}>Asaba, Nigeria</h3> 
        <p className={`text-center text-sm text-neutral-500 leading-[0.5]`}>Location</p>   
    </motion.div>   
    <motion.div variants={PinfoVariants} whileHover="view" className="mt-3">
        <h3 className={`${itimFont.className} text-center`}>3+ years</h3> 
        <p className={`text-center text-sm text-neutral-500 leading-[0.5]`}>Experience</p>   
    </motion.div>
    <motion.div variants={PinfoVariants} whileHover="view" className="mt-3">
        <h3 className={`${itimFont.className} text-center`}>20+ projects done</h3> 
        <p className={`text-center text-sm text-neutral-500 leading-[0.5]`}>Projects</p>   
    </motion.div>      
    <div className="mt-2">
        <h3 className={`${itimFont.className} ml-2 sm:text-lg`}>
          -Full Stack-
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 p-2 space-x-2">
          <div className="bg-neutral-900 text-center rounded-md flex items-center p-1 ml-2 shadow-md">
            <FaReact size={30} className="badge-icon"/>
            <p className="badge-text">React</p>
          </div>
          <div className="bg-neutral-900 text-center rounded-md flex items-center p-1 shadow-md">
            <SiNextdotjs size={30} className="badge-icon"/>
            <p className="badge-text">Next</p>
          </div>

          <div className="badge">
            <RiTailwindCssFill  size={30} className="badge-icon"/>
            <p className="badge-text">Tailwind CSS</p>
          </div>
          <div className="badge">
            <SiExpress size={30} className="badge-icon"/>
            <p className="badge-text">Express</p>
          </div>
          <div className="badge">
            <BiLogoTypescript size={30} className="badge-icon"/>
            <p className="badge-text">Typescript</p>
          </div>
          <div className="badge">
            <BiLogoMongodb size={30} className="badge-icon"/>
            <p className="badge-text">Mongodb</p>
          </div>
          <div className="badge">
            <IoLogoJavascript size={30} className="badge-icon"/>
            <p className="badge-text">Javascript</p>
          </div>
          <div className="badge">
            <SiExpo  size={30} className="badge-icon"/>
            <p className="badge-text">Expo</p>
          </div>
          <div className="badge">
            <IoExtensionPuzzle   size={30} className="badge-icon"/>
            <p className="badge-text">Chrome Extension</p>
          </div>
          <div className="badge">
            <SiFramer   size={30} className="badge-icon"/>
            <p className="badge-text">Framer Motion</p>
          </div>
        </div>
      </div>         
    </section> 

    </div>
  )
}
