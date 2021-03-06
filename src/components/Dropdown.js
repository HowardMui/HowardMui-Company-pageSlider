/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { menuData } from "../data/MenuData";
import { VscChromeClose } from "react-icons/vsc";

const Dropdiv = styled.div`
  background: orange;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: ${({ isOpen }) => (isOpen ? "99" : "-1")};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled(VscChromeClose)`
  position: absolute;
  top: 3vh;
  right: 5vh;
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const DropdownWrapper = styled.div``;

const DropMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 2rem 1rem;
  color: #fff;
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: #000;
  }
`;

const Dropbtn = styled.div``;

// eslint-disable-next-line react/prop-types
const Dropdown = ({ toggle, isOpen }) => {
  return (
    <Dropdiv isOpen={isOpen}>
      <Icon onClick={toggle}></Icon>
      <DropdownWrapper>
        <DropMenu>
          {menuData.map((item, index) => (
            <NavLink key={index} onClick={toggle} style={{ cursor: "pointer" }}>
              {item.title}
            </NavLink>
          ))}
        </DropMenu>
        <Dropbtn>
          <Button primary big onClick={toggle}>
            Contact Us
          </Button>
        </Dropbtn>
      </DropdownWrapper>
    </Dropdiv>
  );
};

export default Dropdown;
