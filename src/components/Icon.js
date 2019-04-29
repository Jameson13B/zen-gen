import React from 'react';
import styled from 'styled-components';

const Icon = ({ icon, color, onClick, title }) => {
  return (
    <CustomIcon
      className='material-icons'
      color={color}
      onClick={onClick}
      title={title}
    >
      {icon}
    </CustomIcon>
  );
};

export default Icon;

const CustomIcon = styled.i`
  color: ${props => props.color};
  font-size: 2em;
  cursor: pointer;
  :hover {
    animation: App-logo-spin 1 0.5s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
