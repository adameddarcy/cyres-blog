import React from 'react';
import './Reference.css'; // Import CSS for styling

const Reference = ({ link }) => {
    return (
        <sup className="reference">
            <a href={link} target="_blank" rel="noopener noreferrer">
                &#x1F517; {/* Unicode for link symbol */}
            </a>
        </sup>
    );
};

export default Reference;
