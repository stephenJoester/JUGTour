import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import List from '../components/List'

const Groups = () => {

  const [data, setData] = useState([])
  // useEffect(() => {
  //   setData(localStorage.getItem('data'))
  // }, [])

  return (
    <div>
      <Header />
      {/* first row */}
      <div className='flex justify-between'>
        <div className='p-4 py-6'>
          <h1 className='text-2xl font-medium'>My JUG Tour</h1>
        </div>
        <div className='py-6 px-4'>
          <Button text={"Add group"}  classname='rounded-md'/>
        </div>
      </div>
      {/* second row */} 
      <List />
    </div>
  )
}

export default Groups