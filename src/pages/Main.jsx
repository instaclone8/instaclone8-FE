import React, { useState } from "react";
import Navigation from "../components/Navigation";
import MainWrapper from "./../components/MainWrapper";
import PostCard from "../components/PostCard";

function Main() {
  const [openReviseModal, setReviseOpenModal] = useState(false);

  return (
    <MainWrapper>
      <Navigation
        openModal={openReviseModal}
        setOpenModal={setReviseOpenModal}
      />
      <PostCard setReviseOpenModal={setReviseOpenModal} />
    </MainWrapper>
  );
}

export default Main;
