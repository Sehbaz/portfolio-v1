import React from "react";
import "./Section.css";
function Section() {
  return (
    <div className="section-container">
      {" "}
      <div id="about" className="about-section">
        <p className="green-text">Hi, I am</p>
        <p className="heading-1">Sehbaz Rafik</p>
        <p className="heading-2">I build things for the web.</p>
        <p className="heading-3">
          I aim to create more free of ads, more sustainable, more scalable and
          profitable apps.
        </p>
      </div>
      <div id="work" style={{ height: 500 }}>
        <h1>This is Service section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="contact" className="contact-section">
        <p className="green-text">03. What’s Next?</p>
        <span className="heading-1">Around the web</span>
        <span className="contact-text">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you! Say Hello
        </span>
        <br />
        <div>
          <span className="heading-3">
            Email :
            <a href="mailto:sehbazm@gmail.com" className="link">
              <span className="green-text"> sehbazm@gmail.com </span>
            </a>
          </span>

          <br />
          <span className="heading-3">
            GitHub :
            <a
              href="https://github.com/Sehbaz"
              target="_blanc"
              className="link"
            >
              <span className="green-text"> Sehbaz </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section;
