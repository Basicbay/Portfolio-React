import { FcBriefcase } from "react-icons/fc";

function Experience() {
    return (
        <div id='experience' className="experience my-20 dark:text-white text-black
        text-base ">

            <div className=" w-auto mb-10">
                <div className=" font-extrabold text-center md:text-left">
                    <p className="text-4xl gap-2 flex justify-center md:justify-start "><FcBriefcase />Experience</p>
                    <p className=' font-bold hidden '>Front-End Developer</p>
                </div>
            </div>

            <div className=" border dark:border-neutral-950 shadow-md bg-base-200 dark:bg-neutral-900 rounded-2xl overflow-hidden p-10">
                <div className='text-center md:text-left dark:text-white'>

                    {/* 

                    <p className=' text-2xl font-semibold'>Business intelligence (BI) </p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Innobiz Commapy (Internship) </p>
                    <p className=' mb-5 text-left break-all'>skills</p>
                    <div className="card-actions gap-2 my-3  justify-start">
                        <div className="badge badge-outline">SSIS</div>
                        <div className="badge badge-outline">SSAS</div>
                        <div className="badge badge-outline">SSRS</div>
                        <div className="badge badge-outline">ETL</div>
                        <div className="badge badge-outline">Data Warehouse</div>
                        <div className="badge badge-outline">Cube</div>
                        <div className="badge badge-outline">Olap</div>
                        <div className="badge badge-outline">Reporting</div>
                        <div className="badge badge-outline">SQL Server</div>
                    </div>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>

                    <p className='  text-2xl  font-semibold'>Computer Vision</p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Graduation Project</p>
                    <p className=' mb-5 text-left break-all'><span className=" font-medium">Surveys the Changing Landscape by UAV</span><br /> The project is designed and developed using concepts of image processing.</p>

                    <div className="card-actions gap-2 my-3  justify-start">
                        <div className="badge badge-outline">Open CV</div>
                        <div className="badge badge-outline">C++</div>
                        <div className="badge badge-outline">Robot Operating System (ROS)</div>
                        <div className="badge badge-outline">Linux Ubuntu</div>
                        <div className="badge badge-outline">AR Drone 2.0</div>
                    </div>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>

                    <p className='  text-2xl  font-semibold'>Network, Fiber Obtic</p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Standthai Company</p>
                    <p className=' mb-5 text-left break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet omnis maiores quae, eveniet in dolores voluptatum ea ad hic voluptatibus repudiandae incidunt, fugiat id pariatur quo error. Tenetur, facere.</p>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5"></div>
*/}   
                    <p className=' text-2xl  font-semibold mb-1 '>Mobile Application</p>
                    <p className=' font-semibold mb-5'><i className='bx bx-map'></i> Apple Store , Google Play</p>
                    <p className=' mb-5 text-left break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet omnis maiores quae, eveniet in dolores voluptatum ea ad hic voluptatibus repudiandae incidunt, fugiat id pariatur quo error. Tenetur, facere.</p>

                    <div className="border-t-2 border-slate-200 dark:border-neutral-700 shadow-lg ... my-5 hidden"></div>

                    

                </div>
            </div>

        </div>
    )
}

export default Experience