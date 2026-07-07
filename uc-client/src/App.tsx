import { useState } from 'react'
import './App.css'
import LengthConverter from './components/LengthConverter';
import WeightConverter from './components/WeightConverter';
import TempConverter from './components/TempConverter';

function App() {

  const [index, setIndex] = useState(0);
  

  const TabSelector = ({ index } : {index: number}) => {

      switch(index) {
        case 0:
          return <LengthConverter/>
        case 1:
          return <WeightConverter/>
        case 2:
          return <TempConverter/>
      }  
  }

  return (
    <>
      <h3>Unit Converter</h3>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '20vh', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setIndex(0)}>Length</button>
          <button onClick={() => setIndex(1)}>Weight</button>
          <button onClick={() => setIndex(2)}>Temperature</button>
      </div>

      <TabSelector index={index}/>
    </>
  )
}

export default App
