import React from 'react'

function LikeButton({vote}) {
  return (
    <button onClick={vote}>
      <img style = {{width: '1.8rem'}} src ='https://cdn-icons-png.flaticon.com/512/739/739231.png' alt ='like'/>
    </button>
  );
}

export default LikeButton;