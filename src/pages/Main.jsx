import React from "react";
import Navigation from "../components/Navigation";
import MainWrapper from "./../components/MainWrapper";
import PostCard from "../components/PostCard";

function Main() {
  return (
    <MainWrapper>
      <Navigation />
      <PostCard />
    </MainWrapper>
  );
}

export default Main;
