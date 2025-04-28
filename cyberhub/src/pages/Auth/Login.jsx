import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(formData.email, formData.password);
      // Navigate to the page user tried to visit or home
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (err) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fcefe3',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: 'transparent'
      }}>
        <div style={{ fontWeight: '700', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
          Cyber<span style={{ fontWeight: '400' }}>Hub</span>
        </div>
        <Link to="/signup" style={{
          backgroundColor: '#5a2dff',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          Sign Up
        </Link>
      </header>

      {/* Form Container */}
      <main style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '400px',
          padding: '40px',
          boxSizing: 'border-box'
        }}>
          <h2 style={{
            marginBottom: '20px',
            fontWeight: '700',
            fontSize: '24px',
            color: '#000',
            fontFamily: 'Arial, sans-serif'
          }}>
            Log in to CyberHub
          </h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>Email or username*</label>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email or username"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 40px 10px 12px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#e6f0ff',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
              <HiOutlineMail style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
                fontSize: '18px'
              }} />
            </div>

            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#000' }}>Password*</label>
            <div style={{ position: 'relative', marginBottom: '30px' }}>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px 40px 10px 12px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor: '#e6f0ff',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
              <HiOutlineLockClosed style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
                fontSize: '18px'
              }} />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{
                width: '100%',
                backgroundColor: loading ? '#9d89ff' : '#5a2dff',
                color: '#fff',
                padding: '12px',
                borderRadius: '5px',
                border: 'none',
                fontWeight: '700',
                fontSize: '16px',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {loading ? (
                <>
                  <LoadingSpinner size="20px" color="#fff" />
                  <span>Logging in...</span>
                </>
              ) : (
                'Log in'
              )}
            </button>
          </form>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#000' }}>
            Not a member yet?{' '}
            <Link to="/signup" style={{ color: '#5a2dff', fontWeight: '600', textDecoration: 'none' }}>
              Sign up for free
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#fcefe3',
        padding: '20px 40px',
        fontSize: '12px',
        color: '#666',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #ddd'
      }}>
        &copy; 2025 CyberHub. All rights reserved.
      </footer>
    </div>
  );
}
