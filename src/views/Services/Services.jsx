import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Transient from "../../assets/409782201_302276246129027_7977633288824692716_n.jpg";
import LongTerm from "../../assets/404902577_289725214050797_920572305501700775_n.jpg";
// import EntertainmentActivities from "../../assets/modern-people-doing-cultural-activities_23-2148599167.jpg";
// import SafetyMedicalServices from "../../assets/flat-world-health-day-background_23-2149300395.jpg";
const Services = () => {
  return (
    <>
      <section className="Services">
        <Container className="text-center grid gap-5 mb-5">
          <Row
            xs={1}
            md={4}
            className="d-flex justify-content-center mt-5 grid gap-5"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={Transient} fluid />
                    <h3 className="">Transient Rooms</h3>
                    <p>
                      Embark on a temporary journey of comfort and style! Our
                      transient room beckons, offering a blend of coziness and
                      convenience for your short-term stay. Seize the
                      opportunity to make this space your own sanctuary.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <Col>
                    <Image src={LongTerm} fluid />
                    <h3>Long Staying Guest</h3>
                    <p>
                      Discover the perfect blend of comfort and convenience with
                      our transient rooms designed for long-staying guests.
                      Whether you're in town for an extended work assignment, a
                      temporary relocation, or simply seeking a home away from
                      home, our accommodations are tailored to meet your needs.
                    </p>
                  </Col>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
