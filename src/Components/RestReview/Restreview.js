import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import { Card } from 'react-bootstrap';
import Collapse from 'react-bootstrap';

function Restreview({rw}) {
  console.log(rw);
  const [open, setOpen] = useState(false);
  return (
    <div> <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-fade-text"
    aria-expanded={open}
  >
    Reviexws
  </Button>
  <Fade in={open}>
    <div id="example-fade-text">
      <Card body style={{minHeight:'400px'}}>
    {
      rw?.map((item)=>(
        <div>
        <p>{item.name}</p>
        <p>{item.date}</p>
        <p>{item.rating}</p>
        <p>{item.comments}</p>


        </div>
      ))
    }
    </Card>
    </div>
  </Fade></div>
  )
}

export default Restreview