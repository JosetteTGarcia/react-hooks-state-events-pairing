import React from "react"; 

function Votes(videoDetails){
  return (
    <div>
      <button> {videoDetails.upvotes} 👍 </button>
      <button> {videoDetails.downvotes} 👎 </button> 
    </div>
  )
}

export default Votes;