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
        <p>Kitchen Calculator is an application designed for beginner to intermediate cooks. The features were added based on my cooking experiences.
          <br />
          I cook Japanese food often, and I use recipes from Japanese websites or books. When I use these recipes, I have to google how to convert Japanese measurements to US measurements. 
          I feel this is so annoying that I have to convert them each time, so I made this application.
          <br />
          I hope this application will help lots of chefs like me.
        </p>
        </div>

        <div className="about-page">
        <h2>About The Creator</h2>
        <p>Anri Liy is an experienced software automation test engineer with over two years specializing in software testing. 
          She likes to develop helpful tools like this application.
          <br />
          If you would like to know more about her, please visit <a href="https://www.anriliy.com/" target="_blank"><u>anriliy.com</u></a>.
        </p>
        </div>
      </div>
      <footer>&copy;AJLily</footer>
    </div>
  )
};
