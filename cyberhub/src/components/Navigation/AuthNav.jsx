import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
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
  );
}
