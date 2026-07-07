import { useState } from 'react';

export default function LengthConverter() {

    const [cVal, setCVal] = useState("");

    const [ lengthForm, setLengthForm ] = useState({
      length: "",
      startUnit: "mm",
      endUnit: "mm"
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
      .then(result => {
        setCVal(result);
      })
      .catch(error => console.log(error))
    }


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

             <p>{cVal}</p>
        </div>
    )
  }