import React from 'react'

function DisLikeButton({vote}) {
  return (
    <button onClick={vote}>
      <img style = {{width: '1.8rem'}} src ='https://cdn-icons-png.flaticon.com/512/880/880613.png' alt ='dislike'/>
    </button>
  );
}

export default DisLikeButton;