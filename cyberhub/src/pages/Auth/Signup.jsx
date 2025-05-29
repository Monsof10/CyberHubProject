import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      setError('');
      setLoading(true);
      const { error } = await signUp(email, password);
      if (error) throw error;
      // Show success message and redirect to login
      alert('Please check your email for verification link');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFF1F1', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
            CyberHub
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Catalog</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Resources</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Community</a>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Pricing</a>
          </div>
        </div>
        <div>
          <Link 
            to="/login"
            style={{
              color: '#6B4BFF',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Log in
          </Link>
        </div>
      </nav>

      {/* Signup Form */}
      <div style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          textAlign: 'center',
          color : '#000'
        }}>
          Sign up for CyberHub
        </h1>

        <div style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#666' }}>* Required</span>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            backgroundColor: '#FEE2E2',
            color: '#DC2626',
            borderRadius: '4px',
            fontSize: '0.875rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' , color : '#000' }}>
              Email*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: loading ? '#F3F4F6' : '#fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color : '#000' }}>
              Password*
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: loading ? '#F3F4F6' : '#fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color : '#000' }}>
              Confirm Password*
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: loading ? '#F3F4F6' : '#fff'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#6B4BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? '0.7' : '1'
            }}
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Or sign up using:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button style={socialButtonStyle}>
              <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={socialButtonStyle}>
              <img src="https://github.com/favicon.ico" alt="GitHub" style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={socialButtonStyle}>
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#666' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#6B4BFF', textDecoration: 'none' }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const socialButtonStyle = {
  width: '40px',
  height: '40px',
  border: '1px solid #ddd',
  borderRadius: '50%',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

export default Signup;
