import './SectionDivider.css';

const SectionDivider = () => {
  return (
    <div className="section-divider-new">
      <div className="divider-container">
        <div className="divider-line"></div>
        <div className="divider-circle">
          <div className="circle-inner"></div>
          <div className="circle-outer"></div>
        </div>
        <div className="divider-line"></div>
      </div>
      <div className="divider-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default SectionDivider;