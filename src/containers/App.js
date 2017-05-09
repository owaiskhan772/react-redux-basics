import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from "react-redux";
import { Main } from "../components/Main";
import { User } from "../components/User";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Changed Name")}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    main: state.main
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
