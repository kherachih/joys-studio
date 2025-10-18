import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What types of mobile applications do you develop?',
    answer:
      'At Joys Studio, we develop all types of mobile applications including native iOS apps using Swift, native Android apps using Kotlin, and cross-platform applications using React Native and Flutter. We specialize in e-commerce apps, social media platforms, business solutions, educational apps, and custom enterprise applications tailored to your specific needs.',
  },
  {
    question: 'Do you also develop web applications?',
    answer:
      'Yes, we provide comprehensive web development services using modern technologies like React, Vue.js, Angular, Node.js, and Python. We build responsive web applications, progressive web apps (PWAs), e-commerce platforms, content management systems, and custom web solutions that seamlessly integrate with mobile applications when needed.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer:
      'The development timeline varies depending on the complexity and features of your application. A simple app typically takes 2-3 months, while more complex applications can take 4-8 months or longer. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process with regular milestones.',
  },
  {
    question: 'What is your development process?',
    answer:
      'Our development process follows industry best practices: 1) Discovery and planning phase where we understand your requirements, 2) UI/UX design and prototyping, 3) Development with agile methodology, 4) Rigorous testing and quality assurance, 5) Deployment to app stores and web servers, 6) Post-launch support and maintenance. We maintain transparent communication throughout all phases.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Absolutely! We offer comprehensive support and maintenance packages to ensure your applications continue to run smoothly. This includes bug fixes, performance optimization, security updates, feature enhancements, and technical support. We provide different maintenance tiers based on your specific needs and budget.',
  },
  {
    question: 'How do you price your development services?',
    answer:
      'Our pricing is project-based and depends on various factors including complexity, features, platforms, and timeline. We offer flexible pricing models: fixed-price for well-defined projects, time and materials for evolving requirements, and dedicated team arrangements for long-term partnerships. Contact us for a detailed quote tailored to your specific project requirements.',
  },
  {
    question: 'Do you sign NDAs and protect intellectual property?',
    answer:
      'Yes, we take confidentiality and intellectual property protection very seriously. We are happy to sign Non-Disclosure Agreements (NDAs) before discussing your project details. All code, designs, and project materials developed for you remain your property upon final payment, and we maintain strict confidentiality throughout our partnership.',
  },
  {
    question: 'Can you help with app store submission and approval?',
    answer:
      'Certainly! We have extensive experience with app store submissions for both Apple App Store and Google Play Store. We handle the entire submission process including preparing necessary assets, complying with guidelines, responding to review feedback, and ensuring successful approval. We also provide guidance on app store optimization (ASO) to improve visibility.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
