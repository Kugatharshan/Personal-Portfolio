import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="footer">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <Row className="footer-row">
            {/* Row 1: About Me */}
            <Col lg={3} md={6} className="footer-column">
              <motion.div variants={itemVariants}>
                <h5 className="footer-title">About Me</h5>
                <div className="footer-about">
                  <p className="footer-summary">
                    A passionate Full Stack Developer dedicated to creating innovative web solutions and delivering exceptional digital experiences.
                  </p>
                </div>
              </motion.div>
            </Col>

            {/* Row 2: Quick Links */}
            <Col lg={3} md={6} className="footer-column">
              <motion.div variants={itemVariants}>
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </motion.div>
            </Col>

            {/* Row 3: Get In Touch */}
            <Col lg={3} md={6} className="footer-column">
              <motion.div variants={itemVariants}>
                <h5 className="footer-title">Get In Touch</h5>
                <div className="footer-contact">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div className="contact-info1">
                      <span className="contact-label1">Phone</span>
                      <span className="contact-value1">+94 075 447 6969</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div className="contact-info1">
                      <span className="contact-label1">Email</span>
                      <span className="contact-value1">vinonsan.99@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div className="contact-info1">
                      <span className="contact-label1">Location</span>
                      <span className="contact-value1">Point Pedro Road Urany, Kankesanthurai</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Row 4: Connect With Me */}
            <Col lg={3} md={6} className="footer-column">
              <motion.div variants={itemVariants}>
                <h5 className="footer-title">Connect With Me</h5>
                <p className="footer-description">
      Feel free to reach out through any of my social profiles. I'm always open to new connections and opportunities.
    </p>
                <div className="footer-social">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="footer-bottom"
        >
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                Made with <FaHeart className="heart-icon" /> by G.E. Vinonsan
                <span className="copyright">© {currentYear}</span>
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </footer>
  )
}

export default Footer
