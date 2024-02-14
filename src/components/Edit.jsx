import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../App';

const Edit = () => {
  let navigate = useNavigate()
  let params = useParams()
  let id = params.id

  
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


  const handleEdit = async ()=> {
    try {
      let data = {name, username, email, address:{street, suite, city, zipcode},phone, website, company:{company, catchPhrase, bs}}
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status === 200){
        toast.success("Blog Edited Successfully")
        navigate('/')
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }   


  }

  const getDetails = async ()=>{
    
    let res = await axios.get(`${API_URL}/${id}`)
    try {
      if(res.status === 200){
        setName(res.data.name)
        setUserName(res.data.username)
        setEmail(res.data.email)
        setStreet(res.data.address.street)
        setSuite(res.data.address.suite)
        setCity(res.data.address.city)
        setZipcode(res.data.address.zipcode)
        setPhone(res.data.phone)
        setWebsite(res.data.website)
        setCompany(res.data.company.company || res.data.company.name)
        setCatchPhrase(res.data.company.catchPhrase)
        setBs(res.data.company.bs)
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
     getDetails()
  },[])

  return (
    <>
     <div className="edit-form">
        <div className="Title">
            <h1 className='text-center'>Edit User
                <FaUserEdit style={{ paddingBottom: "5px" , fontSize: "60px" , filter: "drop-shadow(1px 1px 20px blue)"
                    }} />
            </h1>
        </div>
        <Form>
            <div className="formGroup">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>User Name :</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter your user
                        name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Phone :</Form.Label>
                    <Form.Control type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="123-456-7890" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Web site :</Form.Label>
                    <Form.Control type="text" value={website} onChange={(e)=>{setWebsite(e.target.value)}}
                        placeholder="https://example.com/users/"
                        />
                </Form.Group>
            </div>
            <div className="formGroup">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Adress :</Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Street</InputGroup.Text>
                        <Form.Control placeholder="" value={street} onChange={(e)=>{setStreet(e.target.value)}} aria-label="adress"
                            aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Suite</InputGroup.Text>
                        <Form.Control placeholder="" value={suite} onChange={(e)=>{setSuite(e.target.value)}} aria-label="adress"
                            aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                        <Form.Control placeholder="" value={city} onChange={(e)=>{setCity(e.target.value)}} aria-label="adress"
                            aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
                        <Form.Control placeholder="00000-0000" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}}
                            aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Company :</Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control placeholder="company name" value={company} onChange={(e)=>{setCompany(e.target.value)}}
                            aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            Catch Phrase
                        </InputGroup.Text>
                        <Form.Control placeholder="catch phrase name" value={catchPhrase} onChange={(e)=>{setCatchPhrase(e.target.value)}}
                            aria-label="adress"
                            aria-describedby="basic-addon1" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Business</InputGroup.Text>
                        <Form.Control placeholder="business name" value={bs} onChange={(e)=>{setBs(e.target.value)}}
                            aria-label="adress" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Form.Group>
            </div>
            <div className="buttonGroup">
                <Button onClick={()=> handleEdit()} variant="primary">
                    Submit
                </Button>
                &nbsp; &nbsp;
                <Button onClick={()=> navigate("/dashboard")} variant="warning">
                    Cancel
                </Button>
            </div>
        </Form>
    </div>
    </>
   
  )
}

export default Edit