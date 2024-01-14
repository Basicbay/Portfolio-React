import './skills.css'
import { SiBabel } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion"
import { FcCommandLine } from "react-icons/fc";
import { SiDaisyui } from "react-icons/si";

function Skills() {
  return (

    <motion.div id='skills' className="skills my-10 dark:text-white text-black
    text-[0.75rem] md:text-sm " whileHover={{ scale: 1.02 }}>

      <div className=" shadow-md bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">

        <div className="card p-10 font-extrabold text-center md:text-left bg-neutral-100 dark:bg-neutral-950 rounded-b-none ">
          <p className="text-4xl gap-2 flex justify-center place-items-center "><FcCommandLine /> Skills</p>
        </div>

        <div className="card rounded-t-none grid bg-white dark:bg-neutral-900 p-10 md:px-20 gap-5 ">

          <motion.div className=" font-medium grid grid-cols-4 md:grid-cols-6 text-center gap-x-10 gap-y-7  place-items-center border-b-[1px] dark:border-neutral-800 pb-7   "   >
            <div className=' col-span-4 md:col-span-2 justify-self-center md:justify-self-start  ' ><p className=' text-sm lg:text-base font-bold text-neutral-500'>FRONTEND DEVELOPMENT</p></div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-html5 bx-lg bx-tada-hover' style={{ color: '#ff6b00' }}></i><p>HTML</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-javascript bx-lg bx-tada-hover' style={{ color: '#f3d405' }}></i><p>JAVASCRIPT</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-css3 bx-lg bx-tada-hover' style={{ color: '#00C7F8' }}></i><p>CSS</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-typescript bx-lg bx-tada-hover' style={{ color: '#0069ff' }}></i><p>TYPESCRIPT</p></motion.div>
          </motion.div>

          <motion.div className="font-medium grid grid-cols-4 md:grid-cols-6 text-center gap-x-10 gap-y-7 place-items-center border-b-[1px] dark:border-neutral-800 pb-7 "   >
            <div className=' col-span-4 md:col-span-2 justify-self-center md:justify-self-start ' ><p className=' text-sm lg:text-base font-bold   text-left text-neutral-500  '>RESPONSIVE DESIGN</p></div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-bootstrap bx-lg bx-tada-hover' style={{ color: '#8500ff' }}></i><p>BOOTSTRAP</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-tailwind-css bx-lg bx-tada-hover' style={{ color: '#00DB4C ' }}></i><p>TAILWIND</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxs-grid-alt bx-lg bx-tada-hover' style={{ color: '#E144E6' }}></i><p>CSSGRID</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxs-layout bx-lg bx-tada-hover' style={{ color: '#FF2121  ' }}  ></i><p>FLEXBOX</p></motion.div>
            
          </motion.div>

          <motion.div className="font-medium grid grid-cols-4 md:grid-cols-6 text-center gap-x-10 gap-y-7 place-items-center border-b-[1px] dark:border-neutral-800 pb-7  "  >
            <div className=' col-span-4 md:col-span-2 justify-self-center md:justify-self-start' ><p className=' text-sm lg:text-base font-bold   text-left text-neutral-500 '>FRAMEWORKS & LIBRARIES</p></div>
            <motion.div className='  col-start-1 md:col-auto' whileHover={{ scale: 1.1 }}><i className='bx bxl-react bx-lg bx-spin-hover ' style={{ color: '#6D52F7 ' }}></i><p>REACTJS</p></motion.div>
            <motion.div className='  hidden' whileHover={{ scale: 1.1 }}><i className='bx bxl-nodejs bx-tada-hover bx-lg ' style={{ color: '#75C433' }}></i><p>NODEJS</p></motion.div>
            <motion.div className='  hidden' whileHover={{ scale: 1.1 }}><i className='bx bx-tada-hover bx-lg ' style={{ color: '#5D6D7E' }}><SiNextdotjs /></i><p>NEXT JS</p></motion.div>
            <motion.div className='  ' whileHover={{ scale: 1.1 }}><i className='bx bxl-jquery bx-lg bx-tada-hover' style={{ color: '#0093E7 ' }}></i><p>JQUERY</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-sass bx-lg bx-tada-hover' style={{ color: '#FF6AAB ' }}></i><p>SASS</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bx-lg bx-tada-hover' style={{ color: '#1BDFA0 ' }}><SiDaisyui /></i><p>DAISYUI</p></motion.div>
          </motion.div>

          <motion.div className="font-medium grid grid-cols-4 md:grid-cols-6 text-center gap-x-10 gap-y-7 place-items-center  dark:border-neutral-800 pb-7 "   >
            <div className=' col-span-4 md:col-span-2 justify-self-center md:justify-self-start ' ><p className=' text-sm lg:text-base font-bold   text-left text-neutral-500 '>VERSION CONTROL</p></div>
            <motion.div className='  col-start-2 md:col-auto' whileHover={{ scale: 1.1 }}><i className='bx bxl-git bx-lg bx-tada-hover' style={{ color: '#E8330B  ' }}></i><p>GIT</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bxl-github bx-lg bx-tada-hover' style={{ color: '#808080 ' }}></i><p>GITHUB</p></motion.div>
          </motion.div>

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-x-10 gap-y-7 place-items-center pb-5 md:pb-0 hidden " >
            <div className='col-span-2 md:col-span-2 justify-self-center md:justify-self-start '><p className=' font-bold   text-left text-neutral-500   '>Build Tools :</p></div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bx-md bx-tada-hover' style={{ color: '#FFBF00' }}><SiBabel /></i><p>BABEL</p></motion.div>
            <motion.div className=' ' whileHover={{ scale: 1.1 }}><i className='bx bx-md bx-tada-hover' style={{ color: '#2471A3 ' }}><SiWebpack /></i><p>WEBPACK</p></motion.div>
          </div>

        </div>
      </div>
    </motion.div>

  )
}

export default Skills