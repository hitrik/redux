import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class App extends Component {
  render() {
    const user = this.props.user;
    const {year, photos} = this.props.page;
    return <div>
      <p>Привет из App, {user}.</p>
      <p>You have {photos.length} for {year} year.</p>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  };
}

export default connect(mapStateToProps)(App);