import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  FaHeartbeat, FaGlobeAmericas, FaChild, FaCalendarAlt, 
  FaChartBar, FaFileAlt, FaUserMd, FaUsers, FaBan,
  FaUserTie, FaStethoscope , FaBrain, FaClock, FaMicrophone, FaWindows,FaComments, FaPalette,FaLeaf,FaBaby
} from 'react-icons/fa';
import './Skills.css';
import SectionDivider from './SectionDivider';
// Add the SkillCircle component definition
const SkillCircle = ({ skill, isVisible }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`skill-item ${hover ? 'hovered' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="skill-circle-wrapper">
        <div 
          className="skill-circle"
          style={{
            '--progress': isVisible ? `${skill.percentage}%` : '0%',
            '--skill-color': skill.color
          }}
        >
          <div className="percentage">
            <span className="number">{skill.percentage}</span>
            <span className="percent">%</span>
          </div>
        </div>
        <div className="skill-name">
          {skill.icon}
          <span>{skill.name}</span>
        </div>
        {hover && (
          <div className="skill-tooltip" style={{ '--tooltip-color': skill.color }}>
            <div className="tooltip-header">
              <span className="tooltip-title">{skill.name}</span>
              <span className="tooltip-percentage">{skill.percentage}%</span>
            </div>
            <p className="tooltip-description">{skill.tooltip}</p>
            {skill.achievements && (
              <ul className="tooltip-achievements">
                {skill.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Add PropTypes validation
SkillCircle.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    icon: PropTypes.node,
    achievements: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  isVisible: PropTypes.bool.isRequired
};

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = {
    core: [
      {
        name: 'Health Promotion',
        percentage: 90,
        color: '#50C878',
        icon: <FaHeartbeat />,
        tooltip: 'Expert in public health awareness and promotion strategies',
        achievements: [
          'Developed comprehensive health awareness campaigns',
          'Implemented community health initiatives',
          'Created educational materials for public health'
        ]
      },
      {
        name: 'Sustainable Development',
        percentage: 85,
        color: '#4CAF50',
        icon: <FaGlobeAmericas />,
        tooltip: 'Experienced in SDG-based project planning and implementation',
        achievements: [
          'Led multiple SDG-aligned projects',
          'Achieved sustainable community impact',
          'Integrated SDG goals into local initiatives'
        ]
      },
      {
        name: 'ECCD Awareness',
        percentage: 88,
        color: '#FF69B4',
        icon: <FaChild />,
        tooltip: 'Specialized in Early Childhood Care & Development awareness',
        achievements: [
          'Conducted ECCD workshops for parents',
          'Developed early childhood programs',
          'Created educational materials for caregivers'
        ]
      },
      {
        name: 'Event Planning',
        percentage: 92,
        color: '#9B59B6',
        icon: <FaCalendarAlt />,
        tooltip: 'Skilled in planning and implementing community events',
        achievements: [
          'Organized 20+ successful community events',
          'Managed event budgets and logistics',
          'Coordinated multiple stakeholders'
        ]
      }
    ],
    research: [
      {
        name: 'Research & Data',
        percentage: 85,
        color: '#3498DB',
        icon: <FaChartBar />,
        tooltip: 'Experienced in research assistance and data collection',
        achievements: [
          'Conducted community health surveys',
          'Analyzed public health data',
          'Implemented research methodologies'
        ]
      },
      {
        name: 'Report Writing',
        percentage: 88,
        color: '#F1C40F',
        icon: <FaFileAlt />,
        tooltip: 'Proficient in research and report writing',
        achievements: [
          'Authored comprehensive research reports',
          'Developed policy recommendations',
          'Created educational content'
        ]
      },
      {
        name: 'NCD Prevention',
        percentage: 90,
        color: '#E74C3C',
        icon: <FaUserMd />,
        tooltip: 'Expert in Non-Communicable Disease prevention strategies',
        achievements: [
          'Developed NCD prevention programs',
          'Conducted awareness workshops',
          'Created prevention guidelines'
        ]
      },
      {
        name: 'Mental Health Advocacy',
        percentage: 85,
        color: '#50C878',
        icon: <FaBrain />,
        tooltip: 'Strong background in mental health awareness and support programs',
        achievements: [
          'Organized mental health awareness campaigns',
          'Provided counseling and support resources',
          'Developed stress management workshops'
        ]
      }
    ],
    community: [
      {
        name: 'Community Leadership',
        percentage: 95,
        color: '#F1C40F',
        icon: <FaUsers />,
        tooltip: 'Strong community engagement and leadership training skills',
        achievements: [
          'Led community development programs',
          'Trained community leaders',
          'Facilitated group discussions'
        ]
      },
      {
        name: 'Health Campaigns',
        percentage: 92,
        color: '#E67E22',
        icon: <FaBan />,
        tooltip: 'Experienced in alcohol & tobacco reduction campaigns',
        achievements: [
          'Organized awareness campaigns',
          'Developed educational materials',
          'Conducted community outreach'
        ]
      },
      {
        name: 'Maternal & Child Health',
        percentage: 88,
        color: '#3498DB',
        icon: <FaBaby />,
        tooltip: 'Expertise in promoting maternal and child health initiatives',
        achievements: [
          'Led maternal health education programs',
          'Advocated for child nutrition and immunization',
          'Collaborated with healthcare providers for better care access'
        ]
      },
      {
        name: 'Environmental Health',
        percentage: 86,
        color: '#2ECC71',
        icon: <FaLeaf />,
        tooltip: 'Strong background in environmental health and sustainability',
        achievements: [
          'Promoted clean water and sanitation initiatives',
          'Organized waste management programs',
          'Conducted climate change awareness sessions'
        ]
      }
      
    ],
    professional: [
      {
        name: 'Leadership',
        percentage: 90,
        color: '#FFD700',
        icon: <FaUserTie />,
        tooltip: 'Demonstrated leadership abilities in various contexts',
        achievements: [
          'Led multiple project teams',
          'Mentored team members',
          'Achieved project goals'
        ]
      },
      {
        name: 'Decision Making',
        percentage: 88,
        color: '#8E44AD',
        icon: <FaBrain />,
        tooltip: 'Strong analytical and decision-making capabilities',
        achievements: [
          'Led strategic planning',
          'Managed crisis situations',
          'Implemented solutions'
        ]
      },
      {
        name: 'Time Management',
        percentage: 92,
        color: '#2ECC71',
        icon: <FaClock />,
        tooltip: 'Excellent time management and organizational skills',
        achievements: [
          'Managed multiple projects',
          'Met deadlines consistently',
          'Optimized workflows'
        ]
      },
      {
        name: 'Communication Skills',
        percentage: 95,
        color: '#F39C12',
        icon: <FaComments />,
        tooltip: 'Strong verbal and written communication skills',
        achievements: [
          'Delivered impactful health awareness sessions',
          'Engaged effectively with diverse communities',
          'Developed clear and concise health reports'
        ]
      }
      
    ],
    technical: [
      {
        name: 'Public Speaking',
        percentage: 85,
        color: '#E74C3C',
        icon: <FaMicrophone />,
        tooltip: 'Proficient in Tamil public speaking',
        achievements: [
          'Conducted presentations',
          'Led community workshops',
          'Facilitated training sessions'
        ]
      },
      {
        name: 'Microsoft Office',
        percentage: 90,
        color: '#3498DB',
        icon: <FaWindows />,
        tooltip: 'Skilled in Microsoft Office applications',
        achievements: [
          'Created comprehensive reports',
          'Developed data analysis',
          'Designed presentations'
        ]
      },
      {
        name: 'Design & Editing',
        percentage: 88,
        color: '#FF69B4',
        icon: <FaPalette />,
        tooltip: 'Proficient in Canva for video editing and design',
        achievements: [
          'Created promotional materials',
          'Edited educational videos',
          'Designed social media content'
        ]
      }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="skills-header" data-aos="fade-down">
          <h2 className="section-title"><FaStethoscope   className="title-icon" />Core Competencies</h2>
          <p className="skills-section-subtitle mb-4">
    A comprehensive overview of the skills I have acquired through my academic journey and professional experiences. These skills encompass various aspects of public health, health promotion, psychology, and management, enabling me to effectively contribute to community health initiatives, deliver evidence-based interventions, and drive impactful change within organizations and communities.
</p>

        </div>

        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skills-category" data-aos="fade-up">
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }} className="skills-category-header">
                <h3 style={{color:"#fff",textAlign:"center"}} className="skills-category-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)} Skills
                </h3>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <SkillCircle 
                    key={skill.name} 
                    skill={skill} 
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </section>
  );
}

export default Skills; 