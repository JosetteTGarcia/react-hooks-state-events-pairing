import React from "react"; 
import Comment from "./Comment";

function CommentList({comments, showComments}){

  let commentslist = comments.map((comment) => (
    <Comment
    key={comment.user}
    user={comment.user}
    commentText={comment.comment}
    />
  ))

  



return (
  <div className={showComments ? "showing" : "hidden"}>
    {showComments ? commentslist : null}
  </div>
)
}

export default CommentList;

// {
//   id: 1,
//   user: "duanebot",
//   comment: "first!",
// },