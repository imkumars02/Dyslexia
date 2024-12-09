import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <h2>About Us</h2>
      <p>
        Welcome to our website, designed specifically for students with
        dyslexia. We understand that learning can be a unique journey, and our
        mission is to provide support, resources, and a community that empowers
        you to succeed.
      </p>
      <p>
        Dyslexia is a common learning difference that affects reading and
        writing. Our goal is to offer tools and strategies to help you navigate
        these challenges and embrace your strengths.
      </p>
      <p>Here, you’ll find:</p>
      <ul>
        <li>Engaging learning resources tailored for dyslexic students</li>
        <li>Tips and techniques to enhance reading and writing skills</li>
        <li>A supportive community where you can connect with peers</li>
        <li>Information for parents and educators to foster understanding</li>
      </ul>
      <p>
        Together, we can create an environment where every student feels
        confident and capable. Let's embark on this journey towards success!
      </p>
    </div>
  );
};

export default AboutSection;
