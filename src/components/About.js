import { Component } from "react";
import React from "react";

const About = () => {
  return (
    <>
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1>About Us</h1>
          <p>Welcome to Fashion Shop!</p>
        </div>
      </header>

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p>
              At fashion shop, we believe in core values. Established in 2024,
              our journey began with a simple yet powerful idea: to make product
              accessible to everyone.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses through
              specific products, fostering growth and creating lasting value.
            </p>
            <h3>Our Vision</h3>
            <p>
              We aspire to be a leader in niche, setting benchmarks in quality,
              innovation, and customer satisfaction.
            </p>
            <h3>What We Do</h3>
            <p>
              We specialize in specific products you offer, catering to audience
              individuals, or community. Our team is committed to providing
              personalized solutions, embracing cutting-edge technology, and
              maintaining sustainability.
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                <strong>Expertise:</strong> We bring deep industry knowledge and
                a proven track record.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Your needs drive
                everything we do.
              </li>
              <li>
                <strong>Innovation:</strong> We stay ahead of the curve,
                continuously evolving to meet your expectations.
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to ethical
                practices and environmentally friendly solutions.
              </li>
            </ul>
            <h3>Meet Our Team</h3>
            <p>
              Our dedicated team of professionals and innovators is the backbone
              of our success. Each member brings unique skills and a shared
              passion for industry.
            </p>
            <p className="mt-4">
              Thank you for choosing Fashion Shop. Together, we can achieve your
              goals or make a difference.
            </p>
            <p>
              Feel free to explore our products, and don't hesitate to contact
              us, visit our store, or follow us on social media for more
              information.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <div className="row">
          <div className="col-md-3">
              <h5>Shopping Online</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Where We Deliver
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Gift Cards</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Buy a Gift Card
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Activate a Card
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Diamond Club</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-3">&copy; 2024 Fashion Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;