import React, { useEffect, useState } from 'react';
import Hero4 from '../Hero/Hero4';
import { pageTitle } from '../../helper';
import Div from '../Div';
import FunFact2 from '../FunFact/FunFact2';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import MovingText2 from '../MovingText/MovingText2';
import VideoModal from '../VideoModal';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';
import TimelineSlider from '../Slider/TimelineSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
import LogoList from '../LogoList';
import PostList from '../Post/PostList';
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
const funfaceData = [
  {
    title: 'Mobile Apps Created',
    factNumber: '50+',
  },
  {
    title: 'Happy Clients Worldwide',
    factNumber: '1000+',
  },
  {
    title: 'Projects Completed',
    factNumber: '200+',
  },
  {
    title: 'Expert Developers',
    factNumber: '15+',
  },
];
const serviceData1 = [
  {
    title: 'iOS App Development',
    href: '/service/service-details',
  },
  {
    title: 'Android App Development',
    href: '/service/service-details',
  },
  {
    title: 'Cross-Platform Solutions',
    href: '/service/service-details',
  },
];
const serviceData2 = [
  {
    title: 'Mobile UI/UX Design',
    href: '/service/service-details',
  },
  {
    title: 'App Testing & QA',
    href: '/service/service-details',
  },
  {
    title: 'Mobile App Maintenance',
    href: '/service/service-details',
  },
];
const portfolioData = [
  {
    title: 'VTC Ride Sharing App',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Ecommerce Interface',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'E-learning Platform',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
  {
    title: 'Saas Landing Page',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_14.jpeg',
    category: 'mobile_apps',
  },
  {
    title: 'VTC Payment Integration',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_15.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'VTC Real-time Tracking',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_16.jpeg',
    category: 'web_design',
  },
  {
    title: 'VTC Fleet Management',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'VTC User Dashboard',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'VTC Analytics Platform',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
];

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);
  pageTitle('Joys Studio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="We Are <span>J</span>oys <br />Studio"
        subtitle="We craft innovative mobile applications that transform ideas into powerful digital experiences, delivering cutting-edge solutions for today's mobile-first world."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+213 779 646 069"
        email="info@joys-studio.click"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Mobile app development services we excel in"
          subtitle="Our Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start About Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="At Joys Studio, we transform your mobile app ideas into innovative digital experiences that captivate users and drive business growth"
                subtitle="Why Choose Joys Studio"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <Div className="cs-half_screen cs-style1 cs-size1">
                  <img
                    src="/images/whychoose.png"
                    alt="Joys Studio Mobile App Development"
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      {/* Start Projects Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Mobile apps we've crafted with innovation"
          subtitle="Our Portfolio"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 0 || index === 3 || index === 4
                  ? 'col-lg-8'
                  : 'col-lg-4'
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* End Projects Section */}

      {/* Start Awards Section */}
      <Spacing lg="140" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="Joys Studio recognized for mobile innovation excellence"
              subtitle="Our Awards"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Awards Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Mobile development insights and industry trends"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Trusted by innovative companies worldwide"
          subtitle="Our Valued Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let's create <br />something <i>innovative</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
