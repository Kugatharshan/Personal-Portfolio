import { Container } from 'react-bootstrap'
import SectionDivider from './SectionDivider'

function Terms() {
  return (
    <Container className="py-5">
      <SectionDivider title="Terms & Conditions" />
      <div className="content-wrapper">
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3>2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Danukshi Danastran's website for personal, non-commercial transitory viewing only.</p>

        <h3>3. Disclaimer</h3>
        <p>The materials on Danukshi Danastran's website are provided on an 'as is' basis. Danukshi Danastran makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h3>4. Limitations</h3>
        <p>In no event shall Danukshi Danastran or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Danukshi Danastran's website.</p>
      </div>
    </Container>
  )
}

export default Terms