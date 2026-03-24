import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onclick: () => void;
}

export default function Button({children, onclick} : ButtonProps) {
  return (
    <button onClick={onclick}
    className='bg-red-600 text-white px-4 py-2 rounded'>
        {children}
    </button>
  )
}
