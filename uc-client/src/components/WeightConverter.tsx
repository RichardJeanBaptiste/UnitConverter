import { useState } from 'react';
 
export default function WeightConverter() {

    const [cVal, setCVal] = useState("");

    const [weightForm, setWeightForm] = useState({
        weight: "",
        startUnit: "mg",
        endUnit: "mg"
    })

    const handleFormChange = (key: any) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

      setWeightForm((prev) => ({
          ...prev,
          [key]: e.target.value
      }))
    }
    const handleSubmit = () => {

      fetch("http://localhost:8080/weight", {
        method: 'POST',
        body: new URLSearchParams(weightForm)
      })
      .then(response => response.text())
      .then(result => {
        setCVal(result);
      })
      .catch(error => console.log(error))
    }

    return (
        <div>
          <p>Weight Converter</p>
            <form 
              style={{ width: '100%', height:'30vh', justifyContent: 'center', alignItems: 'center', gap: 30, marginTop: '5%' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center'}}>
                <label htmlFor='weight'>Enter the weight to convert:</label>
                <input id="weight" onChange={handleFormChange("weight")} value={weightForm.weight}/>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='startUnit'>Unit to convert from:</label>
                <select id="startUnit" onChange={handleFormChange("startUnit")} value={weightForm.startUnit}>
                    <option value="mg">milligram(mg)</option>
                    <option value="g">gram(g)</option>
                    <option value="kg">kilogram(kg)</option>
                    <option value="oz">ounce(oz)</option>
                    <option value="lbs">pound(lbs)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='endUnit'>Unit to convert to:</label>
                <select id="endUnit" onChange={handleFormChange("endUnit")} value={weightForm.endUnit}>
                    <option value="mg">milligram(mg)</option>
                    <option value="g">gram(g)</option>
                    <option value="kg">kilogram(kg)</option>
                    <option value="oz">ounce(oz)</option>
                    <option value="lbs">pound(lbs)</option>
                </select>
              </div>             
            </form>

             <button onClick={handleSubmit}>Convert</button> 

             <p>{cVal}</p>
        </div>
    )
}