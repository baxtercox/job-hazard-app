import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Baxter Cox | Phone: 540-847-9448 |
            Full Stack Developer | baxtercoxrtr@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
