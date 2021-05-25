import React from "react";
import "./Section.css";
function Section() {
  return (
    <div className="section-container">
      {" "}
      <div id="about" className="about-section">
        <span className="heading-4">
          {" "}
          <span className="green-text">01.</span>About
        </span>
        <p className="heading-3">Hi, I am</p>
        <p className="heading-1">Sehbaz Rafik</p>
        <p className="heading-2">I build things for the web.</p>
        <p className="heading-3">
          I aim to create more free of ads, more sustainable, more scalable and
          profitable apps.
        </p>
      </div>
      <div id="work" className="work-section">
        <span className="heading-4">
          {" "}
          <span className="green-text">02.</span>Some Things I’ve Built
        </span>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                {" "}
                <p className="green-text">Featured Project</p>
                <p className="heading-4">Portfolio</p>
                <span className="contact-text">
                  My inbox is always open. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you! Say Hello
                </span>
                <div>
                  <button className="live-btn">Live</button>
                  <button className="live-btn">Code</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="green-column">
                {" "}
                <img src="https://github.com/Sehbaz/image-storage/blob/main/download.png?raw=true"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                {" "}
                <p className="green-text">Featured Project</p>
                <p className="heading-4">Portfolio</p>
                <span className="contact-text">
                  My inbox is always open. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you! Say Hello
                </span>
                <div>
                  <button className="live-btn">Live</button>
                  <button className="live-btn">Code</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="green-column">
                {" "}
                <img src="https://github.com/Sehbaz/image-storage/blob/main/download.png?raw=true"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                {" "}
                <p className="green-text">Featured Project</p>
                <p className="heading-4">Portfolio</p>
                <span className="contact-text">
                  My inbox is always open. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you! Say Hello
                </span>
                <div>
                  <button className="live-btn">Live</button>
                  <button className="live-btn">Code</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="green-column">
                {" "}
                <img src="https://github.com/Sehbaz/image-storage/blob/main/download.png?raw=true"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                {" "}
                <p className="green-text">Featured Project</p>
                <p className="heading-4">Portfolio</p>
                <span className="contact-text">
                  My inbox is always open. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you! Say Hello
                </span>
                <div>
                  <button className="live-btn">Live</button>
                  <button className="live-btn">Code</button>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="green-column">
                {" "}
                <img src="https://github.com/Sehbaz/image-storage/blob/main/download.png?raw=true"></img>
              </div>
            </div>
          </div>
        </div>
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
