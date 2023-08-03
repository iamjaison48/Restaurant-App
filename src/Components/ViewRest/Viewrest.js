import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import  Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { ListGroup } from "react-bootstrap";

import './Viewrest.css'
import Restop from "../RestOp/Restop";
import Restreview from "../RestReview/Restreview";
function Viewrest() {
  //to hold particular restaurant details
  const [RestDetails, setRestDetails] = useState([]);

  // const pathParameter = useParams()
  // console.log(pathParameter.id);

  //destructuring
  const { id } = useParams();
  console.log(id);

  //api call for fetch particular restaurant details

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:3001/restaurants/${id}`);
    console.log(data);
    setRestDetails(data);
  };
  console.log(RestDetails);

  //function call

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row>
        <Col sm={12} md={3}>{/*images*/}
        <Image className="rounded border border-2  shadow m-3" src={RestDetails.photograph} fluid/>
        </Col>
        <Col>{/*content*/}
        
        <h1 className="text-center m-3">{RestDetails.name}</h1>

        <div className="container w-50 mb-5">
        <ListGroup className="shadow">
      <ListGroup.Item>Neighborhood :{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type : {RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address : {RestDetails.address} </ListGroup.Item>
      <ListGroup.Item> <Restop op = {RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview rw={RestDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
      </Row>
    </>
  );
}

export default Viewrest;
