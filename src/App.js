import React, { useState } from 'react';
import hart from './hart.png';
import './App.css';

function App() {
  const [life,setLife]=useState(true);
  return(
  <div>
  <img className='lifeHart' src={hart} alt='hart'/>
  </div>
  );
  }
export default App;
