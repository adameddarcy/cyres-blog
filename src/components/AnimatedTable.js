import React, { useState, useRef, useEffect } from 'react';
import './AnimatedTable.css'; // Import the CSS for styling and animations

const AnimatedTable = ({ data }) => {
    const tableRef = useRef([]);
    const [visibleRows, setVisibleRows] = useState([]);

    // Extract headers from the keys of the first object in the data array
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    // IntersectionObserver to observe the visibility of each table row
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        setVisibleRows((prevVisibleRows) => [...prevVisibleRows, Number(index)]);
                        observer.unobserve(entry.target); // Stop observing once it becomes visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the row is visible
        );

        tableRef.current.forEach((row, index) => {
            if (row) observer.observe(row);
        });

        return () => observer.disconnect(); // Cleanup the observer when component unmounts
    }, []);

    return (
        <table className="animated-table">
            <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr
                    key={index}
                    ref={(el) => (tableRef.current[index] = el)}
                    data-index={index}
                    className={visibleRows.includes(index) ? 'visible' : 'hidden'}
                >
                    {headers.map((header) => (
                        <td key={`${index}-${header}`}>{row[header]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default AnimatedTable;
