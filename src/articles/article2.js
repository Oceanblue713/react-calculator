import React from 'react';
import './articles.css';
import { BackButton } from '../BackButton';
import Time from '../Time';

export const article2 = () => {
  return (
    <div className="articles">
      <Time />
      <BackButton title={"Reads"} route={"/reads"}/>
      <h3>Tools for beginners</h3>
      <p>
       I started cooking when I got married. I barely cooked before I got married. 
       When we started living together, I struggled with planning our meals and controlling our calories.
       <br />
       <br />
       We had just moved to a new place at that time so I really didn’t have any kitchen tools. 
       My starting tools were a small sized chopping board, an 8 inch knife, kitchen scissors, a saucepan, 
       and a frying pan. That was pretty much it. 
       When cooking for 2 people I think these are enough to begin. After I got more comfortable cooking, 
       I bought a 3 ½ quart size Le Creuset dutch oven and a bigger frying pan to cook food for all the potlucks we were going to. 
       I will write about my Le Creuset pot later but the bottomline is that buying that pot was one of the best decisions of my life!
      </p>
    </div>
  )
}