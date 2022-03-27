
import React, {useState} from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo";
import Votes from "./Votes";
import CommentList from "./CommentsList";



function App() {
  console.log("Here's your data:", video);
  const videoDetails = video
  const comments = videoDetails.comments
  const [showComments, setShowComments] = useState(true)

  function handleComments(){
    setShowComments((showComments) => !showComments)

  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo 
      videoDetails={videoDetails}
      showComments={showComments}
      handleComments={handleComments}
      />
      <CommentList 
      comments={comments}
      showComments={showComments}
      />
    </div>
  );
}

export default App;
