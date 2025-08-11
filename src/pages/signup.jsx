import React from "react";
import biznectlogo from'../Assets/biznectlogo.png'

export default function SignUpPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
                <center><img src={biznectlogo} alt="John Smith" style={{ width: '250px', height: '150px', borderRadius: '50%', marginBottom: '1px'}} /></center>
        <p style={styles.subtitle}>Create Your Account</p>

        <form style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input type="password" placeholder="Confirm Password" style={styles.input} />
          
          <button style={styles.button}>Sign Up</button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <a href="/login" style={styles.loginLink}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000, #3a3a3a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    background: "#111",
    padding: "40px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.5)",
    textAlign: "center",
    border: "1px solid gold",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "gold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#ccc",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #555",
    outline: "none",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "14px",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    backgroundColor: "gold",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  loginText: {
    marginTop: "20px",
    color: "#ccc",
    fontSize: "14px",
  },
  loginLink: {
    color: "gold",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
