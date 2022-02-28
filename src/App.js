import { FormControl } from '@mui/material';
import { Button, TextField } from '@mui/material';
import React from 'react';
import './App.css';

function App() {
  
  const calculate = () => {
    
    result = Math.round(Math.pow(height / 100, Math.E) + (weight / age) + age / 10); 

    setResult(result);

    console.log('works ' + result);

  }

  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  var [result, setResult] = React.useState('');

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const formStyle = {
    padding: '40px',
    textAlign: 'center',
    margin: '15px'
  };

  const buttonStyle = {
    margin: '15px',
    borderRadius: '20px',
    border: '2px solid black',
    color: 'white',
    backgroundColor: 'cyan'
  };

  const inputStyle = {
    margin: '7px',
    textAlign: 'center',
  };

  return (
    <div className="App">
      <FormControl style={formStyle}>
        <TextField style={inputStyle} type="number" value={height} onChange={handleHeightChange} placeholder="Height"/>
        <TextField style={inputStyle} type="number" value={weight} onChange={handleWeightChange} placeholder="Weight"/>
        <TextField style={inputStyle} type="number" value={age} onChange={handleAgeChange} placeholder="Age"/>
        <Button style={buttonStyle} onClick={calculate}>Calculate</Button>
      </FormControl>

      <h1>You can Knock-Off {result} Tatzpi before you die</h1>

    </div>
  );
}


export default App;
