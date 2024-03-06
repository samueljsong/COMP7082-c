import React, { useState } from 'react';
import '../App.css';


export const AdminUserReportCard = () => {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

    const states = ["green", "yellow", "red", "orange"]
    const [option, setOption] = useState(states[2])

    const handleSubmit = () => {
        alert(option)
    }

    return(
        <div>
            <div className='grid h-screen w-full place-items-center bg-background'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-[65px]">
                    <div className="p-5 shadow-lg">
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Location</p>
                            <input type="text" value="SW1 2nd Floor" disabled className='bg-[#D9D9D9]'></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Subject of Object</p>
                            <input type="text" value="Table" disabled className='bg-[#D9D9D9]'></input>
                        </div>
                        <div className='mb-1'>
                            <p className="font-normal text-gray-700 pl-[10px]">Description of Problem</p>
                            <textarea type="text" value="The table plugs are not working hello hdjfhsjdkhf akjshdkjshkjh k" disabled className='bg-[#D9D9D9] h-[129px] w-[300px] resize-none p-[10px] text-[#333] rounded'></textarea>
                        </div>
                        <div className='mb-5 mt-5 flex flex-row'>
                            <div id='report-status' className='flex flex-col flex-1 wl-64'>
                                <h3 className='text-gray-700 pl-[10px]'>Report Status</h3>
                                <form onSubmit={handleSubmit} id='state-submit'>
                                    <label>
                                        <select class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center" defaultValue={option} onChange={(e) => setOption(e.target.value)}>  
                                            {states.map((option, idx) => {
                                                <option key={idx}>{option}</option>
                                            })}          
                                            <option value="orange">Unread 🟠</option>
                                            <option value="green">Resolved 🟢</option>
                                            <option value="red">Rejected 🔴</option>
                                            <option value="blue">In-Progress 🔵</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                            <div className='flex justify-center items-center flex-1'>
                                {/* <a href="#" className='font-normal text-blue-500 underline decoration-solid hover:text-blue-700'>Image</a> */}
                                <button onClick={handleOpen} variant="gradient" className='font-normal text-blue-500 underline decoration-solid hover:text-blue-700'>
                                    Image
                                </button>
                                <dialog open={open} handler={handleOpen} className=''>
                                    <dialogheader>
                                        <h1 className='font-bold'>Image</h1>
                                    </dialogheader>

                                    <dialogbody>
                                        <div className='bg-[#D9D9D9] w-[340px] h-[484px]'>
                                            
                                        </div>
                                    </dialogbody>

                                    <dialogfooter>
                                        <button variant="gradient" color="green" onClick={handleOpen}>
                                            <span>Confirm</span>
                                        </button>
                                    </dialogfooter>
                                </dialog>
                            </div>
                        </div>
                        <div className='mb-1'>
                        
                        </div>
                        <div className='flex justify-center items-center mt-7'>
                            <button type='submit' form='state-submit' className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#043C6C] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[270px] h-[40px]">
                                Submit
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2.2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

