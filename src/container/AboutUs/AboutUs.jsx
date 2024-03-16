import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{'Nestled in Snowbird, Utah\'s heart, River\'s Edge Restaurant & Bar is a fusion of mountain serenity and culinary innovation. More than a dining spot, we\'re a sanctuary where exquisite meals meet breathtaking landscapes for unforgettable moments. Our dedication to local sourcing and a season-celebrating menu underscores our commitment to sustainability. Discover River\'s Edge, with its unparalleled natural beauty and gastronomic delight.'}</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">{'Founded in 2010 by friends with a shared passion for the mountains and exquisite food, River\'s Edge Restaurant and Bar quickly became a Snowbird, Utah, landmark.  River\'s Edge isn\'t just about dining; it\'s about creating memories and building community amidst the breathtaking beauty of Snowbird. Our story reflects our dedication to environmental stewardship and the art of hospitality, inviting every guest to experience the magic of gathering around the table.'}</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
