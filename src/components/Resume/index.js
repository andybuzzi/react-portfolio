import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="container d-flex flex-column text-center">
        <div className="p-2 text-center">
          <h6 id="resume">
            <a
              href="https://drive.google.com/file/d/1R9ihLrLSYIcYrTj4zvmwdBxDQSGmcNgo/view?usp=sharing"
              target="blank"
              download
            >
              Click Here to Download Resume in PDF
            </a>
          </h6>
        </div>
        <br></br>
        <ul>
          Full-stack curriculum Bootcamp with emphasis on the most in-demand
          technologies, including:
          <br></br>
          <br></br>
          <li>- HTML</li>
          <li>- CSS</li>
          <li>- JavaScript</li>
          <li>- jQuery</li>
          <li>- Bootstrap</li>
          <li>- Node.js</li>
          <li>- MySQL</li>
          <li>- MongoDB</li>
          <li>- Express.js</li>
          <li>- React</li>
        </ul>
      </div>
      <div className="p-2"></div>
    </section>
  );
}

export default Resume;
