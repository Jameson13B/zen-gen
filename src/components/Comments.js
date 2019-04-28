import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';

const Comments = props => {
  return (
    <Modal className='Comments'>
      <ModalContent>
        Comments
        <CloseIcon onClick={() => props.close('comments')} />
      </ModalContent>
    </Modal>
  );
};

export default Comments;

const Modal = styled.div`
  top: 0%;
  left: 0%;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
`;
const ModalContent = styled.div`
  top: 10%;
  left: 10%;
  position: fixed;
  width: 80vw;
  height: 80vh;
  background: #eee;
`;
