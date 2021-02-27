import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;

  @media (min-width: 500px) {
    width: 250px;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  color: #7db1c1;
`;

export const Brand = styled(Link)`
  color: #836e98;
  text-decoration: none;
`;
