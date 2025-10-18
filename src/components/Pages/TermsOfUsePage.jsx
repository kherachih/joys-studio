import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'

export default function TermsOfUsePage() {
  pageTitle('Terms of Use');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Terms of Use'
        bgSrc='/images/about_hero_bg.jpeg'
        pageLinkText='Terms of Use'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-12">
            <h2 className="cs-font_38 cs-m0">Terms of Use for Joys Studio</h2>
            <Spacing lg='30' md='20'/>
            <p className="cs-m0">Last updated: {new Date().toLocaleDateString()}</p>
            <Spacing lg='50' md='30'/>
            
            <h3 className="cs-font_30">1. Acceptance of Terms</h3>
            <p className="cs-m0">
              By accessing and using Joys Studio's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">2. Description of Services</h3>
            <p className="cs-m0">
              Joys Studio provides web and mobile application development services including but not limited to: iOS app development, Android app development, cross-platform solutions, web application development, UI/UX design, and technical consulting. We work with multiple programming languages and frameworks to deliver custom digital solutions.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">3. User Responsibilities</h3>
            <p className="cs-m0">
              Users of our website and services must: (a) provide accurate and complete information when requesting services, (b) respect intellectual property rights, (c) not use our services for any illegal or unauthorized purpose, (d) not attempt to gain unauthorized access to our systems or networks.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">4. Intellectual Property Rights</h3>
            <p className="cs-m0">
              All content, features, and functionality of the Joys Studio website are owned by Joys Studio and are protected by international copyright, trademark, and other intellectual property laws. Custom developed applications and websites remain the property of clients upon full payment, while Joys Studio retains the right to use the work in our portfolio.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">5. Payment Terms</h3>
            <p className="cs-m0">
              Payment terms will be outlined in individual project agreements. Typically, a deposit is required to begin work, with milestone payments throughout the development process. Final payment is due upon project completion and delivery. Late payments may incur additional charges.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">6. Project Timeline and Delivery</h3>
            <p className="cs-m0">
              Project timelines are estimates based on current requirements. Changes to project scope may affect delivery dates. Joys Studio is not liable for delays caused by factors beyond our control, including but not limited to third-party service interruptions, client delays in providing feedback or content, or unforeseen technical challenges.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">7. Confidentiality</h3>
            <p className="cs-m0">
              Both parties agree to maintain confidentiality of all proprietary information shared during the course of business. This includes but is not limited to business plans, technical specifications, source code, and any other information marked as confidential.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">8. Limitation of Liability</h3>
            <p className="cs-m0">
              Joys Studio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability for any claim arising from these terms shall not exceed the amount paid for the specific service in question.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">9. Termination</h3>
            <p className="cs-m0">
              Either party may terminate the agreement with written notice. In case of termination by the client, payment is required for all work completed up to the termination date. Joys Studio reserves the right to terminate services for non-payment or violation of these terms.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">10. Privacy Policy</h3>
            <p className="cs-m0">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">11. Changes to Terms</h3>
            <p className="cs-m0">
              Joys Studio reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modified terms.
            </p>
            <Spacing lg='30' md='20'/>
            
            <h3 className="cs-font_30">12. Contact Information</h3>
            <p className="cs-m0">
              If you have any questions about these Terms of Use, please contact us through our website or via email at: info@joys-studio.click
            </p>
            <Spacing lg='50' md='30'/>
          </Div>
        </Div>
      </Div>
    </>
  )
}