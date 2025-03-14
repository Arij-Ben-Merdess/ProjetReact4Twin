import { useState, useEffect } from "react";
import Event from "./Event";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getallEvents } from "../services/api";

function Events() {
const [events, setEvents] = useState([]);
const [message, setMessage] = useState("");

useEffect(() => {
    const fetchEvents = async () => {
        try {
          const response = await getallEvents(); 
          setEvents(response.data); 
        } catch (error) {
          console.error("Erreur lors du chargement des événements :", error);
        }
      };
  
      fetchEvents(); 
}, []);

  // Fonction pour gérer l'achat d'un billet
const buy = (eventIndex) => {
    setEvents((prevEvents) =>
prevEvents.map((event, index) =>
        index === eventIndex && event.nbTickets > event.nbParticipants
? { ...event, nbParticipants: event.nbParticipants + 1 }
: event
    )
    );

    setMessage("You have booked an event");

    setTimeout(() => {
setMessage("");
    }, 2000);
};

  // Fonction pour gérer le Like/Dislike
const toggleLike = (eventIndex) => {
    setEvents((prevEvents) =>
prevEvents.map((event, index) =>
        index === eventIndex ? { ...event, like: !event.like } : event
)
    );
};

return (
    <Container>
<h2 className="my-4 text-center">Liste des Événements</h2>

{message && <Alert variant="success">{message}</Alert>}

<Row>
        {events.map((event, index) => (
<Col key={index} md={4}>
            <Event
            
name=
      {event.name}
  
img={event.img}
price={event.price}
nbTickets={event.nbTickets}
nbParticipants={event.nbParticipants}
like={event.like}
buy={() => buy(index)}
toggleLike={() => toggleLike(index)}
description={event.description}
            />
</Col>
        ))}
        </Row>
    </Container>
);
}

export default Events;