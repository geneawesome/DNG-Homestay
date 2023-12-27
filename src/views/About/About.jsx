import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="aboutTitle">LEARN MORE ABOUT US</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="aboutDescription">
              At DNG Homestay, we take immense pride in offering a harmonious
              blend of modern comfort and traditional charm. Our carefully
              designed accommodations reflect the local culture while providing
              all the amenities you need for a comfortable stay.
            </p>
          </Col>
        </Row>
        <Row>
          <button className="btn btnReadMore">Read More</button>
        </Row>
      </Container>
    </section>
  );
};

export default About;
