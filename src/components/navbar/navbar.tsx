import { HashLink } from 'react-router-hash-link'
import Banner from './banner';

const Navbar = () => {

  return (
    <div className='fixed w-full z-10'>
      <Banner />
      <div className="navbar bg-base-200  dark:bg-neutral-800
      dark:text-white z-10 ">

        <div className="navbar-start">

          <div className="dropdown">

            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border-0
          bg-base-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 hover:bg-base-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>

            <ul tabIndex={0} className="p-2 shadow dropdown-content z-[1] rounded-md w-40
            bg-base-200 dark:bg-neutral-800 dark:text-white cursor-pointer ">

              <li className="hover:bg-base-300 dark:hover:bg-neutral-700 rounded-md p-1"><HashLink smooth to="/#about" scroll={(el) => { const yOffset = -120; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-smile bx-sm' ></i> About</HashLink></li>
              <li className="hover:bg-base-300 dark:hover:bg-neutral-700 rounded-md p-1"><HashLink smooth to="/#skills" scroll={(el) => { const yOffset = -140; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-code-block bx-sm'></i> Skills</HashLink></li>
              <li className="hover:bg-base-300 dark:hover:bg-neutral-700 rounded-md p-1"><HashLink smooth to="/#projects" scroll={(el) => { const yOffset = -140; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-folder-open bx-sm'></i> Projects</HashLink></li>
              <li className="hover:bg-base-300 dark:hover:bg-neutral-700 rounded-md p-1"><HashLink smooth to="/#experience" scroll={(el) => { const yOffset = -140; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-briefcase bx-sm'></i> Experience</HashLink></li>
              <li className="hover:bg-base-300 dark:hover:bg-neutral-700 rounded-md p-1"><HashLink smooth to="/#contact" scroll={(el) => { const yOffset = -140; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-message-dots bx-sm'></i> Contact</HashLink></li>

            </ul>
          </div>

          <HashLink smooth to="/#" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }} className="btn btn-ghost text-xl dark:hover:bg-neutral-700 hover:bg-base-300"><i className="bw-fw bx fi fi-brands-dev bx-sm"></i> My Portfolio</HashLink>

        </div>

        <div className="navbar-center hidden lg:flex h-1">
          <ul className="menu menu-horizontal px-1">

            <li className="dark:hover:bg-neutral-700 hover:bg-base-200 rounded-lg">
              <HashLink smooth to="/#about"
                scroll={(el) => {
                  const yOffset = -120; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="About">
                <i className='bx bx-smile bx-sm' ></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-700 hover:bg-base-200 rounded-lg">
              <HashLink smooth to="/#skills"
                scroll={(el) => {
                  const yOffset = -140; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Skills">
                <i className='bx bx-code-block bx-sm'></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-700 hover:bg-base-200 rounded-lg">
              <HashLink smooth to="/#projects"
                scroll={(el) => {
                  const yOffset = -140; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Projects">
                <i className='bx bx-folder-open bx-sm'></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-700 hover:bg-base-200 rounded-lg">
              <HashLink smooth to="/#experience"
                scroll={(el) => {
                  const yOffset = -140; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Experience">
                <i className='bx bx-briefcase bx-sm'></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-700 hover:bg-base-200 rounded-lg">
              <HashLink smooth to="/#contact"
                className="tooltip tooltip-bottom" data-tip="Contact">
                <i className='bx bx-message-dots bx-sm'></i>
              </HashLink>
            </li>

          </ul>
        </div>
        <div className="navbar-end ">

        </div>
      </div>
    </div>
  )
}

export default Navbar
