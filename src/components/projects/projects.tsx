
import responsive from './image/responsive.png'
import app from './image/app_xs.png'
import { FcOpenedFolder } from "react-icons/fc";
import { motion } from "framer-motion"


function Projects() {
  return (

    <motion.div id='projects' className="projects dark:text-white text-black
    text-base my-10 " whileHover={{ scale: 1.02 }}>

      <div className="card p-10 font-extrabold text-center md:text-left bg-neutral-100 dark:bg-neutral-950 rounded-b-none ">
            <p className="text-4xl gap-2 flex justify-center "><FcOpenedFolder />Projects</p>
            </div>


      <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5 p-5 pb-7 md:pb-5 bg-black bg-opacity-50 card rounded-t-none shadow-md   '>

        <motion.div className="card w-full shadow-md bg-white dark:bg-neutral-900 text-center md:text-left " whileHover={{ scale: 1.02 }}>
          <figure><img src={responsive} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold self-center md:self-start ">
              Portfolio Website
              <div className="badge badge-secondary hidden">NEW</div>
            </h2>

            <div>
            <p className='hyphens-auto text-left indent-8 ' lang='de'>This is my personal portfolio website to showcase my skills, projects, and resume. Design and develop in React.js with fully responsive in all devices. </p>             
            <div className=' flex flex-wrap justify-center md:justify-start gap-3 mt-6 mb-4'>
              <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white   rounded-2xl w-fit p-2 px-2 select-none  ' whileTap={{ scale: 1.2 }} href="https://github.com/Basicbay/Portfolio-Website" target="_blank" ><span className=''><i className='bx-fw bx bxl-github bx-sm bx-flashing  '></i>Repository</span> </motion.a>
              
            </div>
            </div>
            
            <div className='card-actions font-semibold mb-1 text-neutral-500 '><p>Technologies:</p></div>
            <div className="card-actions text-black font-normal justify-center md:justify-start text-sm   ">
              <div className='   rounded-xl bg-neutral-200 px-3 '>React</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>TypeScript</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>Tailwind CSS</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>Daisy UI</div>        
              <div className='   rounded-xl bg-neutral-200 px-3 '>HTML</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>CSS</div>   
              
            </div>
          </div>
        </motion.div>

        <motion.div className="card w-fill shadow-md bg-white dark:bg-neutral-900 text-center md:text-left  " whileHover={{ scale: 1.02 }}>
          <figure><img src={app} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold self-center md:self-start">
            Mobile Game App
              <div className="badge badge-secondary hidden">NEW</div>
            </h2>

            <div>
            <p className='hyphens-auto text-left indent-8 ' lang='de'>This is my mobile gaming app created using game-making software, and it generates revenue through Google AdMob advertisements.</p>             
            <div className=' flex flex-wrap justify-center md:justify-start gap-3 mt-6 mb-4 '>
              <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white   rounded-2xl w-fit p-2 px-2 select-none  ' whileTap={{ scale: 1.2 }} href="https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567" target="_blank" ><span className=''><i className='bx-fw bx bxl-apple bx-sm bx-flashing '></i>Apple Store</span> </motion.a>
              <motion.a className=' bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 font-semibold text-white   rounded-2xl w-fit p-2 px-2 select-none  ' whileTap={{ scale: 1.2 }} href="https://play.google.com/store/apps/developer?id=TheBayApps&hl=en_US" target="_blank" ><span className=''><i className='bx-fw bx bxl-play-store bx-sm bx-flashing'></i>Google Play</span> </motion.a>
            </div>
            </div>
            
            <div className='card-actions font-semibold mb-1 text-neutral-500  '><p>Technologies:</p></div>
            <div className="card-actions text-black font-normal justify-center md:justify-start text-sm">
              <div className='   rounded-xl bg-neutral-200 px-3   '>Construct 3</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>Google Admob</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>JavaScript</div>
              <div className='   rounded-xl bg-neutral-200 px-3 '>Photoshop</div>

              
            </div>
          </div>
        </motion.div>

        {/* 
        <div className=" rounded-3xl shadow-2xl overflow-hidden p-10 grid md:grid-cols-3  ">
          <div><img className="object-cover w-4/12 md:w-2/5 xl:w-7/12 m-auto mb-10" src={responsive} alt=""></img></div>
          <div className='text-center md:text-left md:col-span-2' >
            <p className=' text-2xl font-semibold mb-5 '>Portfolio Website</p>
            <p className=' mb-5 text-left break-all '>This is my simple portfolio website design and develop in React.Js with fully responsive in all devices</p>
            <p className=' font-semibold mb-5 flex gap-2 justify-center md:justify-start'><AiOutlineCode />Technologies</p>
            <div className='flex flex-wrap justify-center md:justify-start gap-3 '>
              <div className='   rounded-md bg-react px-3 '>REACT JS</div>
              <div className='   rounded-md bg-typescript px-3 '>TYPESCRIPT</div>
              <div className='   rounded-md bg-sky-500 px-3 '>CSS</div>
              <div className='   rounded-md bg-tailwild px-3 '>TAILWIND CSS</div>
            </div>
          </div>
        </div>

        <div className="  rounded-3xl shadow-2xl overflow-hidden p-10 grid md:grid-cols-3">
          <div><img className="object-cover w-4/12 md:w-2/5 xl:w-7/12  m-auto mb-10" src={phone} alt=""></img></div>
          <div className='text-center md:text-left md:col-span-2'>
            <p className=' text-2xl font-semibold mb-5'>Mobile Application</p>
            <p className='  mb-5 text-left break-all '>I have a mobile games app built with game-making software, earning revenue from AdMob</p>
            <div className='flex flex-wrap justify-center md:justify-start mb-5 gap-3'>
              <div className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl w-fit p-2 px-2 hover:scale-95 '><a href="https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567" target="_blank" className=' font-semibold text-white' ><i className='bx-fw bx bxl-apple bx-sm'></i>App Store </a></div>
              <div className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl w-fit p-2 px-2 hover:scale-95 '><a href="https://play.google.com/store/apps/developer?id=TheBayApps&hl=en_US" target="_blank" className=' font-semibold text-white' ><i className='bx-fw bx bxl-play-store bx-sm'></i>Google Play </a></div>
            </div>
            <p className='  font-semibold mb-5 flex gap-2 justify-center md:justify-start'><AiOutlineCode />Technologies</p>
            <div className='flex flex-wrap justify-center md:justify-start gap-3  '>
              <div className='   rounded-md bg-slate-500 px-3 '>CONSTRUCT 3</div>
              <div className='   rounded-md bg-javascript px-3 '>JAVASCRIPT</div>
              <div className='   rounded-md bg-red-500 px-3 '>ADMOB</div>
            </div>

          </div>
        </div>


        <div className=" rounded-3xl shadow-2xl overflow-hidden p-10 hidden">
          <img className="object-cover w-2/5 m-auto mb-10" src={drone} alt=""></img>
          <div className='text-center md:text-left'>
            <p className=' mb-5 '>Project Graduation</p>
            <p className='  mb-5'>Image Processing</p>
            <p className='  font-semibold mb-5 flex gap-2 justify-center md:justify-start'><AiOutlineCode />Technologies</p>
            <div className='flex flex-wrap justify-center md:justify-start gap-3  font-medium'>
              <button className='   rounded-md bg-red-500 px-2 '>OPEN CV</button>
              <button className='   rounded-md bg-blue-500 px-2 '>C++</button>
            </div>
          </div>
        </div>
*/}
      </div>

    </motion.div>
  )
}

export default Projects