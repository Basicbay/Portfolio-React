import Pic from './image/me.jpg'
import Rsu from './image/rsuLogo.png'
import { FcBinoculars } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";


function About() {

  return (

    <div id='about' className='about dark:text-white text-black text-base 
    text-center md:text-left'>

      <div className=" grid md:grid-cols-5 p-5  ">

        <div className=' md:col-span-2   '>
          <img className="rounded-full m-auto w-9/12 md:w-full md:p-5 " src={Pic} alt=""></img>
        </div>

        <div className=' pt-5 md:p-5 md:col-span-3  '>
          <div className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  '>
            <p className=' text-2xl md:text-3xl xl:text-4xl font-extrabold mb-1 dark:text-white text-neutral-700 tracking-wide ' >Nattagrit Ridtikhab </p>
            <p className=' text-2xl md:text-3xl xl:text-4xl font-black mb-5 '>Creative Front-End Developer</p>
            <p className="p-0.5 bg-gradient-to-r mb-5"></p>
          </div>

          <div className='flex gap-5 z-0 justify-center md:justify-start'>
            <div className='hover:text-emerald-500  tooltip' data-tip="Copy Tel." onClick={() => {
              navigator.clipboard.writeText('0867499315');
            }}>
              <i className='bx bxs-phone bx-md bx-tada-hover cursor-pointer '></i>
            </div>
            <div className='hover:text-emerald-500  tooltip' data-tip="Copy Email" onClick={() => {
              navigator.clipboard.writeText('Basicbay@gmail.com');
            }}>
              <i className='bx bx-envelope bx-md bx-tada-hover cursor-pointer '></i>
            </div>
            <div className=' hover:text-emerald-500 tooltip' data-tip="Linked" ><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx bxl-linkedin bx-md bx-tada-hover' ></i></a></div>
            <div className=' hover:text-emerald-500 tooltip' data-tip="Github"><a href="https://github.com/Basicbay" target="_blank"><i className='bx bxl-github bx-md bx-tada-hover'></i></a></div>
          </div>

          <p className=' text-xl font-bold gap-2 my-5 mb-5  flex '>😊 About Me</p>
          <p className=' text-base text-left mb-5 indent-9 '>Hello, I'm Nattagrit Ridtikhab (Bay), a passionate and aspiring Frontend Developer with a keen interest in creating visually appealing and User-Friendly Interface Websites. Despite my limited professional experience, I possess a strong foundation in HTML, JavaScript, CSS, and the React.js Framework. My journey in the world of web development is driven by a relentless curiosity and a commitment to continuous learning. </p>

  
              <p className=' text-xl font-bold gap-2 my-5 flex  '><i className='bx-sm'><FcGraduationCap /></i>Education</p>
              <div className='flex items-stretch gap-4 mb-5  '>
                <img className="w-10 h-fit self-auto pb-2 " src={Rsu} alt=""></img>
                <p className=' text-left self-center'><span className=' font-bold'>Innovation Technology</span><br /> Rangsit University</p>
              </div>

              <p className=' text-xl font-bold gap-2 my-5 flex '><i className='bx-sm'><FcBinoculars /></i>Career Objective</p>
              <div className='mb-8 leading-loose'>
                <p className=' text-left self-center'><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#40E0D0' }}></i>Full-Time Frontend Developer</p>
                <p className=' text-left self-center'><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#40E0D0' }}></i>Work from Home</p>
                <p className=' text-left self-center'><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#40E0D0' }}></i>Hybird in Bangkok</p>
                <p className=' text-left self-center'><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#40E0D0' }}></i>Expected Salary 30-35k</p>
              </div>
          
          <button className='h-fit bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600  rounded-2xl w-fit p-3 px-5 hover:scale-95'><a href="" target="_blank" className='  font-semibold text-white' ><i className='bx-fw bx bxs-download bx-sm'></i>Download Resume</a></button>

        </div>

      </div>

    </div>
  )
}

export default About