import { Container } from 'react-bootstrap'
import SectionDivider from './SectionDivider'

function Privacy() {
  return (
    <Container className="py-5">
      <SectionDivider title="Privacy Policy" />
      <div className="content-wrapper">
        <h3>1. Information Collection</h3>
        <p>We collect information that you voluntarily provide to us when you use our contact form or interact with our website.</p>

        <h3>2. Use of Information</h3>
        <p>The information we collect is used to respond to your inquiries and improve our services.</p>

        <h3>3. Information Protection</h3>
        <p>We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

        <h3>4. Third-party Websites</h3>
        <p>Users may find content on our website that links to third-party sites and services. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site.</p>
      </div>
    </Container>
  )
}

export default Privacy