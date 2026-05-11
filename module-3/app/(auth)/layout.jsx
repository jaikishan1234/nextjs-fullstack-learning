import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-6xl font-bold text-amber-500'>Auth Layout </h1>
        {children}
    </div>
  )
}

export default AuthLayout