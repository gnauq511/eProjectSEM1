import React, { useState, useEffect } from "react";
import "./style.css";

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [location, setLocation] = useState("Loading...");

  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get user location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
            .then((response) => response.json())
            .then((data) => {
              setLocation(data.address.city || data.address.town || "Unknown Location");
            })
            .catch(() => setLocation("Location Unavailable"));
        },
        () => {
          setLocation("Location Permission Denied");
        }
      );
    } else {
      setLocation("Geolocation Not Supported");
    }
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker">
        <p>{` ${dateTime} |  Location: ${location}`}</p>
      </div>
    </div>
  );
};

export default Ticker;
