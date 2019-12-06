import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footer-copyright text-center py-3">
          © 2019 Copyright |<Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
