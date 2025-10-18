import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
  const params = useParams()
  const [commentData, setCommentData] = useState({
    fullName: '',
    email: '',
    website: '',
    comment: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  
  pageTitle('Mobile & Web Development Insights');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!commentData.fullName || !commentData.email || !commentData.comment) {
      setSubmitMessage('Please fill in all required fields');
      return;
    }
    
    // Get existing comments from localStorage
    const existingComments = JSON.parse(localStorage.getItem('blog_comments') || '[]');
    
    // Add new comment with timestamp and blog post ID
    const newComment = {
      ...commentData,
      blogPostId: params.blogDetailsId,
      submittedAt: new Date().toISOString(),
      id: Date.now()
    };
    
    existingComments.push(newComment);
    
    // Save to localStorage
    localStorage.setItem('blog_comments', JSON.stringify(existingComments));
    
    setSubmitMessage('Thank you for your comment! It has been submitted for review.');
    
    // Reset form
    setCommentData({
      fullName: '',
      email: '',
      website: '',
      comment: ''
    });
    
    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Mobile & Web Development Insights'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/post_5.jpeg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">07 Mar 2025</span>
                  <Link to="/blog" className="cs-post_avatar">Web & Mobile Development</Link>
                </Div>
                <h2 className="cs-post_title">Transforming Ideas into Digital Solutions: Web & Mobile Development Excellence</h2>
                <p>At our development studio, we specialize in creating cutting-edge web and mobile applications that transform business ideas into powerful digital experiences. Our team of expert developers works across multiple programming languages and platforms to deliver innovative solutions for iOS, Android, and web environments. We combine technical excellence with creative design to build applications that not only look stunning but also provide exceptional user experiences across all devices.</p>
                <blockquote className="cs-primary_font">
                  Excellence in digital development requires mastery across multiple platforms. We don't just build applications; we create comprehensive digital ecosystems that work seamlessly across web, iOS, and Android. Our commitment to technical innovation and user-centric design drives us to deliver solutions that exceed expectations.
                  <small>Lead Developer</small>
                </blockquote>
                <p>Our development process is meticulously designed to ensure every project meets the highest standards of quality and innovation. From initial concept to final deployment, we work closely with our clients to understand their vision and transform it into a reality that resonates with users. Our expertise spans across multiple programming languages including JavaScript, Python, Swift, Kotlin, and React Native, ensuring your application reaches the widest possible audience while maintaining optimal performance across all platforms.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>Cross-Platform Excellence: Our Development Philosophy</h3>
                <p>What sets our development approach apart is our comprehensive expertise across multiple platforms and technologies. We don't just build applications; we create integrated digital experiences that work seamlessly across web, iOS, and Android environments. Our team stays ahead of the curve by continuously exploring new frameworks, programming languages, and development methodologies. This forward-thinking approach allows us to deliver solutions that not only meet current needs but also anticipate future technological shifts, ensuring your digital presence remains competitive and relevant.</p>
                <p>We believe that exceptional web and mobile applications are born from the perfect blend of technical expertise and creative problem-solving. Our development process incorporates the latest industry best practices while maintaining the flexibility to adapt to the unique requirements of each project. Whether you're a startup launching your first product or an established business seeking to expand your digital footprint, we have the multi-platform expertise to bring your vision to life.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={commentData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  value={commentData.email}
                  onChange={handleInputChange}
                  required
                />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website</label>
                <input
                  type="url"
                  className="cs-form_field"
                  name="website"
                  value={commentData.website}
                  onChange={handleInputChange}
                />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea
                  cols={30}
                  rows={7}
                  className="cs-form_field"
                  name="comment"
                  value={commentData.comment}
                  onChange={handleInputChange}
                  required
                />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              {submitMessage && (
                <Div className="col-lg-12">
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
              <Div className="col-lg-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title="Let's build <br />something <i>amazing</i> together"
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
