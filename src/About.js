import React from 'react';
import './stylesheets/About.css';
import { BackButton } from './BackButton';

export const About = () => {
  return(
    <div>
      <BackButton />
      <div className="About">
        <div className="about-page">
        <h2>About This Page</h2>
        <p>Kitchen Calculator is an application which is designed for cooking beginners to intermidiate from my cooking experiences.
          <br />
          I cook Japanese cusines often, and I check recipes from Japanese website or books. When I cook, I have to google Japanese metrics to the US metrics.
          I feel this is so annoying that I have to convert them each time, this is the idea for this application.
          <br />
          I hope this application will help lots of shefs like my level.
        </p>
        </div>

        <div className="about-page">
        <h2>About Creater</h2>
        <p>I am Anri Liy, experiencecd software automation test engineer. 
          Also I like develop something helpful tool like this application.
          If you would like to know more about me, please visit <a href="https://www.anriliy.com/" target="_blank">anriliy.com</a>.
          <br />
          I am happy to sharing my world with you!
        </p>
        </div>
        <footer>&copy;AJLily</footer>
      </div>
    </div>
  )
};
