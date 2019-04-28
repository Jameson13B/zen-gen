import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';

const Settings = props => {
  return (
    <Modal className='Settings'>
      <ModalContent>
        Settings
        <CloseIcon onClick={() => props.close('settings')} />
      </ModalContent>
    </Modal>
  );
};

export default Settings;

const Modal = styled.div`
  top: 0%;
  left: 0%;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
`;
const ModalContent = styled.div`
  top: 10%;
  left: 10%;
  position: fixed;
  width: 80vw;
  height: 80vh;
  background: #eee;
`;
