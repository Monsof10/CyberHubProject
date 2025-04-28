import React from 'react';

const Profile = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#fcefe3', 
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#000',
      display: 'flex',
      gap: '40px',
      boxSizing: 'border-box'
    }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '220px', 
        backgroundColor: '#fff', 
        borderRadius: '10px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontWeight: '700', marginBottom: '15px', cursor: 'pointer' }}>Account</li>
            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Goal Settings</li>
            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Mail Settings</li>
            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Payment and Plan</li>
            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Linked Accounts</li>
            <li style={{ marginBottom: '10px', cursor: 'pointer', color: 'red' }}>Delete Account</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* User Info Section */}
        <section style={{ 
          backgroundColor: '#fff', 
          borderRadius: '10px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
          padding: '30px',
          marginBottom: '30px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="User Profile" 
              style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
            />
            <div>
              <h2 style={{ margin: 0, fontWeight: '700' }}>@medNacefZouaoui0824285719</h2>
              <p style={{ margin: '5px 0 0 0', color: '#555' }}>Med Nacef Zouaoui</p>
              <button style={{
                marginTop: '10px',
                backgroundColor: 'transparent',
                border: '2px solid #5a2dff',
                color: '#5a2dff',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: '600'
              }}>
                Edit Profile
              </button>
            </div>
          </div>
          <p style={{ color: '#555', marginBottom: 0 }}>Last active about 9 hours ago</p>
          <p style={{ color: '#555', marginTop: '5px' }}>Joined Nov 17, 2020</p>
        </section>

        {/* Services Section */}
        <section style={{ 
          backgroundColor: '#fff', 
          borderRadius: '10px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
          padding: '20px',
          marginBottom: '30px',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ marginTop: 0, fontWeight: '700' }}>Services</h3>
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            padding: '15px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div>
              <strong>Peer support</strong>
              <p style={{ margin: 0 }}>Join the CyberHub Community to start connecting with peers!</p>
            </div>
            <button style={{
              backgroundColor: 'transparent',
              border: '2px solid #5a2dff',
              color: '#5a2dff',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Join community
            </button>
          </div>
        </section>

        {/* Latest Courses Section */}
        <section style={{ 
          backgroundColor: '#fff', 
          borderRadius: '10px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ marginTop: 0, fontWeight: '700' }}>Latest Courses</h3>
          <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <small>Course</small>
              <p style={{ margin: 0, fontWeight: '700' }}>Deploying with Render</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '100px', height: '10px', backgroundColor: '#ddd', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '22%', height: '100%', backgroundColor: '#f1c40f' }}></div>
              </div>
              <span>22%</span>
              <span style={{ fontWeight: '700', cursor: 'pointer' }}>{'>'}</span>
            </div>
          </div>
          <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <small>Skill Path</small>
              <p style={{ margin: 0, fontWeight: '700' }}>XK0-005: CompTIA Linux+</p>
            </div>
            <span style={{ fontWeight: '700', cursor: 'pointer' }}>{'>'}</span>
          </div>
          <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <small>Skill Path</small>
              <p style={{ margin: 0, fontWeight: '700' }}>312-50: Certified Ethical Hacker v12</p>
            </div>
            <span style={{ fontWeight: '700', cursor: 'pointer' }}>{'>'}</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
