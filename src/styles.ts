import styled from "styled-components";

export const Website = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  padding: 60px;
  text-align: center;
  background: #8F967F;
  color: white;
`;

export const Navbar = styled.nav`
  display: flex;
  background-color: #6b705f;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #fcfcfc;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #DED8CC;
    color: black;
  }
`;

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Side = styled.aside`
  flex: 30%;
  background-color: #DED8CC;
  padding: 20px;
`;

export const Main = styled.main`
  flex: 70%;
  background-color: #8F967F;
  padding: 20px;
`;


export const FakeImg = styled.div`
  display: flex;
  background-color: #8F967F;
  width: 100%;
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #6b705f;
`;