import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);
  // All user datas geting
  const getDetails = async () => {
    let res = await axios.get(API_URL);
    try {
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      toast.error("Server not resopned");
    }
  };

  // handleDelete users
  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete the user?")) {
      try {
        let res = await axios.delete(`${API_URL}/${id}`);
        if (res.status === 200) {
          toast.success("Blog Deleted Successfully!");
          getDetails();
        }
      } catch (error) {
        toast.error("Internal Server Error");
      }
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="Table-container">
        <Table striped bordered hover>
            <thead>
                <tr className="text-center">
                    <th>#</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {users.map((e) => {
                return (
                <tr key={e.id} className="text-center">
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>
                        <Button onClick={()=> navigate(`/edit/${e.id}`)} variant="info">Edit</Button>{" "}
                        &nbsp;
                        <Button onClick={()=> handleDelete(e.id)} variant="danger">Delete</Button>
                    </td>
                </tr>);
                })}
            </tbody>
        </Table>
    </div>
  );
};

export default Dashboard;
