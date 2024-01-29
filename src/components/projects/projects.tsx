
import port from './image/port-1200.png'
import app from './image/app-1200.png'
import mern from './image/mern-1200.png'
import { FcOpenedFolder } from "react-icons/fc";
import { motion } from "framer-motion"



function Projects() {
  return (

    <motion.div id='projects' className="projects dark:text-white text-black
    text-base my-10 " whileHover={{ scale: 1.02 }}>

      <div className="card p-10 font-extrabold text-center md:text-left bg-neutral-100 dark:bg-neutral-950 rounded-b-none ">
        <p className="text-4xl gap-2 flex justify-center "><FcOpenedFolder />Projects</p>
      </div>

      <div className='bg-black bg-opacity-25 dark:bg-opacity-50 rounded-t-none shadow-md card'>

      <div className="carousel w-full md:grid md:grid-cols-2 xl:grid-cols-3 scroll-pl-5 gap-6 p-5 lg:p-10">

        <div id="item1" className="carousel-item w-full">
          <motion.div className="card w-full shadow-md bg-white dark:bg-neutral-900 text-center md:text-left " whileHover={{ scale: 1.01 }}>
            <figure><img src={port} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold self-center md:self-start ">
                Portfolio Website
                <div className="badge badge-secondary hidden ">Project</div>
              </h2>
              <p className='tracking-tight mb-1 hidden'>Responsive design for all devices.</p>
              <div className=' flex flex-wrap justify-center md:justify-start gap-3 md:my-2 my-auto '>
                <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white   rounded-full w-fit p-2 px-4 select-none  ' whileTap={{ scale: 1.1 }} href="https://github.com/Basicbay/Portfolio-Website" target="_blank" ><span className=''><i className='bx-fw bx bxl-github bx-sm bx-flashing  '></i>Repository</span> </motion.a>
              </div>
              <div className='card-actions my-auto  font-semibold mb-1 text-neutral-500 '><p>Technologies : </p></div>
              <div className="card-actions   text-black dark:text-white font-normal justify-center md:justify-start text-sm   ">
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>React</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>TypeScript</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>CSS</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Tailwind CSS</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Daisy UI</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>HTML</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="item2" className="carousel-item w-full">
          <motion.div className="card w-fill shadow-md bg-white dark:bg-neutral-900 text-center md:text-left  " whileHover={{ scale: 1.01 }}>
            <figure><img src={mern} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl self-center md:self-start">
                <a href="https://mern-stack-crud-m2qd.onrender.com/" target="_blank" className='link text-blue-500 hover:text-blue-800 font-bold'>Employee Database</a>
              </h2>
              <p className='mb-1 hidden'>More than 50 apps available in : </p>
              <div className=' flex flex-wrap justify-center md:justify-start gap-3 md:my-2 my-auto '>
                <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white   rounded-full w-fit p-2 px-4 select-none  ' whileTap={{ scale: 1.1 }} href="https://github.com/Basicbay/Database-CRUD-MERN" target="_blank" ><span className=''><i className='bx-fw bx bxl-github bx-sm bx-flashing  '></i>Repository</span> </motion.a>
              </div>
              <div className='card-actions my-auto font-semibold mb-1 text-neutral-500  '><p>Technologies : </p></div>
              <div className="card-actions text-black dark:text-white font-normal justify-center md:justify-start text-sm">
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2   '>Mongo DB</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Express.js</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>React</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Node.js</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Bootstrap</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="item3" className="carousel-item w-full">
          <motion.div className="card w-fill shadow-md bg-white dark:bg-neutral-900 text-center md:text-left  " whileHover={{ scale: 1.01 }}>
            <figure><img src={app} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold self-center md:self-start ">
                Mobile Game Apps
                <div className="badge badge-primary hidden ">Work</div>
              </h2>
              <p className='mb-1 hidden'>More than 50 apps available in : </p>
              <div className=' flex flex-wrap justify-center md:justify-start gap-2 my-2  '>
                <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white  rounded-full p-2 px-3 select-none  ' whileTap={{ scale: 1.1 }} href="https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567" target="_blank" ><span className=''><i className='bx-fw bx bxl-apple bx-sm bx-flashing '></i>Apple Store</span> </motion.a>
                <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white  rounded-full w-fit p-2 px-3 select-none  ' whileTap={{ scale: 1.1 }} href="https://play.google.com/store/apps/developer?id=TheBayApps&hl=en_US" target="_blank" ><span className=''><i className='bx-fw bx bxl-play-store bx-sm bx-flashing'></i>Google Play</span> </motion.a>
              </div>
              <div className='card-actions my-auto font-semibold mb-1 text-neutral-500  '><p>Technologies : </p></div>
              <div className="card-actions text-black dark:text-white font-normal justify-center md:justify-start text-sm">
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2   '>Construct 3</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Google Admob</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>JavaScript</div>
                <div className='   rounded-xl bg-neutral-200 dark:bg-neutral-700 px-2 '>Photoshop</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="item4" className="carousel-item w-full hidden">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2 mb-5 md:hidden ">
          <a href="#item1" className="btn btn-xs" >1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs hidden">4</a>
        </div>

        </div>
        
    </motion.div>

  )
}

export default Projects