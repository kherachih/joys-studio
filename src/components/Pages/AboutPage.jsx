import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
const funfaceData = [
  {
    title: 'Happy Clients Worldwide',
    factNumber: '500+',
  },
  {
    title: 'Apps & Websites Delivered',
    factNumber: '1200+',
  },
  {
    title: 'Expert Developers',
    factNumber: '25+',
  },
  {
    title: 'Programming Languages',
    factNumber: '15+',
  },
];

export default function AboutPage() {
  pageTitle('About Joys Studio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Joys Studio"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for digital innovation"
              subtitle="About Joys Studio"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Joys Studio, we specialize in transforming ideas into powerful digital solutions through expert application and web development. Our team of skilled developers works across multiple platforms and programming languages to create innovative mobile apps for iOS and Android, as well as robust web applications. We combine technical excellence with creative problem-solving to deliver solutions that drive business growth and enhance user experiences.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our Development Excellence"
          subtitle="We pride ourselves on delivering exceptional digital solutions across multiple platforms. Our expertise spans from native mobile development to cross-platform solutions, ensuring your project reaches its full potential."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Expert developers with diverse technical skills"
              subtitle="Why Choose Joys Studio"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                What sets Joys Studio apart is our comprehensive expertise across multiple development platforms and programming languages. Our team specializes in iOS development with Swift, Android development with Kotlin, cross-platform solutions with React Native, and robust web applications using modern JavaScript frameworks. This diverse skill set allows us to choose the perfect technology stack for your specific needs.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We follow industry best practices and agile methodologies to ensure efficient development cycles and high-quality deliverables. Our commitment to staying current with emerging technologies means your applications will be built using the most advanced and suitable tools available, ensuring scalability, performance, and maintainability.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section - Temporarily Hidden */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Talented development <br/>professionals"
          subtitle="Our Development Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let's build <br />something <i>amazing</i> together"
          btnText="Schedule a Consultation"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
