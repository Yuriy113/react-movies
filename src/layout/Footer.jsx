import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="footer-copyright grey darken-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="right grey darken-1" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
