import React, { useState } from 'react';
import AttackPagesHeader from '../components/AttackPagesHeader/AttackPagesHeader';

export default function Workspace() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <AttackPagesHeader pageType="workspace" />
      <div style={{ overflow: 'hidden', position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{
          fontSize: '48px',
          color: '#1A237E',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          Workspaces
        </h1>
        <section style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          fontSize: '18px',
          color: '#333',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          <h2 style={{ fontSize: '28px', color: '#1A237E', marginBottom: '15px' }}>Your Personalized Workspace</h2>
          <p>
            Welcome to your personalized workspace, crafted just for you. Manage your local projects effortlessly, organize your tasks, and track your progress all in one place. This space is designed to boost your productivity and keep you focused on what matters most.
          </p>
          <h3 style={{ fontSize: '22px', color: '#FF5722', marginTop: '25px', marginBottom: '10px' }}>Organize Your Projects</h3>
          <p>
            Create new projects, open existing ones, and seamlessly connect with your local development environment. Experience a streamlined workflow that enhances your coding journey and helps you achieve your development goals faster.
          </p>
          <h3 style={{ fontSize: '22px', color: '#FF5722', marginTop: '25px', marginBottom: '10px' }}>Stay Productive</h3>
          <p>
            Keep track of your progress, set milestones, and stay motivated with a workspace designed to support your development journey.
          </p>
          <h3 style={{ fontSize: '22px', color: '#FF5722', marginTop: '25px', marginBottom: '10px' }}>Seamless Integration</h3>
          <p>
            Integrate your workspace with local tools and environments to create a cohesive and efficient development experience.
          </p>
        </section>
        <button
          onClick={() => window.open('http://localhost:3000/', '_blank')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: '15px 30px',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: isHovered ? '#FF7043' : '#FF5722',
            border: '2px solid',
            borderColor: isHovered ? '#FF7043' : '#FF5722',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}
        >
          Start Now
        </button>
      </div>
    </>
  );
}
