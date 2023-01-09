import React, {useEffect, useState} from "react";
import "./App.css";
import Video from "./Video";
import AddVideoButton from "./buttons/AddVideoButton";
import { v4 as uuidv4 } from 'uuid';
import SortSelector from "./SortSelector";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => setVideos(data))
  }, []);

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

  const handleSortChange = (sortMethod) => {
    fetch(`http://localhost:5000/?order=${sortMethod}`)
      .then(res => res.json())
      .then(data => setVideos(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <div className="sort_and_addbtn_div">
        <AddVideoButton onFormSubmit={addVideo}/>
        <SortSelector onChange={handleSortChange}/>
      </div>
      <div className="main">
        {videos.map((video, key) => (
          <Video video={video} key={video.id} deleteVideo={deleteVideo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
