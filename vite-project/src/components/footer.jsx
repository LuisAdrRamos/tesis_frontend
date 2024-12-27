import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p className="footer-text">Derechos reservados a luis.ramos02@epn.edu.ec - Proyecto Front End</p>
            <p className="footer-text">Quito - Ecuador</p>
            <div className="footer-icons">
                <a href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="Facebook" className="footer-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="footer-icon" />
                </a>
                <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                    <img src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="X (Twitter)" className="footer-icon" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
