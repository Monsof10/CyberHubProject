import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { supabase } from '../../supabase/config';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { user } = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const updateEmail = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail
      });

      if (error) throw error;
      
      setMessage({ text: 'Email update initiated. Please check your new email for confirmation.', type: 'success' });
      setNewEmail('');
    } catch (error) {
      setMessage({ text: error.message, type: 'error' });
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ text: 'New passwords do not match', type: 'error' });
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      setMessage({ text: 'Password updated successfully', type: 'success' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage({ text: error.message, type: 'error' });
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#151B3B', 
      padding: '40px',
      color: '#fff'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: '#5DADE2', marginBottom: '30px' }}>Account Settings</h2>

        {message.text && (
          <div style={{ 
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '5px',
            backgroundColor: message.type === 'success' ? '#27AE60' : '#E74C3C',
            color: '#fff'
          }}>
            {message.text}
          </div>
        )}

        {/* Email Update Form */}
        <div style={{ 
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#5DADE2', marginBottom: '20px' }}>Update Email</h3>
          <form onSubmit={updateEmail}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>Current Email</label>
              <input
                type="email"
                value={user?.email}
                disabled
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2C3E50',
                  border: '1px solid #34495E',
                  borderRadius: '5px',
                  color: '#888'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>New Email</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2C3E50',
                  border: '1px solid #34495E',
                  borderRadius: '5px',
                  color: '#fff'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#5DADE2',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Update Email
            </button>
          </form>
        </div>

        {/* Password Update Form */}
        <div style={{ 
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#5DADE2', marginBottom: '20px' }}>Update Password</h3>
          <form onSubmit={updatePassword}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2C3E50',
                  border: '1px solid #34495E',
                  borderRadius: '5px',
                  color: '#fff'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2C3E50',
                  border: '1px solid #34495E',
                  borderRadius: '5px',
                  color: '#fff'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#5DADE2',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate('/profile')}
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Go to Profile
          </button>
          <button
            onClick={() => navigate('/billing')}
            style={{
              backgroundColor: '#5DADE2',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Go to Billing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
