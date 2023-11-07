// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import './index.css'
import LiveChart from './LiveChart'

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Stock Candle</h1> 
      <LiveChart  symbol = {'AMZN'} />
    </div>
  );
}

export default App;
