import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-blue-900 justify-between text-white py-5 px-52 text-xl'>
      <div className="logo">
        <span className='font-bold text-2xl mx-8'>iTask</span>
      </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar