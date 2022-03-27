import React, {useState} from "react";
import Votes from "./Votes";

function VideoInfo({videoDetails, handleComments, showComments}){
  const title = videoDetails.title
  const views = videoDetails.views
  const dateCreated = videoDetails.createdAt
  const [upvotes, setUpvotes] = useState(videoDetails.upvotes)
  const [downvotes, setDownVotes] = useState(videoDetails.downvotes)
  

  function handleVote(event){
    if (event.target.className == "upvote"){
      setUpvotes(()=> upvotes + 1)
    } else setDownVotes(() => downvotes + 1)
  }



return(
  <div>
    <h1>{title}</h1>
    <h5>{views} Views | Uploaded {dateCreated}</h5>
    <button 
    className="upvote"
      onClick={handleVote}> 
      {upvotes} 👍 
    </button>
    <button 
      className="downvote"
      onClick={handleVote}> 
      {downvotes} 👎 
    </button> 
    <br />
    <br />
    <button 
      className={showComments ? "showing" : "hidden"}
      onClick={handleComments}>
      {showComments ? "Hide Comments" : "Show Comments"}
    </button>
    <br /> <br />
  </div>
)
}

export default VideoInfo;

// U+1F44E