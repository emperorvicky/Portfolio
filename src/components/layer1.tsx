"use client"
import { lobFont, itimFont } from "./fonts/font";
import { motion } from "framer-motion";

export const githubVariants = {
    view:{
        scale:1.1
    }
}

export default function Layer1() {


    return (
    <div>
        <section className="m-3">
            <div className="md:flex md:items-center ">
            <h1 
            id="name"
            className={`
            ${lobFont.className} text-3xl text-neutral-900
             text-center`}
            >
             Hello, I'm Tochukwu Mojekwu</h1>
            <div className="bg-neutral-900 rounded-md p-3 m-2 sm:p-5 md:p-2 shadow-lg">
                <p className={`${itimFont.className} text-justify text-white sm:text-lg md:text-xl lg:text-2xl sm:p-7 md:p-9`}>
                    As a proficient full-stack web and app
                    developer, I possess the expertise to create
                    innovative applications tailored to your needs.
                    <motion.a href="https://github.com/emperorvicky" variants={githubVariants} whileHover="view" className=" block text-center m-2 cursor-pointer rounded-md text bg-neutral-700 shadow-md hover:bg-white hover:text-neutral-900 sm:mx-[15rem] lg:mx-[20rem] xl:mx-[25rem]">GitHub</motion.a>
                </p>
            </div>                
            </div>

            <div className="mt-3">
                <h2 className={`${lobFont.className} text-neutral-900 text-lg sm:text-2xl  text-center`}>Let me turn your  vision into a tangible digital reality</h2>
                <p className={`${itimFont.className} text-sm sm:text-base text-center text-neutral-600`}>Full Stack Web & App Developer</p>
            </div>
            <hr className="mt-4  border-gray-200"/>
        </section>
    </div>
  )
}
