import { FcVoicePresentation } from "react-icons/fc";
import { motion } from "framer-motion"

function Footer() {
    return (
        <motion.div id='contact' className="rounded-2xl shadow-md bg-black bg-opacity-25 dark:bg-opacity-50 text-white   text-base my-10 "
            whileHover={{ scale: 1.02 }}>

            <div className="card p-10 font-extrabold text-center md:text-left bg-neutral-100 text-black dark:text-white dark:bg-neutral-950 rounded-b-none">
                <p className=" bg text-4xl gap-2 flex justify-center "><FcVoicePresentation />Contact Me</p>
            </div>

            <footer className="footer text-base p-10 justify-items-center  ">

                <nav className="  self-center grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-20 md:gap-y-10 xl:gap-x-10 gap-5 xl:py-5   ">
                    <motion.div className=' lg:co tooltip' data-tip="Copy Phone Number" whileTap={{ scale: 1.1 }}>
                        <label className="swap">
                            <div onClick={() => { navigator.clipboard.writeText('0867499315') }} className="border-[1px]   cursor-pointer   hover:bg-black hover:bg-opacity-10 rounded-btn p-3 w-64 text-left xl:text-center " ><i className='bx-fw bx bxs-phone bx-md bx-tada-hover'></i>0867499315
                                <input type="checkbox" />
                                <div className="swap-on hidden"><i className='bx bx-check bx-sm absolute right-4 bottom-3 scale-75' ></i></div>
                                <div className="swap-off hidden"><i className='bx bx-copy bx-sm absolute right-4 bottom-3 scale-75' ></i></div>
                            </div>
                        </label>
                    </motion.div>

                    <motion.a href="mailto:Keepatbayy@gmail.com" target="_blank" className=' tooltip' data-tip="Send Email" whileTap={{ scale: 1.1 }}>
                        <div className="border-[1px]   cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-btn p-3 w-64 text-left xl:text-center select-none" ><i className='bx-fw bx bx-envelope bx-md bx-tada-hover'></i>Keepatbayy@gmail.com<i className='bx bx-paper-plane bx-sm absolute right-4 scale-75 hidden' ></i></div>
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank" className="border-[1px]   cursor-pointer  hover:bg-black hover:bg-opacity-10 rounded-btn  p-3 w-64 text-left xl:text-center select-none tooltip" data-tip="Linked" whileTap={{ scale: 1.1 }}><i className='bx-fw bx bxl-linkedin bx-md bx-tada-hover'></i>Nattagrit Ridtikhab<i className='bx bx-link bx-sm absolute right-4 scale-95 hidden' ></i></motion.a>

                    <motion.a href="https://github.com/Basicbay" target="_blank" className=" border-[1px]   cursor-pointer  p-3 w-64 hover:bg-black hover:bg-opacity-10 rounded-btn  text-left xl:text-center select-none tooltip" data-tip="Github" whileTap={{ scale: 1.1 }}><i className='bx-fw bx bxl-github bx-md  bx-tada-hover'></i>Basicbay<i className='bx bx-link bx-sm absolute right-4 scale-95 hidden' ></i></motion.a>

                </nav>

            </footer>

            <p className="py-7 card rounded-t-none px-10 text-center bg-white dark:bg-neutral-900 dark:text-white text-black leading-7 " ><motion.span className="" >🙏 Thank you for considering my portfolio. I am thrilled at the opportunity to embark on a journey of growth as a Frontend Developer. </motion.span></p>

        </motion.div>
    )
}

export default Footer