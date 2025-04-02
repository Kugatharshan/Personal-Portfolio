import './Loader.css'
import { FaHeartbeat, FaMedkit, FaUsers, FaAppleAlt } from 'react-icons/fa'

function Loader() {
  return (
    <div className="loader-container">
      {/* Floating Bubbles */}
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      
      {/* Floating Icons */}
      <div className="floating-icons">
    <FaHeartbeat className="icon" />  {/* Represents health and well-being */}
    <FaMedkit className="icon" />      {/* Symbolizes medical care and health promotion */}
    <FaUsers className="icon" />      {/* Represents community and public health */}
    <FaAppleAlt className="icon" />   {/* Symbolizes healthy eating and nutrition */}
   
</div>


      <div className="loader-content">
        <div className="loader-circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Animated Text with Glow Effect */}
        <div className="loader-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="loader-progress">
          <div className="progress-bar">
            <div className="progress-glow"></div>
          </div>
        </div>

        {/* Rotating Ring */}
        <div className="rotating-ring"></div>
      </div>
    </div>
  )
}

export default Loader