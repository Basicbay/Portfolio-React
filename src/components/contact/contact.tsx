import { FcVoicePresentation } from "react-icons/fc";

function Contact() {
  return (
    <div id='contact' className="contact mt-20 dark:text-white text-black
    text-base place-content-start">

      <div className=" w-auto mb-10">
        <div className=" font-extrabold text-center md:text-left">
          <p className=" text-4xl gap-2 flex justify-center md:justify-start "><FcVoicePresentation />Contact</p>
          <p className=' font-bold hidden '>Front-End Developer</p>
        </div>
      </div>

      <div className=" rounded-3xl shadow-2xl font-medium">
        <p className='mb-5 font-bold hidden '>Front-End Developer</p>
        <div className=" grid grid-cols-1 p-10 gap-y-10 justify-items-start
         md:grid-cols-2 md:ml-20
         xl:grid-cols-4 xl:justify-items-center xl:ml-0 " >

          <div className=' tooltip' data-tip="Copy Tel." >
            <div onClick={() => { navigator.clipboard.writeText('0867499315') }} className=" cursor-pointer hover:text-emerald-500 hover:scale-105"><i className='bx-fw bx bxs-phone bx-md bx-tada-hover'></i>0867499315</div>
          </div>

          <div  className=' tooltip' data-tip="Copy Email">
            <div onClick={() => { navigator.clipboard.writeText('Basicbay@gmail.com') }} className=" cursor-pointer hover:text-emerald-500 hover:scale-105"><i className='bx-fw bx bx-envelope bx-md bx-tada-hover'></i>Basicbay@gmail.com</div>
          </div>

          <div className=" cursor-pointer hover:text-emerald-500 hover:scale-105 tooltip" data-tip="Linked"><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx-fw bx bxl-linkedin bx-md bx-tada-hover'></i>Nattagrit Ridtikhab</a></div>
          
          <div className=" cursor-pointer hover:text-emerald-500 hover:scale-105 tooltip" data-tip="Github"><a href="https://github.com/Basicbay" target="_blank"><i className='bx-fw bx bxl-github bx-md  bx-tada-hover'></i>Basicbay</a></div>

        </div>
      </div>

    </div>
  )
}

export default Contact