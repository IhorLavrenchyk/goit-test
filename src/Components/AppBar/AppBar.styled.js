import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  gap: 60px;
  padding: 20px;
  align-items: center;
  background-color: #0abab5;
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  color: #00212f;
`;
