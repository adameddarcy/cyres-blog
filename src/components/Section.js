import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Section.css'; // Importing the same CSS file for custom styling

const Section = ({ title, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Define the spring animation for smooth transition
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    },
    config: { tension: 220, friction: 20, duration: 1500 },
  });

  // Intersection Observer to detect when the component is visible on the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-container">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <animated.div style={animation} className="section-content">
        {children}
      </animated.div>
    </section>
  );
};

export default Section;
