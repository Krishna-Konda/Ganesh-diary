import { Card } from "react-bootstrap";

export default function ProductCard({ name, image, price }) {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ₹{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
