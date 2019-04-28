import React from 'react';
import styled from 'styled-components';

const Icon = ({ icon, color, top, right, bottom, left, onClick }) => {
  return (
    <CustomIcon
      className='material-icons'
      color={color}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      onClick={onClick}
    >
      {icon}
    </CustomIcon>
  );
};

export default Icon;

const CustomIcon = styled.i`
  color: ${props => props.color};
  font-size: 2em;
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  cursor: pointer;
  transition: font-size 0.5s ease;
  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  :hover {
    font-size: 3em;
  }
`;
