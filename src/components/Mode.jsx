import React from "react";
import Title from "../Elements/Title";
import styled from "styled-components";
import GreenButton from "../Elements/GreenButton";

const Credit = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
  color: white;
  font-family: "Itim", cursive;
  font-size: 17px;
`;

const Link = styled.a`
  color: white;
  font-family: "Itim", cursive;
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #39ff14;
  }
`;

function Mode({ clickHumanBtn, clickAIBtn }) {
  return (
    <>
      <Title>Tic Tac Toe</Title>
      <GreenButton onClick={clickHumanBtn}>Two Player</GreenButton>
      <GreenButton onClick={clickAIBtn}>One Player</GreenButton>
      <Credit>
        By{" "}
        <Link href="https://www.linkedin.com/in/abdulrafayn001/" target="blank">
          Abdul Rafay
        </Link>
      </Credit>
    </>
  );
}

export default Mode;
