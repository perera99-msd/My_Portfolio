"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_o6by6fp';
const TEMPLATE_ID = 'template_jiot9hu';
const PUBLIC_KEY = 'fg1Bm34uaxF59svck';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'msdperera99@gmail.com',
        },
        PUBLIC_KEY
      );
      alert(`Thanks ${form.name}! Message sent.`);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      alert('Failed to send. Please try again.');
      // Optionally log error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container scroll-reveal">
        <div className="contact-wrapper">
          <div className="row g-0">
            <div className="col-lg-5 contact-info-col">
              <h3>
                Let's build something <br /> <span className="text-gradient">extraordinary.</span>
              </h3>
              <p className="mt-3 text-secondary-light mb-5">
                I'm currently available for freelance work and internships. Drop a message!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-glow">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ms-3 contact-text">
                    <small>Email</small>
                    <div>msdperera99@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-glow">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ms-3 contact-text">
                    <small>Phone</small>
                    <div>+94 76 605 5480</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-glow">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ms-3 contact-text">
                    <small>Location</small>
                    <div>Negombo, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 contact-form-col">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="modern-input"
                      id="name"
                      placeholder="Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="modern-input"
                      id="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="modern-input"
                      id="subject"
                      placeholder="Subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="modern-input"
                      id="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn-primary-glow w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <i className="fas fa-paper-plane ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;