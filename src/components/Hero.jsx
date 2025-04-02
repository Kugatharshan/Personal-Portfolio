import { Container, Row, Col } from 'react-bootstrap'

function Hero() {
  return (
    <section
      className="hero-section min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center hero-text">
            <h1
              className="display-4 mb-4 floating"
              data-aos="fade-up"
            >
              Health Promotion Professional
            </h1>
            <p
              className="lead mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Passionate about community health, child protection, and creating positive social impact
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="floating"
            >
              <a
                href="#about"
                className="btn btn-custom btn-lg"
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero