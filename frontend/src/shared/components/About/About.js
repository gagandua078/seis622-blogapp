import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    border: '1px solid #000',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const spanStyle = {
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <img src="Gagan.jpg" alt="Gagan" style={avatarStyle} />
        <span style={spanStyle}>About Gagan</span>
      </div>
      <div style={itemStyle}>
        <span>
          Kristina was an English mathematician and writer, chiefly known for
          her work on Charles Babbage's proposed mechanical general-purpose
          computer, the Analytical Engine. She was the first to recognize that
          the machine had applications beyond pure calculation.
        </span>
        <img src="Kristina.jpg" alt="Kristina" style={avatarStyle} />
      </div>
      <div style={itemStyle}>
        <img src="Jamaal.jpg" alt="Jamaal" style={avatarStyle} />
        <span style={spanStyle}>About Jamaal</span>
      </div>
    </div>
  );
};

export default About;
