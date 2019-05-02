import React from 'react';
import Toggle from 'react-toggle';
import styled from 'styled-components';

const CustomToggle = props => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Toggle
        id='toggle-status'
        icons={{
          checked: (
            <Icon className='theme-icon material-icons'>brightness_3</Icon>
          ),
          unchecked: (
            <Icon className='theme-icon material-icons'>brightness_5</Icon>
          )
        }}
        defaultChecked={props.night}
        onChange={props.handleToggle}
      />
      <label htmlFor='toggle-status'>Day/Nite Mode</label>
    </div>
  );
};

export default CustomToggle;

const Icon = styled.i`
  color: white;
  font-size: inherit;
`;
