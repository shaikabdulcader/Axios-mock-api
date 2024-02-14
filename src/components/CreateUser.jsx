import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { API_URL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = () => {
  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [street, setStreet] = useState("");
  let [suite, setSuite] = useState("");
  let [city, setCity] = useState("");
  let [zipcode, setZipcode] = useState("");
  let [phone, setPhone] = useState("");
  let [website, setWebsite] = useState("");
  let [company, setCompany] = useState("");
  let [catchPhrase, setCatchPhrase] = useState("");
  let [bs, setBs] = useState("");

  const handleAddUser = async () => {
    try {
      let data = {name, username, email, address:{street, suite, city, zipcode},phone, website, company:{company, catchPhrase, bs}}
      let res = await axios.post(API_URL,data);
      if (res.status === 201) {
        toast.success("User Added Successfully !")
        navigate("/");
      }
    } catch (error) {
      toast.error("Server is not respond");
    }
    
  };

  return (
    <>
     <div className="edit-form">
        <div className="Title">
            <h1 className="text-center">
                Add User{" "}
                <FaUserPlus style={{ paddingBottom: "5px" , fontSize: "60px" , filter: "drop-shadow(1px 1px 20px aqua)"}} />
            </h1>
        </div>
        <Form>
            <div className="formGroup">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>User Name :</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter your user name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Phone :</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder="123-456-7890" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Web site :</Form.Label>
                    <Form.Control type="text" onChange={(e)=>{setWebsite(e.target.value)}}
                        placeholder="https://example.com/users/"
                        />
                </Form.Group>
            </div>
            <div className="formGroup">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Adress :</Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Street</InputGroup.Text>
                        <Form.Control placeholder="" onChange={(e)=>{setStreet(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Suite</InputGroup.Text>
                        <Form.Control placeholder="" onChange={(e)=>{setSuite(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                        <Form.Control placeholder="" onChange={(e)=>{setCity(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
                        <Form.Control placeholder="00000-0000" onChange={(e)=>{setZipcode(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Company :</Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control placeholder="company name" onChange={(e)=>{setCompany(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            Catch Phrase
                        </InputGroup.Text>
                        <Form.Control placeholder="catch phrase name" onChange={(e)=>{setCatchPhrase(e.target.value)}} aria-label="adress"
                            aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Business</InputGroup.Text>
                        <Form.Control placeholder="business name" onChange={(e)=>{setBs(e.target.value)}} aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form.Group>
            </div>
            <div className="buttonGroup">
                <Button onClick={()=> handleAddUser()} variant="primary">
                    Submit
                </Button>
                &nbsp; &nbsp;
                <Button onClick={()=> navigate("/")} variant="warning">
                    Cancel
                </Button>
            </div>
        </Form>
    </div>
    </>
  );
};

export default CreateUser;
