import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../../supabase/config';

const EmailConfirmation = () => {
  const [status, setStatus] = useState('confirming'); // confirming, success, error
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Parse access_token and refresh_token from URL query parameters or hash
        const params = new URLSearchParams(location.search);
        let access_token = params.get('access_token');
        let refresh_token = params.get('refresh_token');

        // Sometimes tokens are in URL hash fragment
        if (!access_token || !refresh_token) {
          const hash = location.hash.substring(1); // remove leading #
          const hashParams = new URLSearchParams(hash);
          access_token = hashParams.get('access_token');
          refresh_token = hashParams.get('refresh_token');
        }

        if (!access_token || !refresh_token) {
          throw new Error('Invalid or missing tokens in confirmation link');
        }

        // Set the session with the tokens
        const { error: sessionError } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (sessionError) throw sessionError;

        // Get the user info
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError) throw userError;

        // Check if email is confirmed
        if (user.email_confirmed_at) {
          setStatus('success');
        } else {
          setError('Email not confirmed yet.');
          setStatus('error');
        }
      } catch (error) {
        console.error('Confirmation error:', error);
        setError(error.message || 'Failed to confirm email');
        setStatus('error');
      }
    };

    confirmEmail();
  }, [location]);

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
        </div>
      </nav>

      {/* Confirmation Status */}
      <div style={{
        maxWidth: '400px',
        margin: '4rem auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        {status === 'confirming' && (
          <>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Confirming your email...
            </h1>
            <p style={{ color: '#666' }}>
              Please wait while we verify your email address.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ margin: '0 auto' }}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#10B981' }}>
              Email Confirmed!
            </h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Your email has been successfully confirmed. You can now log in to your account.
            </p>
            <Link
              to="/login"
              style={{
                backgroundColor: '#6B4BFF',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}
            >
              Go to Login
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ margin: '0 auto' }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#DC2626' }}>
              Confirmation Failed
            </h1>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {error || 'There was a problem confirming your email.'}
            </p>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Please try again or contact support if the problem persists.
            </p>
            <Link
              to="/signup"
              style={{
                backgroundColor: '#6B4BFF',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}
            >
              Back to Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailConfirmation;
