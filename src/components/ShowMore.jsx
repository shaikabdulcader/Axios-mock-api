import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../App";

const ShowMore = () => {
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

// Get user data
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
    <div className="container-fluid">
        <div className="container">
            <div className="showMoreContainer">
                <div className="showMoreCard">
                    <div className="More-img-box">
                        <img className="cart-Image" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
                    </div>
                    <div className="text-content">
                        <div className="textContent-right">
                            <p><b className="bold-Text">Name : </b>{name}</p>
                            <p><b className="bold-Text">User Name : </b>{username} </p>
                            <p><b className="bold-Text">Email : </b>{email} </p>
                            <p><b className="bold-Text">Phone : </b>{phone} </p>
                        </div>
                        <div className="textContent-left">
                            <p style={{textDecoration: "underline" , textAlign: "center" }}><b>Address : </b></p>
                            <p><b className="bold-Text">Street : </b>{street} </p>
                            <p><b className="bold-Text">Suite : </b>{suite} </p>
                            <p><b className="bold-Text">City : </b>{city} </p>
                            <p><b className="bold-Text">Zip Code : </b>{zipcode} </p>
                        </div>
                        <div className="textContent-right">
                            <p style={{textDecoration: "underline" , textAlign: "center" }}><b>Company Detail : </b></p>
                            <p><b className="bold-Text">Company Name : </b>{company}</p>
                            <p><b className="bold-Text">Catch Phrase : </b>{catchPhrase} </p>
                            <p><b className="bold-Text">Business : </b>{bs} </p>
                            <p><b className="bold-Text">Website : </b><a style={{textDecoration: "none" }} href="">{website}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ShowMore;
