import { Container } from 'react-bootstrap'
import { FaBriefcase, FaBuilding, FaChild, FaHeartbeat } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import './Experience.css'
import SectionDivider from "./SectionDivider";

function Experience() {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
    {
      id: 'bank',
      title: 'Intern',
      company: 'Hatton National Bank',
      period: '2018',
      icon: <FaBuilding />,
      description: 'Gained valuable exposure to the banking industry, learning various operations and procedures that are fundamental to the financial sector.',
      details: [
        'Assisted with daily banking operations',
        'Handled data entry and documentation',
        'Gained hands-on experience in banking procedures'
      ],
      color: '#4A90E2'
    },
    {
      id: 'ncpa',
      title: 'NCPA University Ambassador',
      company: 'National Child Protection Authority',
      period: '2024-2025',
      icon: <FaChild />,
      description: 'Represented the National Child Protection Authority (NCPA), working to promote child safety and protection through awareness and outreach programs.',
      details: [
        'Completed Child Protection Training',
        'Led awareness campaigns in schools',
        'Conducted community outreach programs'
      ],
      color: '#50C878'
    },
    {
      id: 'health',
      title: 'Health Promotion Society Member',
      company: 'Rajarata University',
      period: '2021-2025',
      icon: <FaHeartbeat />,
      description: 'Active member of the Health Promotion Society, contributing to public health initiatives, including awareness campaigns and health education.',
      details: [
        'Member of Journal Club',
        'Coordinated Diabetes Awareness Campaign',
        'Developed digital health content',
        'Organized charity events'
      ],
      color: '#E74C3C'
    }
  ];
  

  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="experience-header" data-aos="fade-down">
          <h2 className="section-title">
            <FaBriefcase className="title-icon" />
            Professional Experience
          </h2>
          <p className="skills-section-subtitle mb-4">
    A summary of my professional experiences, highlighting the roles and responsibilities that have allowed me to apply my knowledge in public health, health promotion, and community development. Through hands-on work, I have gained valuable insights into health management, behavioral health, and public health advocacy, preparing me to drive positive change within diverse organizations and communities.
</p>

        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{'--marker-color': exp.color}}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      {/* Insert description here */}
      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      <div className="role-details">
        <ul className="responsibilities">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}

        </div>
      </Container>
      <SectionDivider />
    </section>
  )
}

export default Experience