import React, {useState} from "react";
import "./App.css";
import Video from "./Video";
import dataVideos from "./exampleresponse.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddVideoButton from "./buttons/AddVideoButton";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [videos, setVideos] = useState(dataVideos);

  const addVideo = (data) => {
    const newVideo = { ...data, id: uuidv4() };
    setVideos(prevState => [...prevState, newVideo]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddVideoButton onFormSubmit={addVideo}/>
      <body>
        {videos.map((video, key) => (
          <Video video={video} key={key}/>
        ))}
      </body>
    </div>
  );
}

export default App;
