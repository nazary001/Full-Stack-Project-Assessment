import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function DeleteButton() {
  return (
    <Button type="button" className="btn btn-danger">Delete</Button>
  );
}

export default DeleteButton;