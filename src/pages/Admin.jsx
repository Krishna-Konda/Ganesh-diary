import { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

export default function AdminPage() {
  const ADMIN_PIN = "1277";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");

  const [bhav, setBhav] = useState("");
  const [message, setMessage] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  //Check session
  useEffect(() => {
    const session = sessionStorage.getItem("adminAuth");
    if (session === "true") setIsAuthenticated(true);

    const savedBhav = localStorage.getItem("milkBhav");
    const savedDate = localStorage.getItem("bhavUpdatedAt");
    if (savedBhav) setBhav(savedBhav);
    if (savedDate) setLastUpdated(savedDate);
  }, []);

  //Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (enteredPin === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
    } else {
      alert("Invalid Pin Entered!!!");
    }
  };

  //Handle Bhav Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/bhav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newBhav: bhav }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  //---UI---
  return (
    <Container className="py-5">
      {!isAuthenticated ? (
        //Login Screen
        <Card
          className="shadow-sm border-1 mx-auto"
          style={{ maxwidth: "400px" }}>
          <Card.Body className="text-center">
            <h3 className="mb-3 ">🔐 Admin Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Admin PIN</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your PIN"
                  value={enteredPin}
                  onChange={(e) => setEnteredPin(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className="shadow-sm border-1 mx-auto"
          style={{ maxwidth: "500px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">👨‍💼 Admin Panel</h2>
            {message && <Alert variant="info">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Today's Milk Bhav (₹ per/Liter)</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  value={bhav}
                  onChange={(e) => setBhav(e.target.value)}
                  required
                  placeholder="e.g 76"
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Save Bhav
                </Button>
              </div>
            </Form>

            {lastUpdated && (
              <p className="text-center text-muted mt-3">
                <small>Last Updated On : {lastUpdated}</small>
              </p>
            )}

            <div className="text-center mt-3">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => {
                  sessionStorage.removeItem("adminAuth");
                  setIsAuthenticated(false);
                  setEnteredPin("");
                }}>
                Logout
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
