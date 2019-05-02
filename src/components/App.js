import React, { Component } from 'react';
import Fetching from './Fetching';
import Dashboard from './Dashboard';
import Comments from './Comments';
import Settings from './Settings';
import { Query } from 'react-apollo';
import { GET_PACKAGE } from '../graphql/Query';
import styled from 'styled-components';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      today: '',
      settings: false,
      comments: false,
      night: null
    };
  }
  componentDidMount() {
    let night = false;
    if (localStorage.getItem('night')) {
      night = JSON.parse(localStorage.getItem('night'));
      console.log(night);
    }
    this.setState({
      date: moment().format('YYYY-MM-DD'),
      today: moment().format('MMM D, YYYY'),
      night
    });
  }
  closeModal = state => this.setState({ [state]: !this.state[state] });
  handleToggle = e => {
    localStorage.setItem('night', !this.state.night);
    this.setState({ night: !this.state.night });
  };
  render() {
    return (
      <AppContainer className='App'>
        <Query query={GET_PACKAGE} variables={{ date: this.state.date }}>
          {({ loading, error, data }) => {
            if (loading) return <Fetching />;
            if (error) return <div>Error</div>;
            const curPackage = data.getPackage;

            return (
              <Header className='App-header' night={this.state.night}>
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
        <Dashboard close={this.closeModal} night={this.state.night} />
        {this.state.settings ? (
          <Settings
            close={this.closeModal}
            night={this.state.night}
            handleToggle={this.handleToggle}
          />
        ) : null}
        {this.state.comments ? (
          <Comments close={this.closeModal} date={this.state.date} />
        ) : null}
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
  background-color: ${props => (props.night ? '#282c34' : '#eee')};
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => (props.night ? '#eee' : '#282c34')};
`;
