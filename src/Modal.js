import React from "react";
import { Button, Modal } from 'react-bootstrap';

function DemoModal(props) {
  let handleClose = () => {
    props.fn();
  }

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What's new today!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>hi, select an event!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DemoModal;