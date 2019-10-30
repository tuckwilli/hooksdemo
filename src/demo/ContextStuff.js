import React, { Component, createContext, useContext } from 'react';

export const SomeContext = createContext('default val');

class ClassContextConsumer extends Component {
  static contextType = SomeContext;

  render () {
    const contextValue = this.context;
    return <h3>{contextValue}</h3>;
  }
}

const FunctionalContextConsumer = ({ contextValue }) => (
  <h3>{contextValue}</h3>
);

const HooksContextConsumer = () => {
  const contextValue = useContext(SomeContext);
  return <h3>{contextValue}</h3>;
};

export const ContextApp = () => (
  <>
    <ClassContextConsumer />

    <SomeContext.Consumer>
      {value => <FunctionalContextConsumer contextValue={value} />}
    </SomeContext.Consumer>

    <HooksContextConsumer />
  </>
);
