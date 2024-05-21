"use client";
import { Button } from "react-bootstrap";
import "./up-button.scss";
import { FaArrowUp } from "react-icons/fa";

const UpButton = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button className="up-button" onClick={() => handleButtonClick()}>
      <FaArrowUp />
    </Button>
  );
};

export default UpButton;
