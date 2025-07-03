import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import { purple_color } from "../UICssProperty/UICssPropoerty";

const NavbarContainer = styled.nav`
  background-color: ${purple_color}; /* ✅ Correct usage */
  backdrop-filter: blur(8px);
  color: #fff;
  height: 60px;
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #fff;

  span {
    color: #ffe600; /* yellow for highlight */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  li a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 20px;
    transition: all 0.3s ease;
    background-color: transparent;
    border: 2px solid transparent;
  }

  li a:hover {
    background-color: #ffe600;
    color: #6a0dad;
    border-color: #ffe600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: rgba(166, 120, 241, 0.95);
    position: absolute;
    top: 60px;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    text-align: center;
    transition: right 0.3s ease-in-out;
    padding: 1rem 0;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        Quiz<span>Land</span> 🎉
      </Logo>

      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>

      <NavLinks isOpen={isOpen}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Quizzes</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}
