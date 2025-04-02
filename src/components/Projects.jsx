import { Container } from 'react-bootstrap'
import { FaGlobeAmericas, FaLaptopCode,FaGraduationCap, FaUsers, FaHeartbeat, FaChild, FaChalkboardTeacher } from 'react-icons/fa'
import { useState } from 'react'
import './Projects.css'
import SectionDivider from './SectionDivider'
function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = {
    sdg: [
      {
        id: 'skillup',
        title: 'SkillUp Sri Lanka',
        icon: <FaGraduationCap />,
        status: 'Completed',
        progress: 100,
        description: 'Youth skills development program focusing on digital literacy and entrepreneurship.',
        impact: 'Trained 200+ youth in various professional skills',
        duration: '2023-2024',
        color: '#4A90E2'
      },
      {
        id: 'sdg-awareness',
        title: 'SDG Awareness Programs',
        icon: <FaGlobeAmericas />,
        status: 'Ongoing',
        progress: 75,
        description: 'Promoting awareness of UN Sustainable Development Goals in local communities.',
        impact: 'Reached 500+ community members',
        duration: '2023-Present',
        color: '#50C878'
      },
      {
        id: 'leadership',
        title: 'Youth Leadership Development',
        icon: <FaUsers />,
        status: 'Ongoing',
        progress: 80,
        description: 'Empowering youth through leadership training and mentorship programs.',
        impact: 'Mentored 50+ young leaders',
        duration: '2023-Present',
        color: '#FFD700'
      }
    ],
    health: [
      {
        id: 'diabetes',
        title: 'Diabetes Awareness Campaign',
        icon: <FaHeartbeat />,
        status: 'Completed',
        progress: 100,
        description: 'Community-based diabetes prevention and awareness program.',
        impact: 'Educated 300+ individuals about diabetes prevention',
        duration: '2023',
        color: '#E74C3C'
      },
      {
        id: 'child-protection',
        title: 'Child Protection Education',
        icon: <FaChild />,
        status: 'Ongoing',
        progress: 90,
        description: 'Educational programs promoting child safety and protection.',
        impact: 'Conducted workshops in 10+ schools',
        duration: '2023-2024',
        color: '#9B59B6'
      },
      {
        id: 'workshops',
        title: 'Community Health Workshops',
        icon: <FaChalkboardTeacher />,
        status: 'Ongoing',
        progress: 85,
        description: 'Regular workshops on various health topics for community members.',
        impact: 'Organized 20+ workshops on different health topics',
        duration: '2023-Present',
        color: '#3498DB'
      }
    ]
  };

  return (
    <section id="projects" className="projects-section-container">
      <Container>
        <div className="projects-section-header" data-aos="fade-down">
          <h2 className="section-title"><FaLaptopCode  className="title-icon" />
            Projects & Initiatives
          </h2>
          <p className="skills-section-subtitle mb-4">
    A summary of the impactful projects I have led and contributed to, showcasing my ability to design, implement, and drive initiatives focused on health promotion, community well-being, and organizational development. These projects have not only provided tangible outcomes but also enhanced my skills in project management, teamwork, and innovation, motivating me to continue making meaningful contributions to public health and community-centered work.
</p>

        </div>

        <div className="projects-content-container">
          {/* SDG Projects */}
          <div className="projects-category-wrapper" data-aos="fade-right">
            <h3 className="projects-category-heading">
              <FaGlobeAmericas className="projects-category-icon" />
              Sustainable Development Goals
            </h3>
            <div className="projects-items-grid">
              {projects.sdg.map((project) => (
                <div
                  key={project.id}
                  className={`project-item-card ${expandedCard === project.id ? 'project-card-expanded' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === project.id ? null : project.id)}
                  style={{'--project-color': project.color}}
                >
                  <div className="project-icon-wrapper" style={{'--icon-color': project.color}}>
                    {project.icon}
                  </div>
                  <h4 className="project-item-title">{project.title}</h4>
                  
                  <div className="project-progress-bar">
                    <div 
                      className="project-progress-fill"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                  <span className="project-status-indicator">{project.status}</span>

                  <div className="project-expanded-details">
                    <p className="project-description">{project.description}</p>
                    <div className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                    <div className="project-duration">
                      <strong>Duration:</strong> {project.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Initiatives */}
          <div className="projects-category-wrapper" data-aos="fade-left">
            <h3 className="projects-category-heading">
              <FaHeartbeat className="projects-category-icon" />
              Health Promotion Initiatives
            </h3>
            <div className="projects-items-grid">
              {projects.health.map((project) => (
                <div
                  key={project.id}
                  className={`project-item-card ${expandedCard === project.id ? 'project-card-expanded' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === project.id ? null : project.id)}
                  style={{'--project-color': project.color}}
                >
                  <div className="project-icon-wrapper" style={{'--icon-color': project.color}}>
                    {project.icon}
                  </div>
                  <h4 className="project-item-title">{project.title}</h4>
                  
                  <div className="project-progress-bar">
                    <div 
                      className="project-progress-fill"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                  <span className="project-status-indicator">{project.status}</span>

                  <div className="project-expanded-details">
                    <p className="project-description">{project.description}</p>
                    <div className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                    <div className="project-duration">
                      <strong>Duration:</strong> {project.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <SectionDivider />
    </section>
  )
}

export default Projects