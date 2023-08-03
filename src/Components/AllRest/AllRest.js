import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Restcard from "../RestCard/Restcard";
function AllRest() {
  //all items is state to hold all the array items
  const [allItems, setAllItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/restaurants");
    console.log(response.data);
    setAllItems(response.data);
  };
  console.log(allItems);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row>
        {allItems.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Restcard restaurants={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllRest;
