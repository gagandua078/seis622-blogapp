import React from 'react';
import './About.css';
import GaganImage from '../../../assets/gagan.jpeg';
const About = () => {
  return (
    <div class="about-header">
      <center>
        <h2>About Our Developers</h2>
      </center>
      <div class="about-container">
        <div class="about-card">
          <div class="about-image">
            <img src={GaganImage} alt="Gagan" />
          </div>
          <div class="about-content">
            <h2>Gagan Deep</h2>
            <p>
              I'm a full stack developer working at Ameriprise Financials. With
              over 6 years of coding experience, I've worked on multiple
              domains, sites, open-source projects, and apps. Coding and
              problem-solving are my passions, and I'm excited about integrating
              this product into upcoming projects.
            </p>
          </div>
        </div>
        <div class="about-card">
          <div class="about-content">
            <h2>Kristina</h2>
            <p>
              Kristina was an English mathematician and writer known for her
              work on Charles Babbage's proposed Analytical Engine. She was the
              first to recognize its applications beyond pure calculation.
            </p>
          </div>
          <div class="about-image">
            <img src="Kristina.jpg" alt="Kristina" />
          </div>
        </div>
        <div class="about-card">
          <div class="about-image">
            <img src="Jamaal.jpg" alt="Jamaal" />
          </div>
          <div class="about-content">
            <h2>Jamaal</h2>
            <p>About Jamaal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
