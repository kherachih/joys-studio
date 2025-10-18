import React, { useState, useEffect } from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'

export default function EmailSubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [blogComments, setBlogComments] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('subscribers');
  
  pageTitle('Admin Dashboard');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password protection - you can change this password
    if (password === 'joysstudio123') {
      setIsAuthenticated(true);
      loadData();
    } else {
      alert('Incorrect password');
    }
  };

  const loadData = () => {
    const storedEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    const storedContacts = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    const storedComments = JSON.parse(localStorage.getItem('blog_comments') || '[]');
    
    setSubscribers(storedEmails);
    setContactSubmissions(storedContacts);
    setBlogComments(storedComments);
  };

  const exportToJSON = (data, filename) => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', filename);
    linkElement.click();
  };

  const clearAllData = (storageKey, setState) => {
    if (window.confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
      localStorage.removeItem(storageKey);
      setState([]);
      alert('Data has been cleared');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <PageHeading 
          title='Email Subscribers Admin'
          bgSrc='/images/about_hero_bg.jpeg'
          pageLinkText='Admin'
        />
        <Spacing lg='150' md='80'/>
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 offset-lg-3">
              <Div className="cs-box_shadow_1 cs-radius_15 p-5">
                <h3 className="cs-font_30 cs-m0">Admin Login</h3>
                <Spacing lg='30' md='20'/>
                <form onSubmit={handleLogin}>
                  <label className="cs-primary_color">Enter Password:</label>
                  <input 
                    type="password" 
                    className="cs-form_field w-100"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Spacing lg='20' md='20'/>
                  <button type="submit" className="cs-btn cs-style1">
                    <span>Login</span>
                  </button>
                </form>
              </Div>
            </Div>
          </Div>
        </Div>
      </>
    );
  }

  return (
    <>
      <PageHeading 
        title='Email Subscribers Admin'
        bgSrc='/images/about_hero_bg.jpeg'
        pageLinkText='Admin'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-12">
            <Div className="cs-box_shadow_1 cs-radius_15 p-5">
              <Div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="cs-font_30 cs-m0">Admin Dashboard</h3>
              </Div>
              
              {/* Tab Navigation */}
              <Div className="cs-tabs mb-4">
                <button
                  className={`cs-tab_btn ${activeTab === 'subscribers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('subscribers')}
                >
                  Newsletter Subscribers ({subscribers.length})
                </button>
                <button
                  className={`cs-tab_btn ${activeTab === 'contacts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contacts')}
                >
                  Contact Forms ({contactSubmissions.length})
                </button>
                <button
                  className={`cs-tab_btn ${activeTab === 'comments' ? 'active' : ''}`}
                  onClick={() => setActiveTab('comments')}
                >
                  Blog Comments ({blogComments.length})
                </button>
              </Div>

              {/* Newsletter Subscribers Tab */}
              {activeTab === 'subscribers' && (
                <>
                  <Div className="d-flex justify-content-between align-items-center">
                    <h4 className="cs-font_24 cs-m0">Newsletter Subscribers</h4>
                    <Div>
                      <button onClick={() => exportToJSON(subscribers, `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.json`)} className="cs-btn cs-style1 me-3">
                        <span>Export to JSON</span>
                      </button>
                      <button onClick={() => clearAllData('newsletter_emails', setSubscribers)} className="cs-btn cs-style2">
                        <span>Clear All</span>
                      </button>
                    </Div>
                  </Div>
                  <Spacing lg='30' md='20'/>
                  <Div className="cs-table_responsive">
                    <table className="cs-table cs-style1">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Email</th>
                          <th>Subscribed At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscribers.length === 0 ? (
                          <tr>
                            <td colSpan="3" className="text-center">No subscribers yet</td>
                          </tr>
                        ) : (
                          subscribers.map((subscriber, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subscriber.email}</td>
                              <td>{new Date(subscriber.subscribedAt).toLocaleString()}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Div>
                  <Spacing lg='20' md='20'/>
                  <p className="cs-m0 cs-primary_color">
                    Total Subscribers: {subscribers.length}
                  </p>
                </>
              )}

              {/* Contact Forms Tab */}
              {activeTab === 'contacts' && (
                <>
                  <Div className="d-flex justify-content-between align-items-center">
                    <h4 className="cs-font_24 cs-m0">Contact Form Submissions</h4>
                    <Div>
                      <button onClick={() => exportToJSON(contactSubmissions, `contact_submissions_${new Date().toISOString().split('T')[0]}.json`)} className="cs-btn cs-style1 me-3">
                        <span>Export to JSON</span>
                      </button>
                      <button onClick={() => clearAllData('contact_submissions', setContactSubmissions)} className="cs-btn cs-style2">
                        <span>Clear All</span>
                      </button>
                    </Div>
                  </Div>
                  <Spacing lg='30' md='20'/>
                  <Div className="cs-table_responsive">
                    <table className="cs-table cs-style1">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Project Type</th>
                          <th>Mobile</th>
                          <th>Page Source</th>
                          <th>Submitted At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactSubmissions.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="text-center">No contact submissions yet</td>
                          </tr>
                        ) : (
                          contactSubmissions.map((submission, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{submission.fullName}</td>
                              <td>{submission.email}</td>
                              <td>{submission.projectType}</td>
                              <td>{submission.mobile}</td>
                              <td>{submission.pageSource || 'Contact Page'}</td>
                              <td>{new Date(submission.submittedAt).toLocaleString()}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Div>
                  <Spacing lg='20' md='20'/>
                  <p className="cs-m0 cs-primary_color">
                    Total Contact Submissions: {contactSubmissions.length}
                  </p>
                </>
              )}

              {/* Blog Comments Tab */}
              {activeTab === 'comments' && (
                <>
                  <Div className="d-flex justify-content-between align-items-center">
                    <h4 className="cs-font_24 cs-m0">Blog Comments</h4>
                    <Div>
                      <button onClick={() => exportToJSON(blogComments, `blog_comments_${new Date().toISOString().split('T')[0]}.json`)} className="cs-btn cs-style1 me-3">
                        <span>Export to JSON</span>
                      </button>
                      <button onClick={() => clearAllData('blog_comments', setBlogComments)} className="cs-btn cs-style2">
                        <span>Clear All</span>
                      </button>
                    </Div>
                  </Div>
                  <Spacing lg='30' md='20'/>
                  <Div className="cs-table_responsive">
                    <table className="cs-table cs-style1">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Website</th>
                          <th>Comment</th>
                          <th>Blog Post</th>
                          <th>Submitted At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogComments.length === 0 ? (
                          <tr>
                            <td colSpan="7" className="text-center">No blog comments yet</td>
                          </tr>
                        ) : (
                          blogComments.map((comment, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{comment.fullName}</td>
                              <td>{comment.email}</td>
                              <td>{comment.website || '-'}</td>
                              <td>{comment.comment.substring(0, 100)}{comment.comment.length > 100 ? '...' : ''}</td>
                              <td>{comment.blogPostId}</td>
                              <td>{new Date(comment.submittedAt).toLocaleString()}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Div>
                  <Spacing lg='20' md='20'/>
                  <p className="cs-m0 cs-primary_color">
                    Total Blog Comments: {blogComments.length}
                  </p>
                </>
              )}
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  )
}