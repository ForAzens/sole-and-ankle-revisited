/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
`;

const slideIn = keyframes`
from {
  opacity: 0;
  transform: translateX(300px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 32px;
  padding-top: 26px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--color-white);

  width: 300px;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 0.2s ease;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin: -16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);

  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${18 / 16}rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & a {
    font-size: ${14 / 16}rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);

  text-decoration: none;
  font-weight: 500;
  font-size: ${14 / 16}rem;
`;

export default MobileMenu;
