import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'

export default function PrivacyPolicyPage() {
  pageTitle('Privacy Policy');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Privacy Policy'
        bgSrc='/images/about_hero_bg.jpeg'
        pageLinkText='Privacy Policy'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-12">
            <h2 className="cs-font_38 cs-m0">Privacy Policy for Joys Studio</h2>
            <Spacing lg='30' md='20'/>
            <p className="cs-m0">Last updated: {new Date().toLocaleDateString()}</p>
            <Spacing lg='50' md='30'/>
            
            <h3 className="cs-font_30">1. Introduction</h3>
            <p className="cs-m0">
              At Joys Studio, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our web and mobile application development services.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">2. Information We Collect</h3>
            <p className="cs-m0">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul className="cs-list cs-style1">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information (Company name, project requirements)</li>
              <li>Technical information (IP address, browser type, device information)</li>
              <li>Project-related data (Source code, designs, documentation)</li>
              <li>Communication records (Emails, meeting notes, project discussions)</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">3. How We Use Your Information</h3>
            <p className="cs-m0">
              Joys Studio uses the collected information for various purposes:
            </p>
            <ul className="cs-list cs-style1">
              <li>To provide and maintain our development services</li>
              <li>To process project requests and deliver completed applications</li>
              <li>To communicate with clients about project progress</li>
              <li>To improve our website and service offerings</li>
              <li>To send periodic emails regarding services, updates, and promotional materials</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">4. Information Sharing and Disclosure</h3>
            <p className="cs-m0">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="cs-list cs-style1">
              <li>To trusted third-party service providers who assist in operating our website</li>
              <li>When required by law or to protect our rights, property, or safety</li>
              <li>In connection with a business transfer, merger, or acquisition</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">5. Data Security</h3>
            <p className="cs-m0">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="cs-list cs-style1">
              <li>Secure servers and encrypted data transmission</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">6. Project Data and Intellectual Property</h3>
            <p className="cs-m0">
              Client project data, including source code, designs, and documentation, is treated as confidential information. We:
            </p>
            <ul className="cs-list cs-style1">
              <li>Store project data on secure, access-controlled systems</li>
              <li>Limit access to authorized team members only</li>
              <li>Transfer full ownership to clients upon project completion and payment</li>
              <li>Retain backup copies for a limited period for technical support purposes</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">7. Cookies and Tracking Technologies</h3>
            <p className="cs-m0">
              Our website uses cookies and similar tracking technologies to enhance your experience. These technologies help us:
            </p>
            <ul className="cs-list cs-style1">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">8. Third-Party Services</h3>
            <p className="cs-m0">
              Our website may integrate with third-party services such as:
            </p>
            <ul className="cs-list cs-style1">
              <li>Payment processors for service transactions</li>
              <li>Analytics services for website performance monitoring</li>
              <li>Cloud hosting providers for application deployment</li>
              <li>Communication platforms for client interactions</li>
            </ul>
            <p className="cs-m0">
              These services have their own privacy policies, and we are not responsible for their practices.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">9. Data Retention</h3>
            <p className="cs-m0">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Project-related data may be retained for extended periods to provide ongoing technical support.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">10. Your Rights</h3>
            <p className="cs-m0">
              You have the right to:
            </p>
            <ul className="cs-list cs-style1">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of the data we hold about you</li>
              <li>Restrict processing of your information in certain circumstances</li>
            </ul>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">11. Children's Privacy</h3>
            <p className="cs-m0">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information immediately.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">12. International Data Transfers</h3>
            <p className="cs-m0">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">13. Changes to This Privacy Policy</h3>
            <p className="cs-m0">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically for any updates.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">14. Contact Information</h3>
            <p className="cs-m0">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="cs-list cs-style1">
              <li>Email: privacy@joys-studio.com</li>
              <li>Website: www.joys-studio.click</li>
              <li>Phone: +213 779 64 60 69</li>
            </ul>
            <Spacing lg='50' md='30'/>
          </Div>
        </Div>
      </Div>
    </>
  )
}