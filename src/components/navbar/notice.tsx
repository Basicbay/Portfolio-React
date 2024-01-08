import { motion } from "framer-motion"
import { HashLink } from 'react-router-hash-link'


function Notice() {
  return (

      <motion.div className="p-5 py-10 card text-white bg-black bg-opacity-50 my-10 shadow-md" whileHover={{ scale: 1.02 }}>

        <div className=" text-center self-center">
          <p className=" underline underline-offset-8 mb-10 bx-flashing">Last Updateded : 01/01/2024</p>
          <p className=' text-left text-xl  font-bold my-5 '><i className='bx-fw bx bx-info-circle bx-md ' style={{ color: '#ffffff' }}></i>Career Objective </p>
          <div className='mb-5 leading-loose text-left '>
            <p className=''><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#ffffff' }}></i>Full-Time Frontend Developer</p>
            <p className=''><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#ffffff' }}></i>Work From Anywhere</p>
            <p className=''><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#ffffff' }}></i>or Hybird in Bangkok</p>
            <p className=''><i className='bx-fw bx bx-chevron-right bx-sm ' style={{ color: '#ffffff' }}></i>Expected Salary 30-35k</p>
          </div>
          
            <HashLink smooth to="/#contact"
              scroll={(el) => {
                const yOffset = -100; // Adjust the offset to your liking
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}>
                <motion.button className=' bg-white text-black w-60 font-bold rounded-2xl mt-2 p-1 text-center hover:text-blue-500 select-none ' whileTap={{ scale: 1.1 }}>
              Hire Me<i className='bx-fw bx bx-right-arrow-alt bx-fade-right '></i>
              </motion.button>
            </HashLink>
          
        </div>

      </motion.div>

  )
}

export default Notice