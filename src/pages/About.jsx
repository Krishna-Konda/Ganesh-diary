import { Container, Row, Col, Image, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      {/*Diary Store Setion*/}
      <Row className="align-item-center mb-5">
        <Col md={6}>
          <Image
            src="./images/farm.jpg"
            alt="Ganesh Diary Farm "
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
        <Col md={6}>
          <h2 className="text-primary mb-3">About Shri Ganesh Diary</h2>
          <p className="text-muted">
            Established in the year <strong>2000</strong>,{" "}
            <strong>Shri Ganesh Milk Center</strong> has become a trusted name
            in <strong>Bhiwandi</strong> for providing
            <strong> pure buffalo milk</strong> that’s thick, fresh, and full of
            cream.
          </p>
          <p className="text-muted">
            For over <strong>24 years</strong>, our commitment to purity has
            remained unchanged. Each batch of milk is freshly boiled every
            morning and delivered with care — perfect for chai, sweets, and
            daily home use.
          </p>
          <p className="text-muted">
            We take pride in maintaining traditional dairy practices while
            ensuring modern hygiene standards. Our goal is simple — deliver milk
            as fresh and wholesome as it should be.
          </p>
        </Col>
      </Row>

      {/* Mission Cards */}
      <Row className="text-center mb-5">
        <h3 className="text-primary mb-4">Our Mission & Values</h3>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="text-success">🥛 Purity</h5>
              <p>
                We Deliver diary that is 100% pure - no mixing, no additives, no
                compromise.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="text-success">🌿 Freshness</h5>
              <p className="text-muted">
                Our milk is freshly boiled and distributed daily to ensure rich
                flavor and safety.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="text-success">🙏 Trust</h5>
              <p className="text-muted">
                Trusted in Bhiwandi for 24 years — we’re proud to be part of
                your family’s daily life.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <Row className="align-items-center">
        <Col md={6}>
          <h3 className="text-primary mb-3">
            Why Choose Shri Ganesh Milk Center?
          </h3>
          <ul className="text-muted text-start">
            <li>Pure buffalo milk only — guaranteed thick and creamy</li>
            <li>Freshly boiled every day for safety and flavor</li>
            <li>Perfect for chai, sweets, and home cooking</li>
            <li>Trusted by thousands of families in Bhiwandi</li>
            <li>Serving with devotion and care since 2000</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image
            src="./images/cow-shed.jpg"
            alt="Ganesh Diary Cow Shed"
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
