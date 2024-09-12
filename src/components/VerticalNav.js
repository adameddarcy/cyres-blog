import React, { useState, useEffect, createContext, useContext } from 'react';
import './VerticalNav.css'; // Import the CSS for styling

// Create a context to share the sections and subsections between VerticalNav and its children
const NavContext = createContext();

const VerticalNav = ({ children }) => {
    const [activeSection, setActiveSection] = useState('');
    const sections = [];

    // Update the active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = '';
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.id);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section.id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <NavContext.Provider value={{ sections, activeSection, setActiveSection }}>
            {/* Fixed position navigation that won't interfere with footer */}
            <nav className="vertical-nav">
                {React.Children.map(children, child =>
                    child.type === VerticalNav.Link || child.type === VerticalNav.SubLink ? child : null
                )}
            </nav>
            <div className="content-wrapper">
                {React.Children.map(children, child =>
                    child.type === VerticalNav.Section || child.type === VerticalNav.SubSection ? child : null
                )}
            </div>
        </NavContext.Provider>
    );
};

// Link Component for navigation links
const Link = ({ id, label }) => {
    const { activeSection, sections } = useContext(NavContext);

    // Add section to the context
    useEffect(() => {
        sections.push({ id, label });
    }, [id, label, sections]);

    return (
        <a
            href={`#${id}`}
            className={`nav-link ${activeSection === id ? 'active' : ''}`}
        >
            {label}
        </a>
    );
};

// SubLink Component for navigation sub-links (indented in the nav)
const SubLink = ({ id, label }) => {
    const { activeSection, sections } = useContext(NavContext);

    // Add sub-section to the context
    useEffect(() => {
        sections.push({ id, label });
    }, [id, label, sections]);

    return (
        <a
            href={`#${id}`}
            className={`nav-link sub-link ${activeSection === id ? 'active' : ''}`}
        >
            {label}
        </a>
    );
};

// Section Component for rendering sections
const Section = ({ id, children }) => {
    return (
        <section id={id} className="section">
            {children}
        </section>
    );
};

// SubSection Component for rendering sub-sections within a section
const SubSection = ({ id, children }) => {
    return (
        <div id={id} className="sub-section">
            {children}
        </div>
    );
};

// Attach the Link, SubLink, Section, and SubSection components to the VerticalNav object
VerticalNav.Link = Link;
VerticalNav.SubLink = SubLink;
VerticalNav.Section = Section;
VerticalNav.SubSection = SubSection;

export default VerticalNav;
