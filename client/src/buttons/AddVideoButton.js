import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, CloseButton} from 'react-bootstrap';
import './AddVideoButton.css';

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
    }
    
    const handleSubmit = () => {
        onFormSubmit(videoData);
        closeModal();
    }

    return (
        <>
            <button type="button" className="add_button" onClick={openModal}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Video
                </button>
            <Modal show = {showModal}>
                <Modal.Header>
                    <Modal.Title>Put Title and URL</Modal.Title>
                    <CloseButton className='btn-close' aria-label="Close" onClick={closeModal}/>
                </Modal.Header>
                <Modal.Body>
                    <h2>Title</h2>
                    <input name='title' style={{width: '100%', padding: '0.5rem'}} onChange={handleChange}/>
                    <h2>URL</h2>
                    <input name='url' style={{width: '100%', padding: '0.5rem'}} onChange={handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className='add_submit_btn' onClick={handleSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add Video
                        </button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
  
  export default AddVideoButton;