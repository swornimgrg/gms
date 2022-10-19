import React from "react";
import Enquiryform from "../Enquiryform/Enquiryform";
import Aboutus from "../Aboutus/Aboutus";

import SlideShow from "../SlideShow/SlideShow";
import OurValues from "../OurValues/OurValues";

function Homepage() {
  return (
    <div>
      <SlideShow />
      <Aboutus />
      <OurValues />
    </div>
  );
}

export default Homepage;
