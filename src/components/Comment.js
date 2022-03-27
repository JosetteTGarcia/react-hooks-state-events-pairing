import React from "react"; 

function Comment({user, commentText}){
return (
  <div className="comment">
      <div className="user"> <b> {user} </b></div>
      <div className="commentText">{commentText}</div>
      <button className="delete">
        Delete Comment
        </button>
    </div>
)
}

export default Comment;