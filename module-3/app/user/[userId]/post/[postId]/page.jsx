import React from 'react'

const DynamicPostIdPage = async ({params}) => {
    const {userId, postId} = await params;

  return (
    <div>
        PostId {postId}
        UserId {userId} 
    </div>
  )
}

export default DynamicPostIdPage