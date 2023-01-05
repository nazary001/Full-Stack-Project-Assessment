import React from 'react'

function YouTubeEmbed({video}) {
 const url = video.url.replace("watch?v=", "embed/");
 console.log(url);
  return (
    <iframe
      height={"185"}
      width={"330"}
      src={url}
      alt={`video ${video.title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
    />
  );
}

export default YouTubeEmbed