import {Component} from "react";
import React from 'react';

const Registration = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        overflow: 'hidden', // Prevent scrolling
        background: 'url("loginbg.jpg") no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '90%',
          maxWidth: '400px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Register</h2>
        <form action="Login">
          <input
            type="email"
            placeholder="Email"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Username"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Phone"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </form>
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '1rem',
            color: '#000',
          }}
        >
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;