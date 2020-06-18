import React from 'react';
import './articles.css';
import { BackButton } from '../BackButton';
import Time from '../Time';

export const article3 = () => {
  return (
    <div className="articles">
      <Time />
      <BackButton title={"Reads"} route={"/reads"}/>
      <h3>Seasoning for beginners</h3>
      <p>
        At the very beginning, I only used salt, pepper, ketchup, and soy sauce. That’s it.
        In those days I would try to learn recipes from YouTube videos. 
        I generally tried to follow the recipe but avoided buying additional spices out of fear of only using them once for one recipe. I have more spices now than before because I am slowly learning what flavors I enjoy cooking with and how to use spices. 
        This came as I developed my cooking experience. 
        <br />
        <br />
        When I first started, I had no idea what I needed, so I just had the four basic seasonings mentioned above. 
        Actually you can create pretty good dishes using these and you can learn basic and simple cooking techniques using these.
        If you get tired of only using these, you can add other seasonings or spices that you need for recipe or want to try out.
        <br />
        <br />
        Note: This is what I did, you don’t need to copy my style exactly. 
        I realize this can be pretty boring so develop your own style and get started!
      </p>
    </div>
  )
}