import { itimFont, patrickFont } from "./fonts/font"
import { FaLink } from "react-icons/fa";

export default function Layer3() {
  return (
    <div>
        <section>
            <h3 className={`${itimFont.className} ml-2 sm:text-lg`}>-Latest Projects-</h3>
            <div className='grid grid-cols-1 text-center mt-2'>
                <div className='bg-neutral-900 mx-2 rounded-md text-white'>
                    <a href="https://github.com/emperorvicky/The-Law" className="flex items-center space-x-2 p-2">
                    <h3 className="text-lg">
                        Law-Firm
                    </h3>             
                        <FaLink className="text-white cursor-pointer"/>                                  
                    </a>
 

                    <p className={`${patrickFont.className} text-justify px-4 pb-2 text-sm sm:text-lg md:px-[3rem] md:text-xl leading-6`}>
                    I created a dynamic and informative website for a law firm. The website serves as a platform to introduce the firm's
                    services, deliver the latest news, showcase the team members and their various positions, and provide contact details
                    for reaching out to the firm. It offers visitors a user-friendly experience, allowing them to learn about the firm's
                    expertise and easily get in touch.
                    </p>
                </div>
                <div className='bg-neutral-900 mx-2 rounded-md text-white mt-2'>
                    <a href="https://github.com/emperorvicky/Product-display" className="flex items-center space-x-2 p-2 cursor-pointer">
                    <h3 className="text-lg">
                        Product Display
                    </h3>             
                        <FaLink className="text-white"/>                                  
                    </a>
 

                    <p className={`${patrickFont.className} text-justify px-4 pb-2 text-lg md:px-[3rem] md:text-xl`}>
                    The Product Display website is a sleek and modern platform designed to
                    showcase your products in the best light possible. With intuitive navigation
                    and eye-catching visuals, visitors can easily browse through your offerings
                    and learn more about your company. Each product page features detailed
                    information along with contact details, making it simple for potential 
                    xcustomers to get in touch or place an order.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}
