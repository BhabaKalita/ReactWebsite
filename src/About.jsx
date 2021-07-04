import React from "react";
import web from "../src/image/home.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
<Common name = 'Know more about ' 
imgsrc = {web} 
visit = "/contact"
btname = "Contact Now"/>
    </>
  );
};

export default About;