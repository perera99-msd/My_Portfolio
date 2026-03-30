
"use client";
import React, { useState } from 'react';

const certs = [
  {
    img: '/My Certificates/moratuwa1.png',
    title: 'Web Design for Beginners',
    org: 'University of Moratuwa',
    link: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
  },
  {
    img: '/My Certificates/responsive.png',
    title: 'Responsive Web Design',
    org: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/pereramsd99/responsive-web-design-v9',
  },
  {
    img: '/My Certificates/Screenshot from 2026-01-08 01-39-33.png',
    title: 'JavaScript Developer',
    org: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/pereramsd99/javascript-v9',
  },
  {
    img: '/My Certificates/hackerrank1.png',
    title: 'Java (Basic)',
    org: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/c29275a8ce02',
  },
  {
    img: '/My Certificates/hackerrank2.png',
    title: 'JavaScript (Basic)',
    org: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/aca6f24511ca',
  },
  {
    img: '/My Certificates/google.png',
    title: 'Intro to Generative AI',
    org: 'Google Cloud',
    link: 'https://www.skills.google/public_profiles/961ced32-d817-4fac-a5fd-6e6ec633b165/badges/21059785?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  // More certs can be added here
];

const moreCerts = [
  {
    img: '/My Certificates/react.png',
    title: 'React.js for Beginners',
    org: 'Simplilearn',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU5OTA3NV85ODU0MjgxMTc2NTk4NDM3NDMwNC5wbmciLCJ1c2VybmFtZSI6Ik0gUyBESU1BTFNIQSBQRVJFUkEifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1521809158891221807&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL8t3rwxJsgxNjEqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAMlYW5lBAAAA',
  },
  {
    img: '/My Certificates/node.png',
    title: 'Node.js for Beginners',
    org: 'Simplilearn',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTU5MjIwM185ODU0MjgxMTc2NTg3NzcwNjIxOC5wbmciLCJ1c2VybmFtZSI6Ik0gUyBESU1BTFNIQSBQRVJFUkEifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4236%2FGetting-started-with-NodeJS%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1521809158891221807&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN%2FD0KC4pNguyiEyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAJJ%2B1H9BAAAA',
  },
];

const Certifications: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <h2 className="section-heading mb-5 scroll-reveal">Professional Credentials</h2>
        <div className="row g-4">
          {certs.map((cert, idx) => (
            <div className={`col-md-6 col-lg-4 scroll-reveal${idx > 0 ? ` delay-${idx % 3}` : ''}`} key={cert.title}>
              <div className="cert-card premium-glass">
                <div className="cert-img-wrapper">
                  <img src={cert.img} alt={cert.title} className="cert-img" />
                </div>
                <div className="cert-content">
                  <h4>{cert.title}</h4>
                  <p>{cert.org}</p>
                  <a href={cert.link} target="_blank" className="cert-link">View Credential <i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showMore && (
          <div className="row g-4 mt-1">
            {moreCerts.map((cert, idx) => (
              <div className="col-md-6 col-lg-4" key={cert.title}>
                <div className="cert-card premium-glass">
                  <div className="cert-img-wrapper">
                    <img src={cert.img} alt={cert.title} className="cert-img" />
                  </div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p>{cert.org}</p>
                    <a href={cert.link} target="_blank" className="cert-link">View Credential <i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-5 scroll-reveal">
          <button id="showMoreBtn" className="btn-outline-glow" onClick={() => setShowMore(v => !v)}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
