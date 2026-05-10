import React from 'react'

const DynamicIdPage = async ({params}) => {
    const {userId} = await params;

  return (
    <div>DynamicIdPage {userId} </div>
  )
}

export default DynamicIdPage