import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import milk from "./assets";

export default function Home() {
  const products = [
    { name: "Fresh Milk", image: "milk", price: 50 },
    { name: "Pure Ghee", image: "/ghee.jpg", price: 600 },
    { name: "Curd", image: "/curd.jpg", price: 40 },
  ];

  return (
    <>
      <section className="text-center bg-light py-5">
        <Container>
          <h1 className="fw-bold text-primary mb-3">Welcome to Ganesh Diary</h1>
          <p className="lead text-secondary">
            Pure, Fresh & Wholesome Dairy Products for Every Home
          </p>
          <Button variant="primary" href="/products">
            Explore Products
          </Button>
        </Container>
      </section>

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
