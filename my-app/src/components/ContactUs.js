import React, { useEffect, useRef } from "react";
const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 21.0286336, lng: 105.7818846 },
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 21.0286336, lng: 105.7818846 },
          map: map,
          title: "Our Location",
        });
      }
    };

    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBUxYyumTW0FUQpMWBBJcY_7iQUQmO2Wtg&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = initMap;
      } else {
        initMap();
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <>
      <header className="bg-light py-">
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
            <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
