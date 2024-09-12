import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icon-container">
                {/* LinkedIn Icon */}
                <a
                    href="https://www.linkedin.com/in/adamedarcy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.239c.837 0 1.515-.679 1.515-1.515a1.515 1.515 0 1 0-3.03 0c0 .836.678 1.515 1.515 1.515zm4.908 8.239h2.4v-4.025c0-.964.018-2.203-1.345-2.203-1.348 0-1.555 1.054-1.555 2.136v4.092h2.4v-7.225h-2.4v1.003h-.034c-.334-.634-1.155-1.303-2.377-1.303-2.54 0-3.012 1.67-3.012 3.84v3.685h2.4z"/>
                    </svg>
                </a>

                {/* Gmail Icon */}
                <a href="mailto:adamedwarddarcy@gmail.com" className="footer-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l6.293 3.972L14 4.217V4a1 1 0 00-1-1H2zm13 2.451l-4.671 2.947L15 11.333V5.451zm-1 .528l-3.182 2.005a1 1 0 01-1.171 0L2 5.979v5.354l4.879-3.08a1 1 0 011.242 0L14 11.333V5.979z"/>
                    </svg>
                </a>
            </div>
            <p className="footer-text">© 2024 Adam Edward DArcy</p>
        </footer>
    );
};

export default Footer;
