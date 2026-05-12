import { notFound } from 'next/navigation';
import React from 'react'

const DynamicIdPage = async ({params}) => {
    const {userId} = await params;

    if(userId > 10) {
      notFound()
    }

  return (
    <div>DynamicIdPage {userId} </div>
  )
}

export default DynamicIdPage