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
  res.status(200).send(videos);   
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