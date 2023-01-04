import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function DeleteButton({deleteVideo}) {
  return (
    <Button type="button" className="btn btn-danger" onClick={deleteVideo}>Delete</Button>
  );
}

export default DeleteButton;