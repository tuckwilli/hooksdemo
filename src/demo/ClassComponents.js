import React, { Component } from 'react';

const getUserFeatures = async (userId, onGetUserFeatures) => {
  const response = await Promise.resolve(`${userId} user features`);
  onGetUserFeatures(response);
}

class ClassComponent0 extends Component {
  state = { userFeaures: null }

  componentDidMount () {
    getUserFeatures(
      this.props.userId,
      this.handleGetUserFeatures,
    );
  }

  componentDidUpdate (prevProps) {
    prevProps.userId !== this.props.userId && getUserFeatures(
      this.props.userId,
      this.handleGetUserFeatures,
    );
  }

  handleGetUserFeatures = response => {
    this.setState({
      userFeaures: response,
    });
  }

  render () {
    return <h3>Class Component 0: {this.state.userFeaures}</h3>;
  }
}

export { ClassComponent0 };
