import { Card, Button } from "react-bootstrap";

function Product({ name, price, img, like, quantity, description, buy,  nbTickets, nbParticipants, toggleLike }) {
const placesRestantes = nbTickets - nbParticipants;
const isSoldOut = placesRestantes === 0;

return (
    <Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={`src/assets/${img}`}  />
<Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{quantity}</Card.Text>
        <Card.Text>Prix : {price}€</Card.Text>
        <Card.Text>
{isSoldOut ? <span style={{ color: "red" }}>Sold Out</span> : placesRestantes}
Places disponibles :{" "}
        </Card.Text>

       
        <Card.Text>
          <span>{like}</span>
        </Card.Text>
 <Button variant="success" onClick={() => toggleLike(1)} disabled={like === 1}>
           Like
        </Button>{" "}

        <Button variant="danger" onClick={() => toggleLike(0)} disabled={like === 0}>
           Dislike
        </Button>

        
</Card.Body>
    </Card>
);
}

export default Product;