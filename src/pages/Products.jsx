import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [milkPrice, setMilkPrice] = useState(null);

  useEffect(() => {
    const savedBhav = localStorage.getItem("milkBhav");
    if (savedBhav) setMilkPrice(savedBhav);
  }, []);

  const dairyProducts = [
    {
      name: "Pure Buffalo Milk",
      image: "./images/milk.jpg",
      price: milkPrice ? `₹${milkPrice}/Liter` : "--",
    },
    {
      name: "Amul Cheese Cube",
      image: "./images/amul-cheese.png",
      price: "₹17/per piece ",
    },
  ];

  const otherProducts = [
    { name: "Britannia Biscuits", image: "./images/Biscuits.png" },
    { name: "English Oven Breads", image: "./images/bread.png" },
    { name: "Rush Toast", image: "./images/Parle_Rusk.jpg" },
    { name: "Anmol Khari", image: "./images/anmol_khari.png" },
    { name: "Makkhan Butter", image: "./images/makkhan.png" },
    { name: "Jeera Butter", image: "./images/Jeera_Butter.png" },
    { name: "Tea Butter", image: "./images/Tea_Butter.png" },
    { name: "Maggie", image: "./images/maggie.png" },
  ];

  return (
    <Container className="py-5">
      {/* Dairy Products Section */}
      <h2 className="text-primary text-center mb-4">🥛 Dairy Products</h2>

      {milkPrice ? (
        <p className="text-center text-success fw-semibold">
          Today's Buffalo Milk Bhav: ₹{milkPrice} / Liter
        </p>
      ) : (
        <p className="text-center text-danger fw-semibold">
          ⚠️ Bhav not set yet — please ask admin to update it.
        </p>
      )}

      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
        {dairyProducts.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-1">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-success fw-semibold">
                  {item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Other Essentials Section */}
      <h2 className="text-primary text-center mb-4">🛒 Other Essentials</h2>
      <Row xs={2} sm={3} md={4} lg={5} className="g-4">
        {otherProducts.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-1">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: "130px", objectFit: "contain" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
