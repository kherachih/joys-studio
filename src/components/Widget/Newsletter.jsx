import React, { useState } from 'react'
import Div from '../Div'

export default function Newsletter({title, subtitle, placeholder}) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email');
      return;
    }
    
    // Get existing emails from localStorage
    const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    
    // Check if email already exists
    if (existingEmails.includes(email)) {
      setMessage('You are already subscribed!');
      return;
    }
    
    // Add new email with timestamp
    const newEmail = {
      email: email,
      subscribedAt: new Date().toISOString()
    };
    
    existingEmails.push(newEmail);
    
    // Save to localStorage
    localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails));
    
    setMessage('Thank you for subscribing!');
    setEmail('');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form onSubmit={handleSubmit} className="cs-newsletter_form">
          <input
            type="email"
            className="cs-newsletter_input"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cs-newsletter_btn">
            <span>Send</span>
          </button>
        </form>
        {message && (
          <Div className="cs-newsletter_message" style={{
            marginTop: '10px',
            padding: '8px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            {message}
          </Div>
        )}
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  )
}
