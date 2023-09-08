import React from "react";

import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const { color } = useSnapshot(state);

  const generateStyle = (type) => {
    switch (type) {
      case "filled":
        return {
          backgroundColor: color,
          color: "#fff",
        };
    }
  };

  return (
    <button
      style={generateStyle(type)}
      onClick={handleClick}
      className={`px-2 py-1.5 flex rounded-md ${customStyles}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
