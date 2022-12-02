import React, { useState } from 'react';
import DisplayEntries from './DisplayEntries/DisplayEntries';


function App() {

  const[entries, setEntries] = useState([{weight: 175, date: '11-25-2021'}])
  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;
