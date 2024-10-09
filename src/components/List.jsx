import React from 'react'
import Button from './Button'

const List = () => {

    const data = [
        {id : 1, name: 'Seattle JUG', location: '', event: "September 13, 2022: Micro frontends for Java developers"},
        {id : 2, name: 'NYC JUG', location: '', event: "September 14, 2022: Micro frontends for Java developers"}, 
        {id : 3, name: 'Chicago JUG', location: '', event: "September 15, 2022: Micro frontends for Java developers"},
        {id : 4, name: 'SF JUG', location: '', event: "September 16, 2022: Micro frontends for Java developers"},
    ]
    return (
        <div className='overflow-x-auto mx-4'>
            <table className='min-w-full bg-white'>
                <thead className='border-b border-gray-200'>
                    <tr>
                        <th className='py-2 px-4 text-left'>Name</th>
                        <th className='py-2 px-4 text-left'>Location</th>
                        <th className='py-2 px-4 text-left'>Events</th>
                        <th className='py-2 px-4 text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className='border-b border-gray-200'>
                            <td className='py-2 px-4 text-left'>{item.name}</td>
                            <td className='py-2 px-4 text-left'>{item.location}</td>
                            <td className='py-2 px-4 text-left'>{item.event}</td>
                            <td className='py-2 px-4 text-left'>
                                <div className='flex justify-start'>
                                    <Button text={"Edit"} classname='bg-blue-600 rounded-tl-md rounded-bl-md'/>
                                    <Button text={"Delete"} classname='bg-red-600 rounded-tr-md rounded-br-md'/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List