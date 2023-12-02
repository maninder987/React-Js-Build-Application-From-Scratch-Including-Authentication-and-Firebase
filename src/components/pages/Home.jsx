import React from "react";
import Navigation from "../widgets/Navigation";
import Header from "../widgets/Header";
import Movies from "../widgets/Movies";
import OnePass from "../widgets/OnePass";
import styled from "styled-components";
export default function Home() {
  const MainWrapper = styled.div`
    padding: 0;
    margin: 0;
  `;

  return (
    <MainWrapper>
      <Navigation />
      <Header />
      <Movies />
      <OnePass />
    </MainWrapper>
  );
}
