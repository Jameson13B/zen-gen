import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import WeatherBtn from './WeatherBtn';

const Dashboard = props => {
  return (
    <DashboardContainer>
      <Icon
        icon='build'
        color={props.night ? '#eee' : '#282c34'}
        onClick={() => props.close('settings')}
        title='Settings'
      />
      <br />
      <Icon
        icon='comment'
        color={props.night ? '#eee' : '#282c34'}
        onClick={() => props.close('comments')}
        title='Comments'
      />
      <br />
      <WeatherBtn title='Local Weather' night={props.night} />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5%;
  right: 5%;
`;
