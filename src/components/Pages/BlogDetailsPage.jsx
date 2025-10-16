import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
  const params = useParams()
  pageTitle('Joys Studio Blog');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Joys Studio Blog'
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
                  <Link to="/blog" className="cs-post_avatar">Mobile Development</Link>
                </Div>
                <h2 className="cs-post_title">Innovative Mobile App Development at Joys Studio</h2>
                <p>At Joys Studio, we specialize in creating cutting-edge mobile applications that transform ideas into powerful digital experiences. Our team of expert developers and designers work tirelessly to deliver innovative solutions that push the boundaries of what's possible in mobile technology. We combine creativity with technical expertise to build apps that not only look stunning but also provide exceptional user experiences.</p>
                <blockquote className="cs-primary_font">
                  Innovation distinguishes between a leader and a follower. At Joys Studio, we don't just follow mobile app trends - we create them. Our commitment to excellence and creativity drives us to deliver solutions that exceed expectations.
                  <small>CEO, Joys Studio</small>
                </blockquote>
                <p>Our mobile app development process is meticulously designed to ensure every project meets the highest standards of quality and innovation. From initial concept to final deployment, we work closely with our clients to understand their vision and transform it into a reality that resonates with users. Our expertise spans across iOS, Android, and cross-platform solutions, ensuring your app reaches the widest possible audience while maintaining optimal performance.</p>
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
                <h3>Mobile Innovation: The Joys Studio Approach</h3>
                <p>What sets Joys Studio apart is our relentless pursuit of innovation. We don't just build apps; we create experiences that captivate and engage users. Our team stays ahead of the curve by continuously exploring new technologies, design trends, and user behavior patterns. This forward-thinking approach allows us to deliver mobile solutions that not only meet current needs but also anticipate future demands, ensuring your app remains relevant and competitive in the ever-evolving mobile landscape.</p>
                <p>At Joys Studio, we believe that great mobile apps are born from the perfect blend of creativity and technical excellence. Our development process incorporates the latest industry best practices while maintaining the flexibility to adapt to the unique requirements of each project. Whether you're a startup looking to make your mark or an established business seeking to enhance your mobile presence, Joys Studio has the expertise and passion to bring your vision to life.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
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
          title="Let's create <br />something <i>innovative</i> together"
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
