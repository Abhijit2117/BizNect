import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import johnSmit from '../Assets/johnSmit.png'
import jessica from '../Assets/jessica.png'
import sarah from '../Assets/sarah.png'
import biznectlogo from'../Assets/biznectlogo.png'

function Home() {
  return (
    
    <div style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#0c0c0c', color: '#fff6e5' }}>
      <header style={{ backgroundColor: '#0c0c0c', padding: '2px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={biznectlogo} alt="John Smith" style={{ width: '400px', height: '250px', borderRadius: '50%', marginBottom: '1px', marginLeft:-80}} />

        <nav>
          {['How it Works', 'Business', 'Client', 'Contact', 'Login', 'Sign Up'].map(link => (
            <a
              key={link}
              href="#"
              style={{ color: '#fff6e5', margin: '0 15px', textDecoration: 'none', fontWeight: 500 }}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '1px 40px' }}>
        <div style={{ maxWidth: '50%', marginTop:-60}}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Connecting Businesses with Clients</h1>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ccc' }}>
            Join our platform to find the right clients and grow your business.
          </p>
          <div>
            <a href='signup'>
            <button style={{ padding: '12px 24px', fontSize: '16px', marginRight: '15px', cursor: 'pointer', border: 'none', borderRadius: '6px', backgroundColor: 'gold', color: '#0c0c0c' }}>I'm a Business</button>
            </a>
            <a href='signup'>
            <button style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', border: '2px solid gold', borderRadius: '6px', backgroundColor: 'transparent', color: 'gold' }}>I'm a Client</button>
         </a>
          </div>
        </div>
        <div>
          <img src={johnSmit} alt="Business Man" style={{ maxWidth: '450px', borderRadius: '10px', marginTop:-100}}/>
        </div>
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', padding: '60px 40px' }}>
        <div>
          <h2>For Businesses</h2>
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}>
           <center><img src={johnSmit} alt="John Smith" style={{ width: '200px', height: '270px', borderRadius: '50%', marginBottom: '15px'}} />
           </center> <h3 style={{ margin: '5px 0', color: 'gold' }}>John Smit</h3>
            <p><strong>Business Owner</strong></p>
            <p>Location: New York, NY</p>
            <p>Industry: Retail</p>
          </div>
        </div>

        <div>
          <h2>For Clients</h2>
            <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}>
              <img src={jessica} style={{ width: '200px', height: '250px', borderRadius: '50%', marginBottom: '15px' }} />
              <h3 style={{ margin: '5px 0', color: 'gold' }}>Jessica Lee</h3>
               <p><strong>Content Creator</strong></p>
            <p>Location: New York, NY</p>
            <p>Industry: Content</p>
                <button style={{ marginTop: '10px', backgroundColor: 'gold', color: '#0c0c0c', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                  View Profile
                </button>
              
                <div>
                <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '200px', textAlign: 'center' }}>
                <center><img src={sarah} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} /></center>
                 <h3 style={{ margin: '5px 0', color: 'gold' }}>Sarah Johnson</h3>
                  <p><strong>Digital Marketing</strong></p>
                  <p>Location: New York, NY</p>
                  <p>Industry: Content</p>
                  <button style={{ marginTop: '10px', backgroundColor: 'gold', color: '#0c0c0c', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                  View Profile
                </button>
                  </div>

                </div>
              
            </div>
          
        </div>
      </section>
    </div>
  );
}

export default Home;
