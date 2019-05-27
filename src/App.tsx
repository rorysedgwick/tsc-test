import React from 'react';
import Body from './components/Body';
import './App.css';

const App: React.FC = (props: any) => {
  return (
      <div className="App">
          <Body {...props} />
      </div>
  );
}

export default App;
