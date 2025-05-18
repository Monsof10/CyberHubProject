import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <nav>
      <Link to="/">Catalog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dos-ddos-article">DoS and DDoS Article</Link>
    </nav>
  );
}

export default Navigation;