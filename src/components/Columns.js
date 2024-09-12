import React from 'react';
import './Columns.css'; // Import CSS for styling

const Columns = ({ children }) => {
    return (
        <div className="two-column-container">
            {children}
        </div>
    );
};

// Left Column Component
Columns.Left = ({ children }) => {
    return (
        <div className="left-column">
            {children}
        </div>
    );
};

// Right Column Component
Columns.Right = ({ children }) => {
    return (
        <div className="right-column">
            {children}
        </div>
    );
};

export default Columns;
