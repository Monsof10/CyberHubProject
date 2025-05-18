import React from 'react';

const Billing = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#151B3B', 
      padding: '40px',
      color: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: '#5DADE2', marginBottom: '30px' }}>Billing Information</h2>
        <section style={{ 
          backgroundColor: '#1a2147',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          <p style={{ fontSize: '16px', color: '#ccc', lineHeight: '1.5' }}>
            This is your billing page. Here you can view your subscription details, payment methods, and billing history.
            (This is a placeholder section. You can integrate actual billing data and functionality as needed.)
          </p>
        </section>
      </div>
    </div>
  );
};

export default Billing;
