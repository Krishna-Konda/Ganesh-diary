import { useEffect, useState } from "react";
import { Container, Table, Alert, Card } from "react-bootstrap";

export default function MilkCalculator() {
  const [bhav, setBhav] = useState(null);

  // Fixed rupee and liter lists
  const rupeeValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const literValues = [
    { label: "¼ Liter (Pav Liter)", value: 0.25 },
    { label: "½ Liter", value: 0.5 },
    { label: "¾ Liter (Paun Liter)", value: 0.75 },
    { label: "1 Liter", value: 1 },
    { label: "1½ Liter", value: 1.5 },
    { label: "2 Liter", value: 2 },
    { label: "2½ Liter", value: 2.5 },
    { label: "3 Liter", value: 3 },
  ];

  useEffect(() => {
    fetch("/api/bhav")
      .then((res) => res.json())
      .then((data) => setBhav(data.bhav))
      .catch(() => console.log("Error Fetching Bhav"));
  }, []);

  // Rupee to ml
  const calculateMl = (amount) => {
    if (!bhav) return "—";
    const ml = (1000 / bhav) * amount;
    return `${ml.toFixed(0)} ml`;
  };

  // Liter to rupee
  const calculatePriceForLiters = (liters) => {
    if (!bhav) return "—";
    const price = bhav * liters;
    return `₹${price.toFixed(2)}`;
  };

  return (
    <Container className="py-5">
      <Card
        className="shadow-sm border-0 mx-auto"
        style={{ maxWidth: "650px" }}>
        <Card.Body className="text-center">
          <h2 className="text-primary mb-3">🥛 Daily Milk Rate Chart</h2>

          {bhav ? (
            <>
              <p className="text-success fw-semibold mb-4">
                Today's Bhav: ₹{bhav} / Liter
              </p>

              {/* ₹ to ML table */}
              <h5 className="text-primary mb-3">💰 Rupee to ML Conversion</h5>
              <Table striped bordered hover responsive>
                <thead className="table-primary">
                  <tr>
                    <th>Amount (₹)</th>
                    <th>Milk Quantity (ml)</th>
                  </tr>
                </thead>
                <tbody>
                  {rupeeValues.map((price, i) => (
                    <tr key={i}>
                      <td>₹{price}</td>
                      <td>{calculateMl(price)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Liter to ₹ table */}
              <h5 className="text-primary mt-5 mb-3">
                🪣 Liter to Price Conversion
              </h5>
              <Table striped bordered hover responsive>
                <thead className="table-light">
                  <tr>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {literValues.map((item, i) => (
                    <tr key={i}>
                      <td>{item.label}</td>
                      <td>{calculatePriceForLiters(item.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <p className="text-muted small mt-3">
                * All values update automatically when admin changes today's
                bhav.
              </p>
            </>
          ) : (
            <Alert variant="warning">
              ⚠️ Bhav not set yet. Please ask admin to update today's price.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
