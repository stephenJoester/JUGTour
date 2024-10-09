import React from 'react'

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Home</h1>
      <div className='flex gap-4'>
        <h1 className='text-gray-400'>@Quan Nguyen</h1> 
        <a className='text-gray-400'>GitHub</a>
      </div>
    </header>
  )
}

export default Header