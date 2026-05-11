import React from 'react'

const DynamicCommentIdPage = async ({params}) => {
    const {userId, postId, commentId} = await params;

  return (
    <div>
        PostId: {postId}
        UserId: {userId} 
        CommentId: {commentId}
    </div>
  )
}

export default DynamicCommentIdPage