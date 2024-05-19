import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import events from "../../../data/events.json"
import EventCard from "./event-cards.jsx";
import "../events/event.scss";


const Event = () => {
  return (
    <Container className="eventbox-container">
    <div className="event-box">
      <Row className="col-12">
        <div className="title-box">
          <h1>Events</h1>
        </div>
      </Row>
      <Row sm={1} md={2} lg={3} className="g-2">
      {events.map((event) => (
				<Col key={event.id}>
					<EventCard {...event} />
				</Col>
			))}
		</Row>      
    </div>
    </Container>
  );
};

export default Event;
