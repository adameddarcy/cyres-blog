import React from 'react';
import './Title.css'; // Import CSS for custom styling

const Title = ({ title, subtitle, introduction, socialMediaLinks }) => {
  return (
    <section className="title-section-container">
      {/* Main Title */}
      <h1 className="title-section-title">{title}</h1>

      {/* Subtitle */}
      <h2 className="title-section-subtitle">{subtitle}</h2>

      {/* Introduction Text */}
      <p className="title-section-introduction">{introduction}</p>

      {/* Social Media Section */}
      <div className="title-section-social-media">
        {socialMediaLinks && socialMediaLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <img 
              src={link.icon} 
              alt={link.name} 
              className="social-media-icon" 
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Title;
