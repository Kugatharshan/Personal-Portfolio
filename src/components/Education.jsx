/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaAward, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BiBookOpen, BiTimeFive } from 'react-icons/bi';
import './Education.css';
import SectionDivider from "./SectionDivider";
import 'aos/dist/aos.css';

function Education() {

  const milestones = [
    {
      id: 'degree',
      title: 'BSc in Health Promotion',
      institution: 'Rajarata University of Sri Lanka',
      duration: '4 Years',
      period: '2018 - 2022',
      details: (
        <ul>
          <li>In-depth understanding of health promotion theories – Gaining knowledge of core principles in public health to promote well-being and prevent diseases.</li>
          <li>Hands-on experience in designing health programs – Developing and evaluating health campaigns tailored to specific community needs.</li>
          <li>Research-driven approach to health interventions – Utilizing research methodologies to assess and improve community health outcomes.</li>
        </ul>
      ),
      icon: <FaGraduationCap />
    },
    {
      id: 'psychology',
      title: 'Child and Educational Psychology',
      institution: 'Institute of Psychology',
      duration: '2 Years',
      period: '2021 - 2026',
      details: (
        <ul>
          <li>Studying child development theories – Understanding cognitive and emotional growth in children.</li>
          <li>Specializing in educational assessment – Assessing children's learning capabilities and behavior in an educational environment.</li>
          <li>Application of psychological techniques – Using psychological knowledge to improve educational outcomes for children.</li>
        </ul>
      ),
      skills: ['Child Development', 'Educational Assessment'],
      icon: <FaCertificate />
    },
    {
      id: 'counselling',
      title: 'Counselling Psychology',
      institution: 'Transmind Institute',
      duration: '1.5 Years',
      details: (
        <ul>
          <li>Mastering therapeutic techniques – Developing counseling strategies to help clients manage mental health challenges.</li>
          <li>Providing mental health assessments – Using assessment tools to diagnose and treat mental health issues.</li>
          <li>Client-focused counseling – Tailoring counseling sessions to meet individual client needs and improve their emotional well-being.</li>
        </ul>
      ),
      skills: ['Therapeutic Techniques', 'Mental Health Assessment'],
      icon: <FaCertificate />
    },
    {
      id: 'hrm',
      title: 'Human Resource Management',
      institution: 'CASED Institute',
      duration: '1 Year',
      details: (
        <ul>
          <li>Understanding personnel management – Gaining expertise in managing employee relations and workplace dynamics.</li>
          <li>Organizational behavior theories – Studying behavior in organizations and applying knowledge to enhance productivity.</li>
          <li>HR strategy implementation – Learning to create and execute strategies to improve workforce performance.</li>
        </ul>
      ),
      skills: ['Personnel Management', 'Organizational Behavior'],
      icon: <FaCertificate />
    },
    {
      id: 'language',
      title: 'John Keels Foundation Programme (English)',
      achievement: 'Merit',
      details: (
        <ul>
          <li>Developing English language proficiency – Mastering reading, writing, and speaking skills in English.</li>
          <li>Enhancing communication skills – Improving verbal and written communication in various professional settings.</li>
          <li>Understanding English literature – Studying literary works to deepen appreciation for English culture and language.</li>
        </ul>
      ),
      icon: <BiBookOpen />
    },
    {
      id: 'english',
      title: 'General English Course',
      achievement: 'Distinction & Merit',
      details: (
        <ul>
          <li>Comprehensive grammar and vocabulary study – Enhancing language structure and word usage.</li>
          <li>Advanced reading and writing skills – Sharpening ability to understand and produce complex English texts.</li>
          <li>Communication in global contexts – Preparing for global communication with a focus on fluency and clarity.</li>
        </ul>
      ),
      icon: <BiBookOpen />
    }
  ];
  

  return (
    <section id="education" className="edu-roadmap-section">
      <Container>
        <h2 className="section-title"><FaGraduationCap className="title-icon" /> Education Journey</h2>
        <p className="skills-section-subtitle mb-4">
        An overview of my academic journey, showcasing the degrees and certifications that have shaped my understanding and skills in public health, health promotion, psychology, and management. These qualifications have provided me with the foundation to make a positive impact in the community through evidence-based practices and research.
          </p>
        <div className="edu-roadmap-container">
          <div className="edu-roadmap-path"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="edu-roadmap-milestone"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="edu-milestone-dot">{milestone.icon}</div>

              <div className="edu-milestone-content">
                <h3>{milestone.title}</h3>
                {milestone.institution && <p><FaMapMarkerAlt /> {milestone.institution}</p>}
                {milestone.duration && <p><BiTimeFive /> {milestone.duration}</p>}
                {milestone.period && <p><FaCalendarAlt /> {milestone.period}</p>}
                {milestone.details && <p>{milestone.details}</p>}
                {milestone.skills && <ul>{milestone.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>}
                {milestone.achievement && <div><FaAward /> {milestone.achievement}</div>}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </section>
  );
}

export default Education;
