import React from 'react';
import styled from 'styled-components';

const Fetching = () => {
  return <FetchingDiv>Fetching</FetchingDiv>;
};

export default Fetching;

const FetchingDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
