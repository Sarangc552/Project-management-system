import React, { useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { projectmanagement } from "../../App";
import "./edit.css";
import { useNavigate } from "react-router-dom";

const Editform = () => {
  const { edit, setedit, product, setproduct } = useContext(projectmanagement);
  const editnav = useNavigate();

  const store = (e) => {
    setedit({ ...edit, [e.target.name]: e.target.value });
  };
  const handlesubmit = (i) => {
    i.preventDefault();
    setproduct((prevProducts) =>
      prevProducts.map((p) => (p.id === edit.id ? { ...p, ...edit } : p))
    );
    console.log("edited products:", edit);
    editnav("/home");
  };

  return (
    <div className="editproductdetails">
      <div>
        <h2 className="text-center m-4 edithead">Edit Product Details</h2>
      </div>
      <Form className="w-50 m-auto edform" onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Tittle:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            defaultValue={edit?.title}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder=""
            defaultValue={edit?.description}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Category:</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder=""
            defaultValue={edit?.category}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">shippingInformation:</Form.Label>
          <Form.Control
            type="text"
            name="shippingInformation"
            placeholder=""
            defaultValue={edit?.shippingInformation}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">ReturnPolicy:</Form.Label>
          <Form.Control
            type="text"
            name="returnpolicy"
            placeholder=""
            defaultValue={edit?.returnPolicy}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">warrantyInformation:</Form.Label>
          <Form.Control
            type="text"
            name="warrantyInformation"
            placeholder=""
            defaultValue={edit?.warrantyInformation}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">stock:</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            placeholder=""
            defaultValue={edit?.stock}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Rating:</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            placeholder=""
            defaultValue={edit?.rating}
            onChange={store}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Price:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder=""
            defaultValue={edit?.price}
            onChange={store}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="success" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Editform;
