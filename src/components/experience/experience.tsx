import { PiPuzzlePieceFill } from "react-icons/pi";

import { motion } from "framer-motion"

function Experience() {
    return (
        <motion.div id='experience' className="experience dark:text-white text-black 
        text-base my-10 " whileHover={{ scale: 1.02 }}>

            <div className="  shadow-md bg-white dark:bg-neutral-900  rounded-2xl overflow-hidden">

                <div className="card p-10 font-extrabold text-center md:text-left bg-neutral-100 dark:bg-neutral-950 rounded-b-none">
                    <p className="text-4xl gap-2 flex justify-center"><i className="" style={{ color: '#24A570  ' }}><PiPuzzlePieceFill /></i>Experience</p>
                </div>

                <div className='text-center md:text-left dark:text-white p-5 lg:p-10 carousel w-full md:grid scroll-pl-5 gap-6 m-auto md:grid-cols-2 '>

                    <div id="itemA" className="carousel-item w-full">
                        <motion.div className="md:flex gap-8 pb-5 border-[1px] card p-5  dark:border-neutral-800 dark:hover:border-white hover:border-neutral-800 " >
                            <div className="">
                                <span className=" text-teal-500 text-lg font-bold ">Work</span>
                                <p className=' text-2xl  font-bold mb-2  '>Mobile Game Developer</p>
                                <p className=' font-semibold mb-5'> <div className="badge badge-neutral badge-md ">Present</div> <span className=" text-neutral-500"><i className='bx bxs-map'></i>Self-employed / App Store , Google Play</span></p>
                                <p className="hyphens-auto text-left indent-8 mb-5  ">Developed gaming apps using game-making software, each designed to generate revenue through Google AdMob advertisements.</p>
                                {/*<p className=" text-left"><span className=" font-semibold">Skills : </span>Construct 3 , JavaScript , Google Admob , Photoshop </p>*/}
                                <div className="flex flex-wrap gap-1 text-black dark:text-white font-normal justify-start text-sm place-items-center ">
                                    <p className=" font-semibold text-base">Skills : </p>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Construct 3</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Google Admob</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>JavaScript</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Photoshop</div>
                                </div>
                                <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div id="itemB" className="carousel-item w-full">
                        <motion.div className="md:flex gap-8 pb-5 border-[1px] card p-5   dark:border-neutral-800 dark:hover:border-white hover:border-neutral-800  " >
                            <div className="">
                                <span className=" text-teal-500 text-lg font-bold ">Bootcamp</span>
                                <p className=' text-2xl  font-bold mb-2  '>Java Software Engineer</p>
                                <p className=' font-semibold mb-5   '><div className="badge badge-neutral badge-md  ">1 Months</div> <span className=" text-neutral-500"><i className='bx bxs-map'></i>Codestar Bootcamp / Bangkok</span></p>
                                <p className="hyphens-auto text-left indent-8 mb-5   ">Completed a coding bootcamp and gained hands-on experience in Java programming fundamentals, object-oriented concepts, and industry best practices.</p>
                                {/*<p className=" text-left"><span className=" font-semibold">Skills : </span>Java , Spring Boot , REST API , JDBC , MySQL </p>*/}
                                <div className="flex flex-wrap gap-1 text-black dark:text-white font-normal justify-start text-sm place-items-center ">
                                    <p className=" font-semibold text-base">Skills : </p>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Java</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Spring Boot</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>MySQL</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>REST API</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>JDBC</div>
                                </div>
                                <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div id="itemC" className="carousel-item w-full">
                        <motion.div className="md:flex gap-8  pb-5 border-[1px] card p-5  dark:border-neutral-800 dark:hover:border-white hover:border-neutral-800    " >
                            <div className="">
                                <span className=" text-teal-500 text-lg font-bold ">Graduation Project</span>
                                <p className=' text-2xl  font-bold mb-2  '>Computer Vision </p>
                                <p className=' font-semibold mb-5   '><div className="badge badge-neutral badge-md ">6 Months</div> <span className=" text-neutral-500"><i className='bx bxs-map'></i>Rangsit University / Pathum Tani</span></p>
                                <p className="hyphens-auto text-left indent-8 mb-5   ">The project is designed and developed based on the concepts of image processing, utilizing the Robot Operating System (ROS) to control the AR Drone 2.0.</p>
                                {/*<p className=" text-left"><span className=" font-semibold">Skills : </span>OpenCV , C++ , Robot Operating System (ROS)</p>*/}
                                <div className="flex flex-wrap gap-1 text-black dark:text-white font-normal justify-start text-sm place-items-center ">
                                    <p className=" font-semibold text-base">Skills : </p>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Open CV</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>C++</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>ROS</div>
                                </div>
                                <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div id="itemD" className="carousel-item w-full">
                        <motion.div className="md:flex gap-8  pb-5 border-[1px] card p-5   dark:border-neutral-800 dark:hover:border-white hover:border-neutral-800   " >
                            <div className="">
                                <p className=" text-teal-500 text-lg font-bold ">Project</p>
                                <p className=' text-2xl  font-bold mb-2  '>ASP.NET Web App</p>
                                <p className=' font-semibold mb-5   '><div className="badge badge-neutral badge-md ">4 Months</div><span className=" text-neutral-500"> <i className='bx bxs-map'></i>Rangsit University / Pathum Tani</span></p>
                                <p className="hyphens-auto text-left indent-8 mb-5 ">Developed an E-commerce web application featuring essential functionalities such as product display, cart management, user login, and payment processing.</p>
                                {/*<p className=" text-left"><span className=" font-semibold">Skills : </span>ASP.NET , C# , HTML , CSS , JavaScript , SQL Server</p>*/}
                                <div className="flex flex-wrap gap-1 text-black dark:text-white font-normal justify-start text-sm place-items-center ">
                                    <p className=" font-semibold text-base">Skills : </p>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>ASP.NET</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>C#</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>SQL Server</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>HTML</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>CSS</div>
                                    <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>JavaScript</div>
                                </div>
                                <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                    <div className="flex justify-center w-full py-2 gap-2 mb-5 md:hidden ">
                        <a href="#itemA" className="btn btn-xs" >1</a>
                        <a href="#itemB" className="btn btn-xs">2</a>
                        <a href="#itemC" className="btn btn-xs">3</a>
                        <a href="#itemD" className="btn btn-xs">4</a>
                    </div>

            </div>
        </motion.div>
    )
}

export default Experience