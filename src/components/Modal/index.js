import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, index, github, deployed } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/projects/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <a href={deployed} target="_blank" rel="noopener noreferrer">
          - Deployed Application
        </a>
        <br></br>
        <br></br>
        <button type="button" onClick={onClose}>
          Close Project
        </button>
      </div>
    </div>
  );
};

export default Modal;
