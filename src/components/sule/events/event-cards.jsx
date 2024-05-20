"use client";
import Image from "next/image";
import React from "react";
import { Button , Card, Container} from "react-bootstrap";
import "./event-card.scss";

const EventCard = (props) => {
    const { image, title, text, location } = props;
  return (
    <Container className="event-container" >
      <Card className="event-card" >      
      <Card.Body>
      <div className="event-div">
      <Image
					src={`/images/${image}`}
					width={300}
					height={200}
					alt="invitation photo"
					className="event-image"
				/>
      </div>      
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" as="a" href={location}>See Location</Button>
      </Card.Body>
      </Card>
    </Container>
    
  );
}

export default EventCard;