import React from 'react';
import Button from '@mui/material/Button';

function DeleteButton({deleteVideo}) {

  return (
    <Button variant="outlined" color="error" onClick={deleteVideo}>Delete</Button>
  );
}

export default DeleteButton;