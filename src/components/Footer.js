import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  padding: 3rem;
  background: rgb(66, 66, 66);
`;

const TextDiv = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  p {
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <TextDiv>
        <p>Copyright &copy; 2022 HowardMui. All Rights Reserved</p>
        <p>Designed by Howard Mui</p>
      </TextDiv>
    </FooterDiv>
  );
};

export default Footer;
