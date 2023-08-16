import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        If you have any questions or inquiries, feel free to reach out:
      </p>
      <div className="contact-info">
        <p>By Email: ericadcyr@gmail.com</p>
        <p className="insta">
          DM on Instagram:{" "}
          <a
            href="https://www.instagram.com/ericacyrtattoos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erica Cyr Tattoos
          </a>
        </p>
      </div>
    </div>
  );
};
