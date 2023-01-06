import React, {useState} from "react";
import "./App.css";
import Video from "./Video";
import dataVideos from "./exampleresponse.json";
import AddVideoButton from "./buttons/AddVideoButton";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [videos, setVideos] = useState(dataVideos);

  const addRating = () => {
    return Math.round(Math.random() * 1000);
  }

  const addVideo = (data) => {
    const newVideo = { ...data, id: uuidv4(), rating: addRating()};
    setVideos(prevState => [...prevState, newVideo]);
  }

  const deleteVideo = (id) => {
    setVideos(prevState => prevState.filter(video => video.id !== id));
  }

  function sortByRating(){
    const sortedVideos = [...videos].sort((a, b) => b.rating - a.rating);
    return sortedVideos;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideoButton onFormSubmit={addVideo}/>
      <div className="main">
        {sortByRating().map((video, key) => (
          <Video video={video} key={key} deleteVideo={deleteVideo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
