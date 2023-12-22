
import './banner.css'

function Banner() {
  return (
      <div className=' bg-info banner-job p-2 text-center w-full text-sm md:text-base font-light text-white z-10'>
        <p className='flash-job bx-flashing'>I'm seeking a <span className=' font-semibold   '>Full-Time Front-End Developer</span> position <span className=' font-semibold'>!</span>
        </p>
      </div>
  )
}

export default Banner