import { FcVoicePresentation } from "react-icons/fc";
import developer from './image/developer.png'

function Footer() {
    return (
        <>
            <div id='contact' className=" w-auto mb-10 dark:text-white text-black ">
                <div className=" font-extrabold text-center md:text-left">
                    <p className=" text-4xl gap-2 flex justify-center md:justify-start "><FcVoicePresentation />Contact Me</p>
                    <p className=' font-bold hidden '>Front-End Developer</p>
                </div>
            </div>

            <div className="rounded-2xl p-10 shadow-md border dark:border-neutral-950 bg-base-200 dark:bg-neutral-900 dark:text-white text-black text-base mb-5">
                <footer className="footer text-base  ">

                    <aside className=" justify-items-center m-auto">
                        <img className=" w-60 " src={developer} alt="Shoes" />
                        <p className="text-center font-bold  tracking-wide ">Nattagrit Ridtikhab (Bay)<br /><span className=" font-bold text-emerald-500 ">Front-End Developer</span></p>
                    </aside>

                    <nav className="gap-10 self-center">
                        <header className="footer-title ">Hire Me !</header>
                        <div className=' tooltip' data-tip="Copy Tel." >
                            <div onClick={() => { navigator.clipboard.writeText('0867499315') }} className=" cursor-pointer hover:text-emerald-500 hover:scale-105"><i className='bx-fw bx bxs-phone bx-md bx-tada-hover'></i>0867499315</div>
                        </div>
                        <div className=' tooltip' data-tip="Copy Email">
                            <div onClick={() => { navigator.clipboard.writeText('Basicbay@gmail.com') }} className=" cursor-pointer hover:text-emerald-500 hover:scale-105"><i className='bx-fw bx bx-envelope bx-md bx-tada-hover'></i>Basicbay@gmail.com</div>
                        </div>
                    </nav>

                    <nav className="gap-10 self-center">
                        <header className="footer-title  ">WEB URL </header>
                        <div className=" cursor-pointer hover:text-emerald-500 hover:scale-105 tooltip" data-tip="Linked"><a href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/" target="_blank"><i className='bx-fw bx bxl-linkedin bx-md bx-tada-hover'></i>Nattagrit Ridtikhab</a></div>
                        <div className=" cursor-pointer hover:text-emerald-500 hover:scale-105 tooltip" data-tip="Github"><a href="https://github.com/Basicbay" target="_blank"><i className='bx-fw bx bxl-github bx-md  bx-tada-hover'></i>Basicbay</a></div>
                    </nav>

                </footer>
                <div className="mt-16 mb-10 max-w-screen-lg text-center m-auto " >
                    <p> 🙏 Thank you for considering my portfolio. Excited about the chance to evolve as a Frontend Developer, I'm keen to contribute to web development and connect with professionals who share a passion for crafting exceptional online experiences.</p>
                </div>
            </div>

        </>
    )
}

export default Footer