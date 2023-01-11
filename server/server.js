const videosInitialData = require('./data/exampleresponse.json');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const express = require('express');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const videos = [...videosInitialData];

app.get('/', (req, res) => {
  if(req.query.order === 'asc'){
    videos.sort((a, b) => a.rating - b.rating);
    res.status(200).send(videos);
  }
  else{
    videos.sort((a, b) => b.rating - a.rating);
    res.status(200).send(videos);
  }   
});

app.post('/', (req, res) => {
  const video = {...req.headers};
  Object.assign(video, {
    id: uuidv4()
  });
  res.status(200).json(video)
});

app.get('/:id', (req, res) => {
  const requestedVideo = videos.find(video => video.id === +req.params.id);
  if(!requestedVideo){
    res.status(404).send('Could not find video with this ID');
    return;
  };
  res.status(200).send(requestedVideo);
});

app.delete('/:id', (req, res) => {
  const videoIdx = videos.findIndex(video => video.id === +req.params.id);
  videos.splice(videoIdx, 1);
  res.status(200).send(videos);
});

app.get('/', (req, res) => {
  console.log(req.query)
  res.status(200)
})

app.get('/?order=desc', (req, res) => {
  const sortedVideos = videos.sort((a, b) => b.rating - a.rating)
  res.status(200).send(sortedVideos);
})