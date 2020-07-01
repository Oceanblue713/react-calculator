import React from 'react';
import './articles.css';
import { BackButton } from '../BackButton';
import Time from '../Time';

export const article1 = () => {
  return (
    <div className="articles">
      <Time />
      <BackButton title={"Reads"} route={"/reads"}/>
      <h3>Calorie Control</h3>
      <p> 
        I usually control my caloric intake on a 2-3 day cycle. 
        <br />
        <br />
        My daily calorie goal is around 1500 kcal a day. 
        I run slowly almost every day but I really don’t lift weights (Maybe I should?) 
        so this number works for me. It’s a reasonable goal based on my current weight, height, and level of activity. 
        There are many calculators available online that can help you find a reasonable number for you.
        <br />
        <br />
        When I know I will eat a big dinner, I usually eat a light brunch or I eat a big brunch and a light dinner.
        My personal goal is to keep my stomach the same size.
        If I overeat one day, I don’t worry about it too much. 
        I am just careful to eat a little bit less than normal the next day. 
        If I do this, on the third day I can eat as normal. 
        I love burgers, pizzas, and fries and I eat them often, 
        but this method helps me keep my weight stable and not stress out too much about my figure or health.
        <br />
        <br />
        This is one way you can control your weight or health, 
        I am not sure if this way is a good fit for you or not. 
        That said, I hope this tip will be a good option for you.
      </p>
    </div>
  )
}
