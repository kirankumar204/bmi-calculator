import React, { useState } from 'react';
import './App.css';


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const calculateBMI = () => {
    const weightNum = (weight);
    const heightNum = (height) / 100; 
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("Underweight");
  
      } else if (bmiValue < 24.9) {
        setMessage("Normal weight");

      } else if (bmiValue < 29.9) {
      

      } else {
        setMessage("Obesity");
    
      }
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
    setImage(null);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={resetForm}>Reset</button>
      {bmi !== null && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
