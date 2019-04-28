import React from 'react';
import styled from 'styled-components';

const Icon = ({ icon, color, top, right, bottom, left, onClick }) => {
  return (
    <CustomIcon className='material-icons' color={color} onClick={onClick}>
      close
    </CustomIcon>
  );
};

export default Icon;

const CustomIcon = styled.i`
  color: ${props => props.color || 'black'};
  font-size: 2em;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: font-weight 0.3s ease;
  -webkit-transition: font-weight 0.3s ease;
  -moz-transition: font-weight 0.3s ease;
  -o-transition: font-weight 0.3s ease;
  :hover {
    font-weight: bolder;
  }
`;
