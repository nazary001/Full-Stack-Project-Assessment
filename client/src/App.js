import React, {useEffect, useState} from "react";
import "./App.css";
import Video from "./Video";
import AddVideoButton from "./buttons/AddVideoButton";
import SortSelector from "./SortSelector";
import { deleteVideo, getVideos } from "./services/API";
import axios from "axios";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
    .then(data => setVideos(data))
  }, []);

  const addVideo = (data) => {
    const newVideo = { ...data};
    setVideos(prevState => [...prevState, newVideo]);
  };

  const deleteVideoFunc = (id) => {
    deleteVideo(id)
    .then(data => {
      setVideos(prevState => prevState.filter(video => video.id !== data[0].id));
    });
  }

  const handleSortChange = (sortMethod) => {
    axios.get('http://localhost:5000/', {params: {order: sortMethod}})
    .then(data => setVideos(data.data))
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
          <Video video={video} key={video.id} deleteVideo={deleteVideoFunc}/>
        ))}
      </div>
    </div>
  );
}

export default App;
