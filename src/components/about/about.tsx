import Pic from './image/me.jpg'
import Rsu from './image/rsuLogo.png'
import { motion } from "framer-motion"



function About() {



  return (

    <div id='about' className='about dark:text-white text-black text-base
    text-center md:text-left my-5'>

      <div className=" grid md:grid-cols-5 gap-10 md:gap-5 ">

        <motion.div className=' md:col-span-2 card bg-white place-items-center justify-center p-5 dark:bg-neutral-900 ' whileHover={{ scale: 1.02 }}>

          <img className="rounded-full w-9/12 my-5  " src={Pic} alt=""></img>

          <motion.div className='bg-clip-text text-center text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500  ' >
            <p className=' text-2xl md:text-2xl xl:text-2xl font-extrabold mb-1 dark:text-white text-black tracking-wide ' >Nattagrit Ridtikhab </p>
            <p className=' text-2xl md:text-2xl xl:text-2xl font-black mb-5 tracking-wide '>Creative Front-End Developer</p>
            <p className="p-0.5 bg-gradient-to-r mb-5"></p>
          </motion.div>

          <div className='flex gap-5 z-0 justify-center md:justify-start'>

            <motion.div className='hover:text-emerald-500  tooltip' data-tip="Copy Phone Number" onClick={() => {
              navigator.clipboard.writeText('0867499315');
            }} whileTap={{ scale: 1.1 }}>
              <i className='bx bxs-phone bx-md cursor-pointer  '></i>
            </motion.div>

            <motion.a className='hover:text-emerald-500  tooltip' data-tip="Send Email" href="mailto:Basicbay@icloud.com"
             whileTap={{ scale: 1.1 }}>
              <i className='bx bx-envelope bx-md  cursor-pointer  '></i>
            </motion.a>

            <motion.div className=' hover:text-emerald-500 tooltip' data-tip="Linked" whileTap={{ scale: 1.1 }} ><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx bxl-linkedin bx-md  ' ></i></a></motion.div>

            <motion.div className=' hover:text-emerald-500 tooltip' data-tip="Github" whileTap={{ scale: 1.1 }} ><a href="https://github.com/Basicbay" target="_blank"><i className='bx bxl-github bx-md  '></i></a></motion.div>

          </div>

          <motion.a href="" target="_blank" className='h-fit mt-6 my-5 bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-pink-500 hover:to-amber-500 font-semibold text-white  rounded-2xl w-fit p-3 px-5 ' whileTap={{ scale: 1.1 }}><i className='bx-fw bx bxs-download bx-sm bx-fade-up'></i>Download Resume</motion.a>

        </motion.div>

        <motion.div className=' text-left break-all md:col-span-3 bg-white card p-9 dark:bg-neutral-900   ' whileHover={{ scale: 1.02 }}>

          <motion.div >
            <p className=' text-2xl font-bold gap-2 my-5 flex self-center md:self-start  '>😊<span className=''>About Me ...</span></p>
            <p className=' indent-8 mb-3 '><span className=' text-xl'> Hello, </span> I'm Nattagrit Ridtikhab (Bay), a passionate and aspiring <span className=' font-semibold text-md text-emerald-500'>Front-End Developer</span> with a keen interest in creating visually appealing and <span className=' text-md font-semibold text-indigo-500   '>User-Friendly Interface Websites.</span> 🌈</p>
            <p className='mb-3'>Despite my limited professional experience, I possess a strong foundation in <span className=' font-semibold text-md '> HTML, JavaScript, CSS, and the React.js Framework.</span> 💪🏻</p>
            <p className='mb-3'>My journey in the world of web development is driven by a relentless curiosity and a commitment to <span className=' font-semibold text-md text-red-500'>Continuous Learning.</span> 🚀</p>
          </motion.div>


          <motion.div >
            <p className='text-2xl font-bold gap-2 my-5 flex self-center md:self-start '>🎓<span className=''>Education</span></p>
            <div className='flex gap-3 place-items-center self-center md:self-start'>
              <img className=" w-12 h-fit pb-3 " src={Rsu} alt=""></img>
              <p className=' text-left self-center break-normal'><span className='  font-semibold'>Bachelor of Science <br />Innovation Technology</span><br /> <span className=' '>Rangsit University</span> </p>
            </div>
          </motion.div>


          <motion.div >
            <p className=' text-2xl font-bold gap-2 my-5 mt-7 flex self-center md:self-start '>💡 <span className=''>Soft Skills</span></p>
            <div className='self-center md:self-start leading-relaxed md:pl-6'>
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