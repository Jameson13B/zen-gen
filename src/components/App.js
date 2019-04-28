import React, { Component } from 'react';
import Fetching from './Fetching';
import { Query } from 'react-apollo';
import { GET_PACKAGE } from '../graphql/Query';
import styled from 'styled-components';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      today: ''
    };
  }
  componentDidMount() {
    this.setState({
      date: moment().format('YYYY-MM-DD'),
      today: moment().format('MMM D, YYYY')
    });
  }
  render() {
    return (
      <AppContainer className='App'>
        <Query query={GET_PACKAGE} variables={{ date: this.state.date }}>
          {({ loading, error, data }) => {
            if (loading) return <Fetching />;
            if (error) return <div>Error</div>;
            const curPackage = data.getPackage;

            return (
              <Header className='App-header'>
                <h1>{this.state.today}</h1>
                <img
                  src={curPackage.picture}
                  alt='daily-pic'
                  style={{ maxHeight: '65%' }}
                />
                <h1>{curPackage.advice}</h1>
              </Header>
            );
          }}
        </Query>
      </AppContainer>
    );
  }
}

export default App;

// Styled Components
const AppContainer = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #282c34;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
