import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { GrView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { projectmanagement } from "../App";
import Navbarcomponents from "./navbar/Navbarcomponents";  
import Search from "./searchbar/Search";

const Home = () => {
  const { product, setproduct, setedit } = useContext(projectmanagement);
  const editform = useNavigate();

  const [view, setview] = useState([]);
  const [modal, setmodal] = useState(false);
  const [deletemodal, setdeletemodal] = useState(false);
  const [deleteid, setdeleteid] = useState("");

  const viewid = (i) => {
    setview(i);
    setmodal(true);
  };
  const handleClose = () => {
    setmodal(false);
  };
  const viewedit = (e) => {
    setedit(e);
    editform("/edit");
  };
  const DeleteRow = (id) => {
    setdeleteid(id);
    setdeletemodal(true);
  };
  const handleDelete = () => {
    const updatedData = product.filter((test) => test.id !== deleteid);
    setproduct(updatedData);
    setdeletemodal(false);
  };
  const handleCancel = () => {
    setdeletemodal(false);
  };

  return (
    <div>
      <div>
        <Modal show={deletemodal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal show={modal} onHide={handleClose} className="modall">
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body className="modalbody">
            <div className="modalimg">
              {view && view.images && (
                <div>
                  <img
                    src={view?.images[0]}
                    alt=""
                    width={"200px"}
                    height={"250px"}
                  />
                </div>
              )}
            </div>
            <div className="modalcontents">
              <h2>{view?.title}</h2>
              <h6 className="mb-3">{view?.description}</h6>
              <h5 className="">warranty:{view?.warrantyInformation}</h5>
              <h5 className="">Stock:{view?.stock}</h5>
              <h3 className="">${view.price}</h3>{" "}
              <Rating
                name="size-medium"
                defaultValue={view.rating}
                className="mt-2"
              />
            </div>
          </Modal.Body>
          <div className="text-center">
            <Button
              variant="warning"
              onClick={handleClose}
              className="modalbtn text-light"
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
      <div>
        <Navbarcomponents />
      </div>
      <div>
        <Search />
      </div>
      <div className="tabledata">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Index NO:</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Shipping Information</th>
              <th>Return Policy</th>
              <th>Warranty Information</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Setting</th>
            </tr>
          </thead>

          <tbody>
            {product.map((test, index) => (
              <tr key={test.id || index}>
                <td>{index + 1}</td>
                <td>{test.title}</td>
                <td>{test.description}</td>
                <td>{test.category}</td>
                <td>{test.shippingInformation}</td>
                <td>{test.returnPolicy}</td>
                <td>{test.warrantyInformation}</td>
                <td>{test.stock}</td>
                <td>{test.rating}</td>
                <td>{test.price}</td>
                <td>
                  <div className="">
                    <GrView className="viewid" onClick={() => viewid(test)} />

                    <MdDeleteForever
                      className="deleteid"
                      onClick={() => DeleteRow(test.id)}
                    />

                    <MdEdit className="editid" onClick={() => viewedit(test)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button className="additem">
        <Link to="/add" style={{ textDecoration: "none", color: "whitesmoke" }}>
          Add Item
        </Link>
      </button>
    </div>
  );
};

export default Home;
