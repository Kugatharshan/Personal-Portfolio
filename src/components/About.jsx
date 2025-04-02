/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaHeartbeat, FaUsers, FaChartBar } from "react-icons/fa";
import "./About.css";
import  { useState, useEffect } from "react";
import SectionDivider from "./SectionDivider";

// About Section Component
function About() {
  const roles = ["Public Health Advocate", "Community Health Educator", "Health Promotion Specialist", "Wellness Coordinator", "Preventive Health Consultant", "Health Awareness Campaigner"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDelete = 1000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Description */}
          <Col lg={6} className="about-content-col">
            <div className="about-content" data-aos="fade-right">
             

              <div className="about-intro-session">
              Hello, I am <span style={{ color: "#a0b1c5  ", fontWeight: "bold", fontSize: "2.2rem" }}>Kugatharshan</span>. I work as a{" "}
                <span style={{ color: "#a0b1c5  ", fontWeight: "bold", fontSize: "2.5rem" }} className="typewriter-text">{text}</span>
                
                <p className="bio-content">
                  I am a passionate Health Promotion professional with expertise in 
                  community engagement, data collection, and evaluating public health 
                  initiatives. I specialize in designing health education campaigns and
                  promoting disease prevention to improve public well-being.
                </p>

                <div className="social-wrapper">
                  <a href="#" className="social-icon">
                    <FaLinkedin />
                    <span className="icon-label">LinkedIn</span>
                  </a>
                  <a href="#" className="social-icon">
                    <FaGithub />
                    <span className="icon-label">GitHub</span>
                  </a>
                  <a href="#" className="social-icon">
                    <FaTwitter />
                    <span className="icon-label">Twitter</span>
                  </a>
                </div>

                <div className="cv-wrapper">
                  <a href="#" className="cv-button">
                    <div className="button-inner">
                      <FaDownload />
                      <span>Download CV</span>
                    </div>
                    <div className="button-shine"></div>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col lg={6} className="about-image-col">
            <div className="about-image-wrapper" data-aos="fade-left">
              <div className="image-container">
                <div className="image-border"></div>
                <div className="image-content">
                  <img 
                    src="sample.jpeg" 
                    alt="E.KUGATHARSHAN" 
                    className="profile-image"
                  />
                </div>
                <div className="image-overlay"></div>
              </div>
              <div className="floating-elements">
                <div className="float-element element-1">
                  <FaHeartbeat />
                  <span>Health Promotion</span>
                </div>
                <div className="float-element element-2">
                  <FaUsers />
                  <span>Community</span>
                </div>
                <div className="float-element element-3">
                  <FaChartBar />
                  <span>Research</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
      <SectionDivider />
    </section>
    
  );
}

export default About;
