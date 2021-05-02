import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../utils/colors";

const Nav = styled.nav`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  width: auto;
  height: 100px;
  z-index: 1;
  top: 0;
  padding-right: 5.6rem;
  padding-left: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 2.2s ease;
  padding: 15px;
  background-color: rgba(173, 209, 202, 0.55);
  @media (max-width: 730px) {
    justify-content: center;
  }
`;

const Logo = styled.h1`
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 730px) {
    padding-left: 1px;
    padding-right: 1px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 50px;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  margin: 0px 15px;
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 1;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 100vw;
  top: 0;
  left: 0;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
  transition: opacity 1.9s ease-in-out;
  z-index: 1;

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 18px;
    margin: 50px 0px;
    transition: opacity 0.1s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Span = styled.span`
  ${(props) => (props.display ? "display:" + props.display + ";" : "")}
  ${(props) => (props.color ? "color:" + props.color + ";" : "")}    
  letter-spacing: 0.1vw;
`;

const Header = () => {
  const ref = useRef(null);
  const [toggle, toggleNav] = useState(false);

  const MenuAncords = () => {
    return (
      <Fragment>
        <Item>
          <a
            href="https://www.instagram.com/davmedina.m/"
            target="_blank"
            rel="noreferrer"
          >
            🚀 Instagram
          </a>
        </Item>
        <Item>
          <a
            href="https://www.facebook.com/david.medinamena/"
            target="_blank"
            rel="noreferrer"
          >
            👨🏼‍🎓 facebook
          </a>
        </Item>
        <Item>
          <a
            href="https://github.com/imdavmena"
            target="_blank"
            rel="noreferrer"
          >
            🗽 Github
          </a>
        </Item>
        <Item>
          <a
            href=" https://www.linkedin.com/in/sys200/"
            target="_blank"
            rel="noreferrer"
          >
            📲 Linkedin
          </a>
        </Item>
      </Fragment>
    );
  };

  return (
    <Nav ref={ref}>
      <Link to="/">
        <Logo>
          <Span color={colors.blue.hexColor}>D</Span>
          <Span color={colors.red.hexColor}>A</Span>
          <Span color={colors.yellow.hexColor}>V</Span>
          <Span color={colors.blue.hexColor}>I</Span>
          <Span color={colors.green.hexColor}>D</Span>{" "}
          <Span color={colors.blue.hexColor}>M</Span>
          <Span color={colors.blue.hexColor}>E</Span>
          <Span color={colors.blue.hexColor}>D</Span>
          <Span color={colors.blue.hexColor}>I</Span>
          <Span color={colors.blue.hexColor}>N</Span>
          <Span color={colors.blue.hexColor}>A</Span>{" "}
          <Span color={colors.capitalBlue.hexColor}>M</Span>
          <Span color={colors.capitalBlue.hexColor}>E</Span>
          <Span color={colors.capitalBlue.hexColor}>N</Span>
          <Span color={colors.capitalBlue.hexColor}>A</Span>
        </Logo>
      </Link>

      <Menu>
        <MenuAncords />
      </Menu>
      <NavIcon onClick={() => toggleNav(!toggle)}>
        <Line open={toggle} />
        <Line open={toggle} />
        <Line open={toggle} />
      </NavIcon>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <MenuAncords />
        </OverlayMenu>
      </Overlay>
    </Nav>
  );
};

export default Header;
