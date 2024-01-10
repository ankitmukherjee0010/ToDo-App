import React from 'react';
import './index.css';
import Title from './titleContainer'
import Form from './formComponent';
import List from './listComponent';

function App() {
  return (
    <div>
      <Title/>
    <div className="app-container">
     <div className="form-container">
      <Form />
     </div>
    <div className="table-container">
      <List />
    </div>
  </div>
  </div>
  );
}

export default App;
