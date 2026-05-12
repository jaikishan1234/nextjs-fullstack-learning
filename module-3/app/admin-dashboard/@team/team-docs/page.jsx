import Link from 'next/link'
import React from 'react'

const TeamDocsPage = () => {
  return (
    <div className='bg-red-400 h-[50%]'>
        <Link href={"/admin-dashboard"}>
            Go to default
        </Link>
    </div>
  )
}

export default TeamDocsPage