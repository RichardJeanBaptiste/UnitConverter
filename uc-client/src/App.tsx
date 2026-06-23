import { useState } from 'react'
import './App.css'

function App() {

  const [index, setIndex] = useState(0);
  const [ lengthForm, setLengthForm ] = useState({
    length: "",
    startUnit: "",
    endUnit: ""
  })

  const handleFormChange = (key: any) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    setLengthForm((prev) => ({
      ...prev,
      [key]: e.target.value
    }))
  }

  const handleSubmit = () => {

    fetch("http://localhost:8080/conv", {
      method: 'POST',
      body: new URLSearchParams(lengthForm)
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  const LengthConverter = () => {

    return (
        <div>
          <p>Length Converter</p>
            <form 
              style={{ width: '100%', height:'30vh', justifyContent: 'center', alignItems: 'center', gap: 30, marginTop: '5%' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center'}}>
                <label htmlFor='length'>Enter the length to convert:</label>
                <input id="length" onChange={handleFormChange("length")} value={lengthForm.length}/>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='startUnit'>Unit to convert from:</label>
                <select id="startUnit" onChange={handleFormChange("startUnit")} value={lengthForm.startUnit}>
                    <option value="mm">milimeter(mm)</option>
                    <option value="cm">centimeter(cm)</option>
                    <option value="m">meter(m)</option>
                    <option value="km">kilometer(km)</option>
                    <option value="in">inches(in)</option>
                    <option value="ft">foot(ft)</option>
                    <option value="yd">yard(yd)</option>
                    <option value="mi">mile(mi)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='endUnit'>Unit to convert to:</label>
                <select id="endUnit" onChange={handleFormChange("endUnit")} value={lengthForm.endUnit}>
                    <option value="mm">milimeter(mm)</option>
                    <option value="cm">centimeter(cm)</option>
                    <option value="m">meter(m)</option>
                    <option value="km">kilometer(km)</option>
                    <option value="in">inches(in)</option>
                    <option value="ft">foot(ft)</option>
                    <option value="yd">yard(yd)</option>
                    <option value="mi">mile(mi)</option>
                </select>
              </div>             
            </form>

             <button onClick={handleSubmit}>Convert</button> 
        </div>
    )
  }

  const TabSelector = ({ index } : {index: number}) => {

      switch(index) {
        case 0:
          return <LengthConverter/>
        case 1:
          return <p>Weight Converter</p>
        case 2:
          return <p>Temperature Converter</p>
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
