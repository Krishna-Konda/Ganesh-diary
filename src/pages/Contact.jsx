import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container className="py-5">
      {/* Heading */}
      <h2 className="text-center text-primary mb-4">📞 Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We’re always happy to connect with our valued customers. Visit us, call
        us, or reach out anytime for queries about milk supply, wholesale rates,
        or deliveries.
      </p>

      {/* Contact Info */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm border-1">
            <Card.Body className="text-center">
              <Card.Title className="text-primary fs-4 mb-3">
                Shri Ganesh Milk Center
              </Card.Title>

              <Card.Text className="mb-2">
                <strong>📍 Address:</strong>
                <br />
                Bharaman Ali, Old Post Office,
                <br />
                Bhiwandi, Maharashtra 421302
              </Card.Text>

              <Card.Text className="mb-2">
                <strong>📞 Phone:</strong>
                <br />
                +91 98905 20455
              </Card.Text>

              <Card.Text className="mb-2">
                <strong>✉️ Email:</strong>
                <br />
                kondakrishna70@gmail.com
              </Card.Text>

              <Card.Text className="mb-3">
                <strong>🕒 Timings:</strong>
                <br />
                Monday – Sunday: 6 AM – 10 PM
              </Card.Text>

              <Button
                variant="outline-primary"
                href="https://maps.google.com/?q=Bharaman+Ali+Old+Post+Office+Bhiwandi"
                target="_blank">
                📍 View on Google Maps
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
