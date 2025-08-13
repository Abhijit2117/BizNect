import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import johnSmit from '../Assets/johnSmit.png'
import jessica from '../Assets/jessica.png'
import sarah from '../Assets/sarah.png'
import biznectlogo from'../Assets/biznectlogo.png'
import keyoo from'../Assets/keyoo.png'
import Homefamily from'../Assets/Homefamily.jpeg'
function Home() {
//   return (
    
//     <div style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#0c0c0c', color: '#fff6e5' }}>
//       <header style={{ backgroundColor: '#0c0c0c', padding: '2px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <img src={biznectlogo} alt="John Smith" style={{ width: '400px', height: '250px', borderRadius: '50%', marginBottom: '1px', marginLeft:-80}} />

//         <nav>
//           {['How it Works', 'Business', 'Client', 'Contact', 'Login', 'Sign Up'].map(link => (
//             <a
//               key={link}
//               href="#"
//               style={{ color: '#fff6e5', margin: '0 15px', textDecoration: 'none', fontWeight: 500 }}>
//               {link}
//             </a>
//           ))}
//         </nav>
//       </header>

//       <section style={{ display: 'flex', justifyContent: 'space-between', padding: '1px 40px' }}>
//         <div style={{ maxWidth: '50%', marginTop:-60}}>
//           <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Connecting Businesses with Clients</h1>
//           <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ccc' }}>
//             Join our platform to find the right clients and grow your business.
//           </p>
//           <div>
//             <a href='signup'>
//             <button style={{ padding: '12px 24px', fontSize: '16px', marginRight: '15px', cursor: 'pointer', border: 'none', borderRadius: '6px', backgroundColor: 'gold', color: '#0c0c0c' }}>I'm a Business</button>
//             </a>
//             <a href='signup'>
//             <button style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', border: '2px solid gold', borderRadius: '6px', backgroundColor: 'transparent', color: 'gold' }}>I'm a Client</button>
//          </a>
//           </div>
//         </div>
//         <div>
//           <img src={johnSmit} alt="Business Man" style={{ maxWidth: '450px', borderRadius: '10px', marginTop:-100}}/>
//         </div>
//       </section>

//       <section style={{ display: 'flex', justifyContent: 'space-between', padding: '60px 40px' }}>
//         <div>
//           <h2>For Businesses</h2>
//           <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}>
//            <center><img src={johnSmit} alt="John Smith" style={{ width: '200px', height: '270px', borderRadius: '50%', marginBottom: '15px'}} />
//            </center> <h3 style={{ margin: '5px 0', color: 'gold' }}>John Smit</h3>
//             <p><strong>Business Owner</strong></p>
//             <p>Location: New York, NY</p>
//             <p>Industry: Retail</p>
//           </div>
//         </div>

//         <div>
//           <h2>For Clients</h2>
//             <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '260px', textAlign: 'center' }}>
//               <img src={jessica} style={{ width: '200px', height: '250px', borderRadius: '50%', marginBottom: '15px' }} />
//               <h3 style={{ margin: '5px 0', color: 'gold' }}>Jessica Lee</h3>
//                <p><strong>Content Creator</strong></p>
//             <p>Location: New York, NY</p>
//             <p>Industry: Content</p>
//                 <button style={{ marginTop: '10px', backgroundColor: 'gold', color: '#0c0c0c', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
//                   View Profile
//                 </button>
              
//                 <div>
//                 <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '20px', margin: '10px', width: '200px', textAlign: 'center' }}>
//                 <center><img src={sarah} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} /></center>
//                  <h3 style={{ margin: '5px 0', color: 'gold' }}>Sarah Johnson</h3>
//                   <p><strong>Digital Marketing</strong></p>
//                   <p>Location: New York, NY</p>
//                   <p>Industry: Content</p>
//                   <button style={{ marginTop: '10px', backgroundColor: 'gold', color: '#0c0c0c', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
//                   View Profile
//                 </button>
//                   </div>

//                 </div>
              
//             </div>
          
//         </div>
//       </section>
//     </div>
//   );
// }





//   return (
//     <div className="min-h-screen bg-[#0c0c0c] text-[#fff6e5] font-sans">
//       {/* NAVBAR */}
//       <header className="container mx-auto px-6 md:px-10 py-6 flex items-center justify-between" style={{ backgroundColor: '#0c0c0c', padding: '5px 40px', display: 'flex'}}>
//         <div className="flex items-center gap-4">
//           <img src={biznectlogo} alt="BizNect" className="w-40 md:w-48 object-contain" style={{ width: '500px', height: '300px', borderRadius: '50%', marginBottom: '-250px', marginTop:'-200', marginLeft:-100}} />
//         </div>

//         <nav className="hidden md:flex items-center gap-8 text-[#d4cfab]">
//           {["How it Works", "Business", "Client", "Contact", "Login", "Sign Up"].map((x) => (
//             <a key={x} href="#" className="hover:opacity-80">
//               {x}
//             </a>
//           ))}
//         </nav>

//         {/* mobile menu button (basic) */}
//         <div className="md:hidden">
//           <button aria-label="open menu" className="text-[#d4af37]">Menu</button>
//         </div>
//       </header>

//       {/* HERO */}
//       <main className="container mx-auto px-6 md:px-10">
//         <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-12">
//           {/* Left content */}
//           <div className="md:col-span-7">
//             <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
//               Connecting <br /> Businesses with <br /> Clients
//             </h1>

//             <p className="text-gray-300 max-w-xl mb-8">
//               Join our platform to find the right clients and grow your business.
//               Seamless connections, premium service providers and a trusted experience.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <a href="/signup" className="block">
//                 <button className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-medium shadow-sm hover:brightness-95 transition">
//                   I'm a Business
//                 </button>
//               </a>

//               <a href="/signup" className="block">
//                 <button className="border-2 border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md font-medium hover:bg-[#d4af37] hover:text-black transition">
//                   I'm a Client
//                 </button>
//               </a>
//             </div>
//           </div>

//           {/* Right johnSmit image */}
//           <div className="md:col-span-5 flex justify-center md:justify-end">
//             <div className="relative w-full max-w-md">
//               <img
//                 src={johnSmit}
//                 alt="johnSmit"
//                 className="rounded-lg object-cover w-full shadow-2xl"
//                 style={{ maxHeight: 520 }}
//               />
//               {/* subtle gold glow behind hero (non-intrusive) */}
//               <div
//                 aria-hidden
//                 className="absolute -inset-6 rounded-lg pointer-events-none"
//                 style={{
//                   boxShadow: "0 30px 80px rgba(212,175,55,0.06)",
//                   zIndex: -1,
//                 }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* CARDS SECTION */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
//           {/* For Businesses */}
//           <div>
//             <h2 className="text-3xl font-serif mb-6">For Businesses</h2>

//             <article className="bg-[#121212] border border-gray-800 rounded-2xl p-6 max-w-md">
//               <div className="flex items-start gap-6">
//                 <img src={johnSmit} alt="John" className="w-28 h-28 rounded-full object-cover" />
//                 <div>
//                   <h3 className="text-xl font-semibold">John Smith</h3>
//                   <p className="text-[#d4af37] font-medium mt-1">Business Owner</p>
//                   <p className="text-gray-400 mt-3">Location: New York, NY</p>
//                   <p className="text-gray-400">Industry: Retail</p>
//                 </div>
//               </div>
//             </article>
//           </div>

//           {/* For Clients */}
//           <div>
//             <h2 className="text-3xl font-serif mb-6">For Clients</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="bg-[#121212] border border-gray-800 rounded-2xl p-4">
//                 <img src={sarah} alt="Sarah" className="w-full h-40 object-cover rounded-md mb-4" />
//                 <h4 className="text-lg font-semibold text-[#d4af37]">Sarah Johnson</h4>
//                 <p className="text-gray-300">Social Media Manager</p>
//                 <button className="mt-3 bg-[#d4af37] text-black px-4 py-2 rounded-md">View Profile</button>
//               </div>

//               <div className="bg-[#121212] border border-gray-800 rounded-2xl p-4">
//                 <img src={jessica} alt="Jessica" className="w-full h-40 object-cover rounded-md mb-4" />
//                 <h4 className="text-lg font-semibold text-[#d4af37]">Jessica Lee</h4>
//                 <p className="text-gray-300">Digital Marketing Specialist</p>
//                 <button className="mt-3 bg-[#d4af37] text-black px-4 py-2 rounded-md">View Profile</button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Optional extra row with small cards or features */}
//         <section className="py-10">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 text-center">
//               <h5 className="text-lg font-semibold text-[#d4af37] mb-2">Verified Providers</h5>
//               <p className="text-gray-300">Hand-picked professionals with proven results.</p>
//             </div>
//             <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 text-center">
//               <h5 className="text-lg font-semibold text-[#d4af37] mb-2">Secure Payments</h5>
//               <p className="text-gray-300">Fast and secure transactions with protection.</p>
//             </div>
//             <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 text-center">
//               <h5 className="text-lg font-semibold text-[#d4af37] mb-2">24/7 Support</h5>
//               <p className="text-gray-300">Always-on support to help you succeed.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}
//       <footer className="border-t border-gray-900 mt-10">
//         <div className="container mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-[#d4af37] font-semibold">BizNect</div>
//           <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BizNect. All rights reserved.</p>
//           <div className="flex gap-4">
//             <a href="#" className="text-gray-400 hover:text-[#d4af37]">Privacy</a>
//             <a href="#" className="text-gray-400 hover:text-[#d4af37]">Terms</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }






  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#000", color: "#fff", margin: 0, padding: 0 }}>
      
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px", backgroundColor: "#111" }}>
        <img src={biznectlogo} alt="BizNect" style={{ width: "300px", height: "auto", borderRadius: "10px", marginBottom:"-70px", marginTop:"-50px", marginLeft:"-40px"}} />
        <nav>
          <a href= "home" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Home</a>
          <a href="login" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Login</a>
          <a href="signup" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Signup</a>
          <a href="#services" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Services</a>
          <a href="#team" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Team</a>
          <a href="#contact" style={{ color: "#FFD700", margin: "0 15px", textDecoration: "none", fontWeight: "bold" }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(135deg, #000, #222)" }}>
        <h1 style={{ fontSize: "3rem", color: "#FFD700", marginBottom: "20px" }}>Welcome to BizNect</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#ddd" }}>
          Connecting Businesses with the Right Services — Social Media Handling, Digital Solutions.
        </p>
        <a href="signup">
        <button style={{ marginTop: "30px", padding: "15px 30px", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#FFD700", border: "none", borderRadius: "30px", cursor: "pointer" }}>
          Get Started
        </button>
        </a>
      </section>

      {/* Services */}
      <section 
  id="services"
  style={{
    padding: "450px 40px",
    textAlign: "center",
   backgroundImage: `url(${Homefamily})`,
   backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom:"-250px"
        
   
   
  }}>
  {/* <h2
    style={{
      fontSize: "2.5rem",
      color: "#FFD700",
      marginBottom: "1px",
      marginTop:"-300px"
    }}
  >
    Our Services
  </h2> */}

  {/* <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    }}
  >
    {/* Service 1 */}
    {/* <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(255,215,0,0.5)",
      }}
    >
      <img
        src={keyoo}
        alt="Social Media"
        style={{
          width: '550px',
          height:'300px',
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>Social Media</h3>
      <p style={{ color: "#ccc" }}>
        Boost your online presence with professional management.
      </p>
    </div> */}

   
    {/* Service 2 */}
    {/* <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(255,215,0,0.5)",
      }}
    >
      <img
        src={johnSmit}
        alt="Real Estate Services"
        style={{
          width: '600px',
          height:'450px',
          borderRadius: "10px",
          marginBottom: "-60px",
          marginTop:"-60px",
          
        }}
      />
      <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>
        Real Estate Services
      </h3>
      <p style={{ color: "#ccc" }}>
        Connecting property owners with the right clients.
      </p>
    </div> 
  </div>*/}
</section>


      {/* Team Section */}
      <section id="team" style={{ padding: "60px 20px", backgroundColor: "#111", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#FFD700", marginBottom: "40px" }}>Meet Our Team</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {[
            { name: "John Smith", role: "CEO", img: "https://via.placeholder.com/200" },
            { name: "Jessica Brown", role: "Marketing Head", img: "https://via.placeholder.com/200" },
            { name: "Sarah Lee", role: "Creative Director", img: "https://via.placeholder.com/200" }
          ].map((member, index) => (
            <div key={index} style={{ backgroundColor: "#000", padding: "20px", borderRadius: "15px", width: "250px", textAlign: "center", boxShadow: "0 0 10px rgba(255,215,0,0.5)" }}>
              <img src={member.img} alt={member.name} style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "15px" }} />
              <h3 style={{ color: "#FFD700", marginBottom: "5px" }}>{member.name}</h3>
              <p style={{ color: "#ccc" }}>{member.role}</p>
            </div>
          ))}
        </div>
        
      </section>

      {/* Footer */}
      <footer id="contact" style={{ backgroundColor: "#000", padding: "30px", textAlign: "center", borderTop: "1px solid #FFD700" }}>
        <p style={{ color: "#FFD700" }}>© {new Date().getFullYear()} BizNect. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Home;