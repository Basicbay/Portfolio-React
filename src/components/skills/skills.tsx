import './skills.css'
import { FcCommandLine } from "react-icons/fc";
import { SiBabel } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import laptop from './laptop.png'


function Skills() {
  return (

    <div id='skills' className="skills my-20 dark:text-white text-black
    text-sm ">

      <div className=" w-auto mb-10">
        <div className="font-extrabold text-center md:text-left ">
          <p className=" text-4xl gap-2 flex justify-center md:justify-start"><FcCommandLine />Skills</p>
          <p className=' text-lg font-bold hidden  '>Technical Skills for Front-end Developer</p>
        </div>
      </div>

      <div className="mockup-window border dark:border-neutral-950 shadow-md bg-base-300 dark:bg-neutral-700">
        <div className="grid justify-center bg-base-200 dark:bg-neutral-900 p-5 md:p-10 gap-5">

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-10 place-items-center border-b-2 dark:border-neutral-800 pb-5  " >
          <div className=' col-span-2 md:col-span-2 justify-self-center md:justify-self-start'><p className='text-lg font-bold text-neutral-500   '>Languages :</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-html5 bx-lg bx-tada-hover' style={{ color: '#ff6b00' }}></i><p>HTML</p></div>
            <div className='hover:scale-110' ><i className='bx bxl-css3 bx-lg bx-tada-hover' style={{ color: '#00C7F8' }}></i><p>CSS</p></div>
            <div className='hover:scale-110' ><i className='bx bxl-javascript bx-lg bx-tada-hover' style={{ color: '#f3d405' }}></i><p>JAVASCRIPT</p></div>
            <div className='hover:scale-110' ><i className='bx bxl-typescript bx-lg bx-tada-hover' style={{ color: '#0069ff' }}></i><p>TYPESCRIPT</p></div>

          </div>

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-10 place-items-center border-b-2 dark:border-neutral-800 pb-5 " >
          <div className=' col-span-2 md:col-span-2 justify-self-center md:justify-self-start'><p className='text-lg font-bold  text-left text-neutral-500 '>Frameworks / Libraries :</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-react bx-lg bx-spin-hover' style={{ color: '#a100ff' }}></i><p>REACT JS</p></div>
          <div className='hover:scale-110' ><i className='bx bx-md bx-tada-hover ' style={{ color: '#5D6D7E' }}><SiNextdotjs /></i><p>NEXT JS</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-jquery bx-lg bx-tada-hover' style={{ color: '#0093E7 ' }}></i><p>JQUERY</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-sass bx-lg bx-tada-hover' style={{ color: '#EC0084  ' }}></i><p>SASS</p></div>
          </div>

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-10 place-items-center border-b-2 dark:border-neutral-800 pb-5 " >
          <div className=' col-span-2 md:col-span-2 justify-self-center md:justify-self-start '><p className='text-lg font-bold  text-left text-neutral-500  '>Responsive Design :</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-bootstrap bx-lg bx-tada-hover' style={{ color: '#8500ff' }}></i><p>BOOTSTRAP</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-tailwind-css bx-lg bx-tada-hover' style={{ color: '#00DB4C ' }}></i><p>TAILWIND CSS</p></div>
          <div className='hover:scale-110' ><i className='bx bxs-layout bx-lg bx-tada-hover' style={{color:'#FF2121  '}}  ></i><p>FLEX BOX</p></div>
          <div className='hover:scale-110' ><i className='bx bxs-grid-alt bx-lg bx-tada-hover' style={{color:'#E144E6'}}></i><p>CSS GRID</p></div>

          </div>

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-10 place-items-center border-b-2 dark:border-neutral-800 pb-5 " >
          <div className=' col-span-2 md:col-span-2 justify-self-center md:justify-self-start '><p className='text-lg font-bold text-neutral-500   '>Version Control :</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-git bx-lg bx-tada-hover' style={{ color: '#FF7F50  ' }}></i><p>GIT</p></div>
          <div className='hover:scale-110' ><i className='bx bxl-github bx-lg bx-tada-hover' style={{ color: '#808080 ' }}></i><p>GITHUB</p></div>
          </div>

          <div className="font-medium grid grid-cols-2 md:grid-cols-8 text-center gap-10 place-items-center pb-5 md:pb-0 " >
          <div className='col-span-2 md:col-span-2 justify-self-center md:justify-self-start '><p className='text-lg font-bold text-neutral-500   '>Build Tools :</p></div>
          <div className='hover:scale-110' ><i className='bx bx-md bx-tada-hover' style={{ color: '#FFBF00' }}><SiBabel /></i><p>BABEL</p></div>
          <div className='hover:scale-110' ><i className='bx bx-md bx-tada-hover' style={{ color: '#2471A3 ' }}><SiWebpack /></i><p>WEBPACK</p></div>
          </div>
 
        </div>
      </div>

    </div>

  )
}

export default Skills