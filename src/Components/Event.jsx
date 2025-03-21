import { Card, Button } from "react-bootstrap";

function Event({ name, description, img, price, nbTickets, nbParticipants, buy, like, toggleLike }) {
const placesRestantes = nbTickets - nbParticipants;
const isSoldOut = placesRestantes === 0;

return (
    <Card style={{ width: "18rem", margin:100}}>
<Card.Img variant="top" src={`images/${img}`}  />
<Card.Body>
        
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Prix : {price}€</Card.Text>
        <Card.Text>
{isSoldOut ? <span style={{ color: "red" }}>Sold Out</span> : placesRestantes}
Places disponibles :{" "}
        </Card.Text>

        <Button variant="primary" onClick={buy} disabled={isSoldOut}>
{isSoldOut ? "Sold Out" : "Book an event"}
        </Button>{" "}

        <Button variant={like ? "danger" : "success"} onClick={toggleLike}>
{like ? "Dislike" : "Like"}
        </Button>
</Card.Body>
    </Card>
);
}

export default Event;