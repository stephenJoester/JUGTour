import React from 'react'
import {twMerge} from 'tailwind-merge'

const Button = ({text, classname='', onClick}) => {
    const baseClassName = 'bg-green-600 cursor-pointer py-2 px-4 text-white text font-medium'
    const mergedClassName = twMerge(baseClassName, classname)
  return (
    <div className={mergedClassName} onClick={onClick}>
        {text}
    </div>
  )
}

export default Button