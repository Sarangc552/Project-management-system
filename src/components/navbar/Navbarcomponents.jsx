import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCart3 } from "react-icons/bs";

const Navbarcomponents = () => {
  const [alert, setalert] = useState(false);
  const backPage = useNavigate();
  const logoutt = () => {
    setalert(true);
  };
  const handleyes = () => {
    backPage("/login");
  };
  const handleno = () => {
    setalert(false);
  };
  return (
    <div>
      <div>
        <Modal show={alert} onHide={handleno} className="logoutmodal">
          <Modal.Header closeButton>
            <Modal.Title>Log Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>Log out of your account?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleyes}>
              Log out
            </Button>
            <Button variant="primary" onClick={handleno}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Navbar className="nav">
        <Container>
          <BsCart3 className="iconnavbar"/>
          <Navbar.Text className="navtittle text-light">
            PRODUCT LIST
          </Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Logout
              <RiLogoutCircleRLine className="logout" onClick={logoutt} />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponents;
