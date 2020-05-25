import React from 'react';
import './stylesheets/About.css';
import { BackButton } from './BackButton';

export const About = () => {
  return(
    <div className="About">
      <BackButton />
      <h2>About This Page</h2>
      <p>Kitchen Calculator is an application whici is designing for cooking beginners to intermidiate from my cooking experiences.
        I cook Japanese cusines often, and I check recipes from Japanese website or books. When I cook, I have to  
      </p>

      <h2>About Creater</h2>
      <p>I am Anri Liy, experiencecd software automation test engineer. </p>
      <footer>&copy;AJLily</footer>
    </div>
  )
};
