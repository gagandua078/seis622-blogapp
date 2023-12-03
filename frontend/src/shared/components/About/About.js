import React from 'react';

import './About.css';

const About= () => {
    return (
      <div class = "AboutUs">
        <div class="container">
            <img src="Gagan.jpg" height="50px" width="50px" border="1px"/>
            <span>About Gagan</span><br></br>
        </div>
        <div class="container">
            <span>Kristina was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, 
                the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation.</span>
            <img src="Kristina.jpg" height="50px" width="50px" border="1px"/>
            <br></br>
        </div>
        <div class="container">
            <img src="Jamaal.jpg" height="50px" width="50px" border="1px"/>
            <span>About Jamaal</span>
            <br></br>
        </div>
      </div>
  

    );
  };
  
  export default About;