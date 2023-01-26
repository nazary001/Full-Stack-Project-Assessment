import React, {useEffect} from "react";
import "./App.css";
import Video from "./Video";
import AddVideoButton from "./buttons/AddVideoButton";
import SortSelector from "./SortSelector";
import { useDispatch, useSelector } from 'react-redux';
import { deleteVideosThunk, getVideosThunk } from "./redux/operations/videosThunk";
import { selectVideos } from "./redux/videos/selectors";

function App() {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);

  useEffect(() => {
    dispatch(getVideosThunk());
  }, [dispatch]);

  const deleteVideo = (id) => {
    dispatch(deleteVideosThunk(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <div className="sort_and_addbtn_div">
        <AddVideoButton/>
        <SortSelector/>
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
