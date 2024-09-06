import React, { useState } from 'react';
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!name || !phone || !location) {
      alert('Fill the form completely!!');
    } else {
      alert('Booking Successfully completed!!!');
      setName('');
      setPhone('');
      setLocation('');
      handleClose();
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a style={{color:'darkgreen' , fontFamily:' "Mingzat", sans-serif', fontStyle:'italic'}} className=" navbar-brand fw-bolder" href="#">Dental <br />🦷 Solutions</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link" href="#">Contact Us</a>
            <Button variant="primary" onClick={handleShow}>
     Booking
      </Button>
          </div>
        </div>
      </div>
    </nav>

      {/* Modal for Booking */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Your Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingName" label="Enter Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingLocation" label="Enter Location" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
