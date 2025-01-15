import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { projectmanagement } from "../../App";
import { useNavigate } from "react-router-dom";
import "./add.css";

const Add = () => {
  const { product, setproduct } = useContext(projectmanagement);
  const addform = useNavigate();
  const [value, setvalue] = useState({
    title: "",
    description: "",
    category: "",
    shippingInformation: "",
    returnPolicy: "",
    warrantyInformation: "",
    stock: "",
    rating: "",
    price: "",
  });
  const viewadd = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const submit = (i) => {
    i.preventDefault();
    setproduct([...product, value]);
    addform("/home");
  };

  return (
    <div className="adddetails">
      <div>
        <h2 className="text-center mb-3 addhead ">Add Form</h2>
      </div>
      <Form className="text-center w-50 m-auto addform" onSubmit={submit}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>Tittle:</Form.Label>
          <Form.Control type="text" placeholder="Enter Tittle" name="title" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>ShippingInformation:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shippinginformation"
            name="shippingInformation"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>ReturnPolicy:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter returnpolicy"
            name="returnPolicy"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>warrantyInformation:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty"
            name="warrantyInformation"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>stock:</Form.Label>
          <Form.Control type="number" placeholder="Enter stock" name="stock" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter rating"
            name="rating"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={viewadd}
        >
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" placeholder="Enter price" name="price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
