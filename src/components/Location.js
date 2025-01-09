import React from "react";

const Location = () => {
  return (
    <>
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1>Our Location</h1>
          <p>Find us at the heart of the city!</p>
        </div>
      </header>

      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Visit Our Store</h3>
            <p>
              Fashion Shop is located in the heart of the city, making it easy
              for you to visit us. Come and explore our latest collections and
              enjoy a personalized shopping experience.
            </p>
            <h5>Address:</h5>
            <p>123 Fashion Street, Downtown, Cityname</p>

            <h5>Contact:</h5>
            <p>
              Phone: <a href="tel:+123456789">+123 456 789</a>
              <br />
              Email:{" "}
              <a href="mailto:info@fashionshop.com">info@fashionshop.com</a>
            </p>

            <h5>Opening Hours:</h5>
            <p>
              Monday - Friday: 9:00 AM - 8:00 PM
              <br />
              Saturday: 10:00 AM - 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>

          <div className="col-md-6">
            <h3>Find Us on the Map</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Fashion Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093786!2d144.96305771531692!3d-37.81410797975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e5148db4a0d5!2s123%20Fashion%20Street%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1614976724131!5m2!1sen!2sus"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Fashion Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Location;