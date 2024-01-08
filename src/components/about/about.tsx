import Pic from './image/me.jpg'
import Rsu from './image/rsuLogo.png'
import { motion } from "framer-motion"
import resume from './pdf/resume.pdf'
import { FcGraduationCap } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import './about.css'


function About() {

  return (

    <div id='about' className='about dark:text-white text-black text-base
    text-center md:text-left my-10'>

      <div className=" grid md:grid-cols-5 gap-10 md:gap-5 ">

        <motion.div className=' curve md:col-span-2 card bg-white place-items-center justify-center p-5 dark:bg-neutral-900 shadow-md ' whileHover={{ scale: 1.02 }}>
        
        <div className="custom-shape-divider-top-1704694396 card z-0  opacity-5 dark:opacity-20">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>

          <img className="rounded-full w-9/12 my-5 z-10  " src={Pic} alt=""></img>

          <motion.div className='bg-clip-text text-center text-transparent bg-gradient-to-r from-blue-500 to-teal-500 z-10  ' >
            <p className=' text-2xl md:text-xl lg:text-2xl xl:text-3xl  font-black mb-1 dark:text-white text-black tracking-wide ' >Nattagrit Ridtikhab</p>
            <p className=' text-2xl md:text-xl lg:text-2xl   font-black mb-5 tracking-wide '>Creative Front-End<br className='xl:hidden'/> Developer</p>
            <p className="p-0.5 bg-gradient-to-r mb-5"></p>
          </motion.div>

          <div className='flex gap-5  justify-center md:justify-start z-10'>

            <motion.div className='hover:text-blue-500  tooltip' data-tip="Copy Phone Number" onClick={() => {
              navigator.clipboard.writeText('0867499315');
            }} whileTap={{ scale: 1.2 }} >
              <i className='bx bxs-phone bx-md cursor-pointer  '></i>
            </motion.div>

            <motion.a className='hover:text-blue-500  tooltip' data-tip="Send Email" href="mailto:Keepatbayy@gmail.com" target="_blank"
             whileTap={{ scale: 1.2 }}>
              <i className='bx bx-envelope bx-md  cursor-pointer  '></i>
            </motion.a>

            <motion.div className=' hover:text-blue-500 tooltip' data-tip="Linked" whileTap={{ scale: 1.2 }} ><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx bxl-linkedin bx-md  ' ></i></a></motion.div>

            <motion.div className=' hover:text-blue-500 tooltip' data-tip="Github" whileTap={{ scale: 1.2 }} ><a href="https://github.com/Basicbay" target="_blank"><i className='bx bxl-github bx-md  '></i></a></motion.div>

          </div>

        <motion.a href={resume} download="Resume" target="_blank" className='h-fit mt-6 my-5 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white  rounded-2xl w-fit p-3 px-5 z-20 select-none ' whileTap={{ scale: 1.1 }}><i className='bx-fw bx bxs-download bx-sm bx-fade-up'></i>Download Resume</motion.a>

        </motion.div>



        <motion.div className=' text-left hyphens-auto md:col-span-3 bg-white card p-9 dark:bg-neutral-900 shadow-md ' lang='de' whileHover={{ scale: 1.02 }}>
        
        <div className="custom-shape-divider-top-1704694396 card z-0 opacity-5 dark:opacity-20">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>

          <motion.div  className='z-10'>
            <p className=' text-2xl font-bold gap-2 my-5 flex self-center md:self-start place-items-center  '><i className='bx text-blue-500 bx-sm '><BsFillEmojiSmileFill /></i>About Me ...</p>
            <p className=' indent-8 mb-3 '><span className=' text-xl'> Hello, </span> I'm Nattagrit Ridtikhab (Bay), a passionate and aspiring <span className=' font-semibold text-md text-teal-500'>Frontend Developer</span> with a keen interest in creating visually appealing and <span className=' text-md font-semibold text-sky-500   '>User-Friendly Interface Websites.</span> 🌈</p>
            <p className='mb-3'>Despite my limited professional experience, I possess a strong foundation in <span className=' font-semibold text-md '> HTML, JavaScript, CSS, and the React.js Framework.</span> 💪🏻</p>
            <p className='mb-3'>My journey in the world of web development is driven by a relentless curiosity and a commitment to <span className=' font-semibold text-md text-red-500'>Continuous Learning.</span> 🚀</p>
          </motion.div>


          <motion.div >
            <p className='text-2xl font-bold gap-2 my-5 flex self-center md:self-start place-items-top  '><i className='bx bx-sm '><FcGraduationCap /></i><span className=''>Education</span></p>
            <div className='flex gap-3 md:self-start'>
              <img className=" w-12 pb-3 " src={Rsu} alt=""></img>
              <p className=' text-left self-center break-normal'><span className='  font-semibold'>Bachelor of Science <br />Innovation Technology</span><br /> <span className=' '>Rangsit University</span> </p>
            </div>
          </motion.div>


          <motion.div  className='z-10'>
            <p className=' text-2xl font-bold gap-2 my-5 mt-7 flex self-center md:self-start place-items-top '> <i className='bx bx-sm '><FcIdea /></i><span className=''>Soft Skills</span></p>
            <div className='self-center md:self-start leading-relaxed '>
              <p className=''><i className='bx-fw bx bx-check bx-sm' style={{ color: '#E8B20B' }}></i>Team Collaboration</p>
              <p className=''><i className='bx-fw bx bx-check bx-sm' style={{ color: '#E8B20B' }}></i>Adaptability</p>
              <p className=''><i className='bx-fw bx bx-check bx-sm' style={{ color: '#E8B20B' }}></i>Problem-Solving</p>
              <p className=''><i className='bx-fw bx bx-check bx-sm' style={{ color: '#E8B20B' }}></i>Quick Learner</p>
            </div>
          </motion.div>


        </motion.div>

      </div>

    </div>
  )
}

export default About