import React from 'react';
import './DeleteButton.css';

function DeleteButton({deleteVideo}) {
  return (
  <div>
    <button href="#"  onClick={deleteVideo} className='delete_button'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Delete
  </button>
  </div>
  );
}

export default DeleteButton;