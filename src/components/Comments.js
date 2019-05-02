import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';
import { Query } from 'react-apollo';
import { GET_COMMENTS } from '../graphql/Query';
import Fetching from './Fetching';

const Comments = props => {
  return (
    <Modal className='Comments'>
      <ModalContent>
        <h1>Comments</h1>
        {/* Comment list */}
        <Query query={GET_COMMENTS} variables={{ date: props.date }}>
          {({ loading, error, data }) => {
            if (loading) return <Fetching />;
            if (error) return <div>Error</div>;
            const comments = data.getPackage;

            return (
              <div>
                {comments.comments.map((comment, i) => {
                  return <li key={i}>{comment}</li>;
                })}
                {console.log(comments.comments)}
              </div>
            );
          }}
        </Query>
        {/* Close Icon */}
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
