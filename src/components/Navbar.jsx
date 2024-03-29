import React from 'react'

export default function Navbar() {
  function Dropdown() {
    alert("TODO: Open drop down menu.")
  }

  return (
    <nav className="flex justify-between px-2 py-4 border shadow-md items-center fixed w-full bg-white">
      <a href='/'>
        <div className='text-bcit-blue font-extrabold font-inter-extrabold text-xl hover:cursor-pointer'>
          R E P I T
        </div>
      </a>
        <div className='flex items-center hover:cursor-pointer' onClick={Dropdown}>
          <div className='flex flex-col w-8 h-8 rounded-md bg-bcit-blue text-white justify-center items-center text-sm'>
              SS {/* Put user initials here*/}
          </div>
          <div className='text-black font-inter text-sm ml-2'>
              Samuel Song {/* Put name here */}
          </div>
        </div>
    </nav>
  )
}
