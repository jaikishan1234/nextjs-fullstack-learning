import React from 'react'

const contactLayout = ({children}) => {
  return (
    <div>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
    </div>
  )
}

export default contactLayout