import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Contact.css";
const Contact = () => {
  return (
    <section className="contactForm">
      <Container>
        <Row className="mb-5 pt-5">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in Touch</h3>
            <address className="contact-details">
              <strong>Email: nettecolumna123@gmail.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone: 09353973154</strong>
              </p>
              <p className="addressplace">
                Santa Maria Lallo Cagayan Zone 4, Lal-lo, Philippines, 3509
              </p>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact_form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0 mt-3"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button className="btn ac_btn contactButton" variant="light">
                    Send
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
