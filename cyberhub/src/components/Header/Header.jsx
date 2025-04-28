import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <h1>CyberHub</h1>
            </Link>
          </div>
          
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/Sql-injection">SQL Injection</Link>
              </li>
              <li>
                <Link to="/Spoofing">Spoofing</Link>
              </li>
              <li>
                <Link to="/DosAndDdos/Article">DoS & DDoS</Link>
              </li>
            </ul>
          </nav>

          <div className="auth-nav">
            <Link 
              to="/login"
              className="btn-primary me-3"
              style={{
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                marginRight: '10px',
                color: '#fff'
              }}
            >
              Login
            </Link>
            <Link 
              to="/Signup"
              className="btn-outline"
              style={{
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: '#fff',
                border: '1px solid #fff'
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
