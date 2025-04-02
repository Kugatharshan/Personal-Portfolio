import { Container, Row, Col } from 'react-bootstrap'
import { FaImages, FaUsers, FaChalkboardTeacher, FaUserTie, FaMicrophone, FaHandshake, FaHeartbeat, FaBaby, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { 
      title: 'Community Events', 
      url: '/sample.jpeg',
      icon: <FaUsers className="gallery-item-icon" />
    },
    { 
      title: 'Health Workshops', 
      url: 'https://placehold.co/600x400?text=Health+Workshops',
      icon: <FaChalkboardTeacher className="gallery-item-icon" />
    },
    { 
      title: 'Team Leadership', 
      url: 'https://placehold.co/600x400?text=Team+Leadership',
      icon: <FaUserTie className="gallery-item-icon" />
    },
    { 
      title: 'Public Speaking', 
      url: 'https://placehold.co/600x400?text=Public+Speaking',
      icon: <FaMicrophone className="gallery-item-icon" />
    },
    { 
      title: 'Health Promotion', 
      url: 'https://placehold.co/600x400?text=Health+Promotion',
      icon: <FaHeartbeat className="gallery-item-icon" />
    },
    { 
      title: 'Community Engagement', 
      url: 'https://placehold.co/600x400?text=Community+Engagement',
      icon: <FaHandshake className="gallery-item-icon" />
    }
  ]

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaImages className="section-icon gallery-icon" />
          Gallery
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => openModal(item)}
            >
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={item.url} alt={item.title} />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-icon-wrapper">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="gallery-item-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-image-container">
                <img src={selectedImage.url} alt={selectedImage.title} />
              </div>
              <div className="modal-title">
                <div className="modal-icon">{selectedImage.icon}</div>
                <h3>{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

export default Gallery