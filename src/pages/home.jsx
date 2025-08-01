import React from 'react';

function Home() {
  return (
    <div style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#0c0c0c', color: '#fff6e5' }}>
      <header style={{ backgroundColor: '#0c0c0c', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '28px', color: 'gold', fontWeight: 'bold' }}>BizNect</div>
        <nav>
          {['How it Works', 'Business', 'Client', 'Contact', 'Login', 'Sign Up'].map(link => (
            <a
              key={link}
              href="#"
              style={{ color: '#fff6e5', margin: '0 15px', textDecoration: 'none', fontWeight: 500 }}
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '80px 40px' }}>
        <div style={{ maxWidth: '50%' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Connecting Businesses with Clients</h1>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ccc' }}>
            Join our platform to find the right clients and grow your business.
          </p>
          <div>
            <button style={{ padding: '12px 24px', fontSize: '16px', marginRight: '15px', cursor: 'pointer', border: 'none', borderRadius: '6px', backgroundColor: 'gold', color: '#0c0c0c' }}>I'm a Business</button>
            <button style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', border: '2px solid gold', borderRadius: '6px', backgroundColor: 'transparent', color: 'gold' }}>I'm a Client</button>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x500?text=Business+Man"
            alt="Business Man"
            style={{ maxWidth: '400px', borderRadius: '10px' }}
          />
        </div>
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '60px 40px' }}>
        <div>
          <h2>For Businesses</h2>
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}>
            <img src="https://via.placeholder.com/100?text=JS" alt="John Smith" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ margin: '5px 0', color: 'gold' }}>John Smith</h3>
            <p><strong>Business Owner</strong></p>
            <p>Location: New York, NY</p>
            <p>Industry: Retail</p>
          </div>
        </div>

        <div>
          <h2>For Clients</h2>
          {["Social Media Manager", "Content Creator", "Digital Marketing Specialist"].map((role, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}
            >
              <img src={`https://via.placeholder.com/100?text=${role === 'Digital Marketing Specialist' ? 'JL' : 'SJ'}`} alt={role} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }} />
              <h3 style={{ margin: '5px 0', color: 'gold' }}>{role === 'Digital Marketing Specialist' ? 'Jessica Lee' : 'Sarah Johnson'}</h3>
              <p>{role}</p>
              {role === 'Social Media Manager' && (
                <button style={{ marginTop: '10px', backgroundColor: 'gold', color: '#0c0c0c', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                  View Profile
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
