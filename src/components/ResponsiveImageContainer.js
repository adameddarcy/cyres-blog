import React from 'react';
import './ResponsiveImageContainer.css'; // Import the CSS for styling

const ResponsiveImageContainer = ({ src, alt }) => {
    return (
        <div className="responsive-image-container">
            <img src={src} alt={alt} className="responsive-image" />
        </div>
    );
};

export default ResponsiveImageContainer;
