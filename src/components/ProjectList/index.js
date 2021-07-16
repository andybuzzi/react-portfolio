import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "SEEK",
      category: "projects",
      description: `An event app for a post-COVID world aimed toward busy, city-life adults looking for a night out SEEK allows you to plan a night out and provides a few convenient features Events by city,Event information, Location, Dates, Times. Click to purchase tickets then Redirect to Ticketmaster.`,
      github: "https://github.com/andybuzzi/Seek",
      deployed: "https://andybuzzi.github.io/Seek/",
    },
    {
      name: "Pokemon Team Builder",
      category: "projects",
      description:
        "The Pokemon Team Builder application has been created for fans of Pokemon, and anyone interested in learning, playing and having fun in the Pokemon world. The user can build their own team, and select the Pokemons as they like. This application uses the pokeapi.co API to retrieve Pokemon data.",
      github: "https://github.com/andybuzzi/bc-project-2",
      deployed: "https://bc-project-2.herokuapp.com/",
    },
    {
      name: "Social Network API",
      category: "projects",
      description:
        "The social network api has been built for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.",
      github: "https://github.com/andybuzzi/social-network-api",
      deployed: "https://github.com/andybuzzi/social-network-api",
    },
    {
      name: "Note Taker",
      category: "projects",
      description:
        "The note taker application has been created for users to be able to write and save notes. This application uses an express.js back end which save and retrieve data from a JSON file.",
      github: "https://github.com/andybuzzi/note-taker",
      deployed: "https://murmuring-mountain-65060.herokuapp.com",
    },
    {
      name: "Weather Dashboard",
      category: "projects",
      description:
        "The weather dashboard application has been created for users to be able to search current weather by city, as well as, to view the forecast for the next 5 days. This application uses the OpenWeather API to retrieve weather data.",
      github: "https://github.com/andybuzzi/weather-dashboard",
      deployed: "https://andybuzzi.github.io/weather-dashboard/",
    },
    {
      name: "ReadMe Generator",
      category: "projects",
      description:
        "This application has been created to generate a professional readMe, where the main goal is to help your project to stand out. In this generator, the user is presented with few questions on the terminal that permits them to add the information needed for the readMe.",
      github: "https://github.com/andybuzzi/professional-readme-generator",
      deployed: "https://github.com/andybuzzi/professional-readme-generator",
    },
    {
      name: "Password Generator",
      category: "projects",
      description:
        "This application has been created to generate random, strong, and safe passwords. The user is presented with few questions on the application that permits them to decide which type of character should be included in the password.",
      github: "https://github.com/andybuzzi/password-generator",
      deployed: "https://andybuzzi.github.io/password-generator/",
    },
    {
      name: "Horiseon Social Solution Services Webpage",
      category: "projects",
      description:
        "This is a company webpage built using HTML and CSS. The main purpose of this project was to refactor the existing code in order to improve its database and make sure the code was running perfectly, making it more efficient and maintainable.",
      github: "https://github.com/andybuzzi/horiseon-webpage",
      deployed: "https://andybuzzi.github.io/horiseon-webpage/",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/projects/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
