import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = ({name, username, email, phone, website, company, business, navigate, id}) => {
  return (
    // Shows card on home page
    <>
      <Card style={{ width: '18rem' }} onClick={()=>navigate(`/show-more/${id}`)} className='UserBox'>
          <div className="img-box">
          <Card.Img variant="top" className='cartImage '
               src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
          </div>
           <Card.Body>
               <Card.Title className='text-center'>{name}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted text-center">{username}</Card.Subtitle>
           </Card.Body>
           <ListGroup className="list-group-flush">
               <ListGroup.Item><b>Email :</b> {email}</ListGroup.Item>
               <ListGroup.Item><b>Phone :</b> {phone}</ListGroup.Item>
               {/* <ListGroup.Item><b>website : </b> <a style={{textDecoration: "none" }} href={website}>{website}</a>
               </ListGroup.Item>
               <ListGroup.Item><b>Campany : </b>{company} </ListGroup.Item>
               <ListGroup.Item><b>Business : </b>{business}</ListGroup.Item> */}
           </ListGroup>
       </Card>
    </>
  )
}

export default UserCard

