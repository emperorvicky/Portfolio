import { itimFont } from "./fonts/font"
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdMailOpen } from "react-icons/io";

export default function Layer4() {

  return (
    <div>
        <h2 className={`${itimFont.className} ml-2 sm:text-lg`}>~Contact~</h2>
        <div className="mt-2 bg-neutral-900 mx-2 rounded-md text-white flex items-center">
            <p className={`${itimFont.className} p-2 sm:text-lg`}>You can reach me through:</p>
            <div className="flex space-x-2">
                <a href="https://wa.me/+2349139025239?text=Hello%20I%20Would%20Like%20to%20make%20enquiries%20on%20your%20services" className="cursor-pointer">
                    <IoLogoWhatsapp size={30} className="text-white hover:text-gray-300"/>
                </a>
                <a href="https://www.instagram.com/_emperor999_?utm_source=qr&igsh=ZnNqb2FjYTdhZU0" className="cursor-pointer">
                    <RiInstagramFill size={30} className="text-white hover:text-gray-300"/>
                </a>
                <a href="mailto:emperorvicky124@gmail.com" className="cursor-pointer">
                    <IoMdMailOpen size={30} className="text-white hover:text-gray-300"/>
                </a>
            </div>
        </div>
        <p>

        </p>
        <p className={`${itimFont.className} text-center`}>Built by <a href="#name" className="underline">Victor Mojekwu.</a> with Typescript, Next.js, Tailwind CSS and framer Motion</p>
    </div>
  )
}
