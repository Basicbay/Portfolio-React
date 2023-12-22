
import responsive from './image/responsive_xs.png'
import app from './image/app_xs.png'
import { FcOpenedFolder } from "react-icons/fc";
import './project.css'


function Projects() {
  return (

    <div id='projects' className="projects dark:text-white text-black
    text-base">

      <div className=" w-auto mb-10">
        <div className=" font-extrabold text-center md:text-left">
          <p className=" text-4xl gap-2 flex justify-center md:justify-start "><FcOpenedFolder />Projects</p>
          <p className=' font-bold hidden '>Front-End Developer</p>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 '>

        <div className="card w-full shadow-md bg-base-200 dark:bg-neutral-900 border dark:border-neutral-950 ">
          <figure><img src={responsive} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Portfolio Website
              <div className="badge badge-secondary hidden">NEW</div>
            </h2>
            <p>This is my personal portfolio website to showcase my skills, projects, and achievements. Design and develop in React.js with fully responsive in all devices.</p>
            <div className='card-actions font-semibold my-2 '><p>Technologies:</p></div>
            <div className="card-actions text-white justify-start  ">
              <div className='   rounded-xl bg-react px-3 '>REACT JS</div>
              <div className='   rounded-xl bg-typescript px-3 '>TYPESCRIPT</div>
              <div className='   rounded-xl bg-sky-500 px-3 '>CSS</div>
              <div className='   rounded-xl bg-tailwild px-3 '>TAILWIND CSS</div>
            </div>
          </div>
        </div>

        <div className="card w-fill shadow-md bg-base-200 dark:bg-neutral-900 border dark:border-neutral-950">
          <figure><img src={app} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
            Mobile Application
              <div className="badge badge-secondary hidden">NEW</div>
            </h2>
            <p>
              I have a mobile gaming app that was created using game-making software, and it generates revenue through AdMob advertisements.</p>
              <div className='flex flex-wrap justify-center md:justify-start my-3 gap-3'>
              <div className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600  rounded-2xl w-fit p-2 px-2 hover:scale-95 '><a href="https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567" target="_blank" className=' font-semibold text-white' ><i className='bx-fw bx bxl-apple bx-sm'></i>App Store </a></div>
              <div className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600  rounded-2xl w-fit p-2 px-2 hover:scale-95 '><a href="https://play.google.com/store/apps/developer?id=TheBayApps&hl=en_US" target="_blank" className=' font-semibold text-white' ><i className='bx-fw bx bxl-play-store bx-sm'></i>Google Play </a></div>
            </div>
            <div className='card-actions font-semibold mb-2 '><p>Technologies:</p></div>
            <div className="card-actions text-white justify-start">
              <div className='   rounded-xl bg-slate-500 px-3 '>CONSTRUCT 3</div>
              <div className='   rounded-xl bg-javascript px-3 '>JAVASCRIPT</div>
              <div className='   rounded-xl bg-red-500 px-3 '>ADMOB</div>
            </div>
          </div>
        </div>

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
              <button className='   rounded-md bg-indigo-500 px-2 '>C++</button>
            </div>
          </div>
        </div>
*/}
      </div>

    </div>
  )
}

export default Projects