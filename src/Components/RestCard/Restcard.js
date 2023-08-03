import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Restcard.css";
import { Link } from "react-router-dom";

function Restcard({ restaurants }) {
  console.log(restaurants);
  return (
    <>
      <Link to={`/view/${restaurants.id}`}>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={restaurants.photograph} />
          <Card.Body>
            <Card.Title>{restaurants.name}</Card.Title>
            <Card.Text>
              Address: {restaurants.address} <br />
              {restaurants.cuisine_type} <br />
              {restaurants.neighborhood}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Restcard;
