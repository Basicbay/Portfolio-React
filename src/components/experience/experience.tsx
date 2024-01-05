import { PiPuzzlePieceFill } from "react-icons/pi";

import { motion } from "framer-motion"

function Experience() {
    return (
        <motion.div id='experience' className="experience dark:text-white text-black 
        text-base my-10 " whileHover={{ scale: 1.02 }}>

            <div className="  shadow-md bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">

                <div className="card p-10 font-extrabold text-center md:text-left bg-base-200 dark:bg-neutral-950 rounded-b-none">
                    <p className="text-4xl gap-2 flex justify-center"><i className="" style={{ color: '#0FBF67 ' }}><PiPuzzlePieceFill /></i>Experience</p>
                </div>

                <div className='text-center md:text-left dark:text-white p-10'>

                <motion.div className="md:flex gap-8 w-fit m-auto  " >

                    <div className=" bx-tada-hover border-4 border-indigo-500 text-indigo-500 rounded-full text-5xl font-black w-fit h-fit p-5 mb-5 m-auto md:m-0"><i className='bx bx-mobile-vibration'></i></div>
                   
                    <div>
                        <p className=' text-2xl  font-bold mb-1 '>Mobile Game Developer</p>
                        <p className=' font-semibold mb-5 text-neutral-500 '><i className='bx bx-map'></i> Platforms: iOS and Android [ 2018 - Present ] </p>
                        <ul className="list-disc list-outside leading-relaxed ml-5">
                        <li><p className='  text-left '>Mobile Game Monetization</p></li>
                        <li><p className='  text-left '>Cross-Platform Development</p></li>
                        <li><p className='  text-left '>UI/UX Design Principles</p></li>
                        <li><p className='  text-left '>Implemented Responsive Design Principles</p></li>
                        <li><p className='  text-left '>Testing / Debugging</p></li>
                        </ul>
                        <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>
                        </div>
                    </motion.div>

                    {/* 

                    <p className=' text-2xl font-semibold'>Business intelligence (BI) </p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Innobiz Commapy (Internship) </p>
                    <p className=' mb-5 text-left break-all'>skills</p>
                    <div className="card-actions gap-2 my-3  justify-start">
                        <div className="badge badge-outline">SSIS</div>
                        <div className="badge badge-outline">SSAS</div>
                        <div className="badge badge-outline">SSRS</div>
                        <div className="badge badge-outline">ETL</div>
                        <div className="badge badge-outline">Data Warehouse</div>
                        <div className="badge badge-outline">Cube</div>
                        <div className="badge badge-outline">Olap</div>
                        <div className="badge badge-outline">Reporting</div>
                        <div className="badge badge-outline">SQL Server</div>
                    </div>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>

                    <p className='  text-2xl  font-semibold'>Computer Vision</p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Graduation Project</p>
                    <p className=' mb-5 text-left break-all'><span className=" font-medium">Surveys the Changing Landscape by UAV</span><br /> The project is designed and developed using concepts of image processing.</p>

                    <div className="card-actions gap-2 my-3  justify-start">
                        <div className="badge badge-outline">Open CV</div>
                        <div className="badge badge-outline">C++</div>
                        <div className="badge badge-outline">Robot Operating System (ROS)</div>
                        <div className="badge badge-outline">Linux Ubuntu</div>
                        <div className="badge badge-outline">AR Drone 2.0</div>
                    </div>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>

                    <p className='  text-2xl  font-semibold'>Network, Fiber Obtic</p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Standthai Company</p>
                    <p className=' mb-5 text-left break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet omnis maiores quae, eveniet in dolores voluptatum ea ad hic voluptatibus repudiandae incidunt, fugiat id pariatur quo error. Tenetur, facere.</p>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>
*/}

                </div>
            </div>
        </motion.div>
    )
}

export default Experience