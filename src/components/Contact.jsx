import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'
import SectionDivider from './SectionDivider'
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="con-title">
          <h2 className="section-title text-center" data-aos="fade-up">Get In Touch</h2>
       
        </div>
        <p className="contact-description text-center">
    We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Our team is here to assist you.
  </p>
       
        <Row className="justify-content-center">
          <Col lg={4} className="mb-4" data-aos="fade-up">
            <div className="contact-info">
              <h3 className="mb-4">Contact Information</h3>
              <div className="d-flex align-items-center mb-4">
                <FaPhone className="text-purple me-2" />
                <span>+94766863242</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="text-purple me-2" />
                <span>ddanukshi26@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaMapMarkerAlt className="text-purple me-2" />
                <span>Rasalingam St, Iruthayapuram, Mutur, Trincomalee</span>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com/in/danukshi-danastran-048110320" className="me-3" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="me-3">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="me-3">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8} data-aos="fade-up">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" required />
              </Form.Group>
              <Button type="submit" className="con-btn-custom w-100">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <SectionDivider />
    </section>
  )
}

export default Contact