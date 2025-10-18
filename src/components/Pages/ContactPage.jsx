import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    mobile: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');

  pageTitle('Contact Us');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.projectType || !formData.mobile || !formData.message) {
      setSubmitMessage('Please fill in all required fields');
      return;
    }
    
    // Get existing submissions from localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    
    // Add new submission with timestamp
    const newSubmission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      id: Date.now()
    };
    
    existingSubmissions.push(newSubmission);
    
    // Save to localStorage
    localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));
    
    setSubmitMessage('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      projectType: '',
      mobile: '',
      message: ''
    });
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };
  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="tel"
                  className="cs-form_field"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              {submitMessage && (
                <Div className="col-sm-12">
                  <Div style={{
                    padding: '10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '4px',
                    marginBottom: '20px'
                  }}>
                    {submitMessage}
                  </Div>
                </Div>
              )}
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
