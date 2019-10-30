import React, { useState } from 'react';
import { ContextApp, SomeContext } from './demo/ContextStuff';
import { ClassComponent0 } from './demo/ClassComponents';
import './App.css';
import { HookComponent0 } from './demo/HooksComponents';

function App() {
  const [contextValue, setContextValue] = useState('default');
  const [userId, setUserId] = useState(123);

  return (
    <div className="App">
      <h1>Context</h1>
      <input
        value={contextValue}
        onChange={event => setContextValue(event.target.value)}
      />
      <SomeContext.Provider value={contextValue}>
        <ContextApp />
      </SomeContext.Provider>
      <h1>Custom Hooks</h1>
      <button
        onClick={() => setUserId(Math.floor(Math.random()*(999-100+1)+100))}
      >
        change user id
      </button>
      <ClassComponent0 userId={userId} />
      <HookComponent0 userId={userId} />
    </div>
  );
}

export default App;
