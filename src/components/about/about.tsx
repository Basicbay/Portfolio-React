import Pic from './image/me.jpg'
import Rsu from './image/rsuLogo.png'
import { motion } from "framer-motion"
import resume from './pdf/resume.pdf'
import { FcGraduationCap } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { BsFillEmojiSmileFill } from "react-icons/bs";


function About() {

  return (

    <div id='about' className='about dark:text-white text-black text-base
    text-center md:text-left my-5'>

      <div className=" grid md:grid-cols-5 gap-10 md:gap-5 ">

        <motion.div className=' md:col-span-2 card bg-white place-items-center justify-center p-5 dark:bg-neutral-900 shadow-md ' whileHover={{ scale: 1.02 }}>

          <img className="rounded-full w-9/12 my-5  " src={Pic} alt=""></img>

          <motion.div className='bg-clip-text text-center text-transparent bg-gradient-to-r from-blue-500 to-teal-500  ' >
            <p className=' text-2xl md:text-xl lg:text-2xl xl:text-3xl  font-black mb-1 dark:text-white text-black tracking-wide ' >Nattagrit Ridtikhab</p>
            <p className=' text-2xl md:text-xl lg:text-2xl   font-black mb-5 tracking-wide '>Creative Front-End<br className='xl:hidden'/> Developer</p>
            <p className="p-0.5 bg-gradient-to-r mb-5"></p>
          </motion.div>

          <div className='flex gap-5 z-0 justify-center md:justify-start'>

            <motion.div className='hover:text-blue-500  tooltip' data-tip="Copy Phone Number" onClick={() => {
              navigator.clipboard.writeText('0867499315');
            }} whileTap={{ scale: 1.2 }} >
              <i className='bx bxs-phone bx-md cursor-pointer  '></i>
            </motion.div>

            <motion.a className='hover:text-blue-500  tooltip' data-tip="Send Email" href="mailto:Keepatbayy@gmail.com"
             whileTap={{ scale: 1.2 }}>
              <i className='bx bx-envelope bx-md  cursor-pointer  '></i>
            </motion.a>

            <motion.div className=' hover:text-blue-500 tooltip' data-tip="Linked" whileTap={{ scale: 1.2 }} ><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx bxl-linkedin bx-md  ' ></i></a></motion.div>

            <motion.div className=' hover:text-blue-500 tooltip' data-tip="Github" whileTap={{ scale: 1.2 }} ><a href="https://github.com/Basicbay" target="_blank"><i className='bx bxl-github bx-md  '></i></a></motion.div>

          </div>

        <motion.a href={resume} download="Resume" target="_blank" className='h-fit mt-6 my-5 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white  rounded-2xl w-fit p-3 px-5 ' whileTap={{ scale: 1.1 }}><i className='bx-fw bx bxs-download bx-sm bx-fade-up'></i>Download Resume</motion.a>

        </motion.div>



        <motion.div className=' text-left hyphens-auto md:col-span-3 bg-white card p-9 dark:bg-neutral-900 shadow-md ' lang='de' whileHover={{ scale: 1.02 }}>

          <motion.div >
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


          <motion.div >
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