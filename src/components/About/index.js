import React from "react";
import coverImage from "../../assets/cover/cover-image.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Welcome to my portfolio! I’m Anderson, and I’m a full-stack web
          developer, having experience in HTML, CSS, JavaScript, jQuery, MySQL,
          Express.js and React, to name a few. Here you will find information
          about the projects I have worked with, as well as, links for the
          deployed application and the repositories. Have a look at my work and
          feel free to contact me.
        </p>
      </div>
    </section>
  );
}

export default About;
