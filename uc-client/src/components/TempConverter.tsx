import { useState } from 'react';

export default function TempConverter() {
    const [cVal, setCVal] = useState("");

    const [tempForm, setTempForm] = useState({
        temp: "",
        startUnit: "C",
        endUnit: "C"
    })

    const handleFormChange = (key: any) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setTempForm((prev) => ({
            ...prev,
            [key]: e.target.value
        }))
    }
    const handleSubmit = () => {
        console.log(tempForm);
        fetch("http://localhost:8080/temp", {
            method: 'POST',
            body: new URLSearchParams(tempForm)
        })
        .then(response => response.text())
        .then(result => {
            setCVal(result);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <p>Temperature Converter</p>
            <form 
                style={{ width: '100%', height:'30vh', justifyContent: 'center', alignItems: 'center', gap: 30, marginTop: '5%' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center'}}>
                <label htmlFor='temp'>Enter the temperature to convert:</label>
                <input id="temp" onChange={handleFormChange("temp")} value={tempForm.temp}/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='startUnit'>Unit to convert from:</label>
                <select id="startUnit" onChange={handleFormChange("startUnit")} value={tempForm.startUnit}>
                    <option value="C">celsius(C)</option>
                    <option value="F">fahrenheit(F)</option>
                    <option value="K">kelvin(K)</option>
                </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '30%', alignItems: 'center' }}>
                <label htmlFor='endUnit'>Unit to convert to:</label>
                <select id="endUnit" onChange={handleFormChange("endUnit")} value={tempForm.endUnit}>
                    <option value="C">celsius(C)</option>
                    <option value="F">fahrenheit(F)</option>
                    <option value="K">kelvin(K)</option>
                </select>
                </div>             
            </form>

                <button onClick={handleSubmit}>Convert</button> 

                <p>{cVal}</p>
        </div>
    )
}