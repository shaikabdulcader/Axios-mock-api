import React, {useState, useEffect} from 'react'
import UserCard from './common/UserCard'
import { API_URL } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate()
  let [details, setDetails] = useState([])
  const getUserData = async ()=>{
    let res = await axios(API_URL)
    try{
      if(res.status === 200){
        setDetails(res.data)
       }
    }catch (error){
      toast.error()
    }
  }
  
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div className="homeWrapper">
      {details.map((e)=>{
        return <UserCard name={e.name} username={e.username} email={e.email} phone={e.phone} website={e.website}  company={e.company.name || e.company.company} business={e.company.bs} navigate={navigate} id={e.id}  key={e.id}/>
      })}
    </div>    
  )
}

export default Home