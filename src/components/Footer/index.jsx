import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const serviceMenu = [
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
  {
    title: 'Mobile UI/UX Design',
    href: '/service/service-details',
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Joys Studio"
                  text="Joys Studio specializes in creating innovative mobile applications that transform ideas into powerful digital experiences, delivering cutting-edge solutions for today's mobile-first world."
                />
                {/* <SocialWidget /> */}
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Stay updated with the latest mobile app development trends and innovations from Joys Studio."
                  placeholder="your@email.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2025 Joys Studio.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
