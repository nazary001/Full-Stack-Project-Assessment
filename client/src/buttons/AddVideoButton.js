import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, CloseButton} from 'react-bootstrap';
import './AddVideoButton.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddVideoButton({onFormSubmit}) {
    const [showModal, setShowModal] = useState(false);
    const [videoData, setVideoData] = useState({});
    
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setVideoData(prevState => ({...prevState, [name]: value.slice(0, 43)}));
        console.log(videoData)
    }
    
    const handleSubmit = () => {
        if(!videoData.title){
            alert('Empty Title');
            return;
        }
        else if(!videoData.url){
            alert('Empty URL');
            return;
        }
        else if(!videoData.url.includes('www.youtube.com/watch?')){
            alert('Invalid URL');
            return;
        }
        const date = new Date().toLocaleDateString("fr-CA");
        videoData.date = date;
        onFormSubmit(videoData);
        closeModal();
    }

    return (
        <>
        <Button variant="contained" className='add_video_btn' color="success" onClick={openModal}>Add Video</Button>
            <Modal show = {showModal}>
                <Modal.Header>
                    <Modal.Title>Put Title and URL</Modal.Title>
                    <CloseButton className='btn-close' aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Body>
                    <div className='inputs_group'>
                    <TextField required name='title' type='text' label="TITLE" onChange={handleChange}/>
                    <TextField required name='url' type='url' label="URL" onChange={handleChange}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" color="success" className='add_submit_btn' onClick={handleSubmit}>Add Video</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
  
  export default AddVideoButton;