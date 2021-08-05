import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import bone from "../../Images/bone.svg";

import { StySidebar } from "./stySidebar";

const Sidebar = () => {
  const { goBack } = useHistory();
  return (
    <StySidebar>
      <img src={bone} alt="Comedouro" />
      <footer>
        <button onClick={goBack} type="button">
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </StySidebar>
  );
};

export default Sidebar;
