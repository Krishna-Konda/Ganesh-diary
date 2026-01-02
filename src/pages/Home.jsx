import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [bhav, setBhav] = useState(null);

  useEffect(() => {
    const savedBhav = localStorage.getItem("milkBhav");
    if (savedBhav) setBhav(savedBhav);
  }, []);

  const products = [
    { name: "Fresh Milk", image: "./images/milk.jpg", price: 50 },
    { name: "Breads", image: "./images/bread.png", price: 65 },
    {
      name: "All Biscuits ",
      image: "./images/Biscuits.png",
      price: "10 per piece",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-center bg-light py-5">
        <Container>
          <h1 className="fw-bold text-primary mb-3">
            Welcome to Shri Ganesh Diary
          </h1>
          <p className="lead text-secondary">
            Pure, Fresh & Wholesome Dairy Products for Every Home
          </p>
          <Button variant="primary" href="/products">
            Explore Products
          </Button>
        </Container>
      </section>
      {/* Today’s Bhav Section */}
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="text-center shadow-sm border-primary">
              <Card.Body>
                <Card.Title className="text-primary fs-4">
                  📅 Today's Milk Bhav
                </Card.Title>
                {bhav ? (
                  <Card.Text className="fs-5 fw-bold text-success">
                    {" "}
                    ₹{bhav} / Liter
                  </Card.Text>
                ) : (
                  <Card.Text className="text-muted">
                    Bhav not set yet. Please check again later.
                  </Card.Text>
                )}
                <Button variant="outline-primary" href="/calculator">
                  Check ML For Your Amount
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Product Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4 text-primary">Our Products</h2>
        <Row xs={1} md={3} className="g-4">
          {products.map((p, i) => (
            <Col key={i}>
              <ProductCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
