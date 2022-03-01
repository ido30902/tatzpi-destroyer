import { FormControl } from '@mui/material';
import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import './App.css';
import countapi from 'countapi-js';

function App() {
  

  // countapi key 7946174a-b64b-4baf-bf9d-1be167af3c83
  // tatzpi_destroyer (name)

  //The function calculates the total amount of tatzpi one can defeat based of his stats
  const calculate = () => {
    
    if(height === 0 || weight === 0 || age === 0 ){
      onError()
      return;
    }
    
    // Old formula
    //result = Math.round(Math.pow(height / 100, Math.E) + (weight / 10) + age / 10); 

    // New formula
    result = Math.round((Math.pow(height / 100, Math.E) + (weight / 10) + ((Math.pow(age * -2, 2) + 75 * age) / 100)) / 3);

    // If the result is negative, set it to 0

    if(age < 7 || age >= 55){
      result = 0;
    }

    if(result <= 0){
      setResult(0);
    }else{
      setResult(result);
    }

  }

  // Error message if the user inputs a value that is not a number or equal to 0
  const [errorMessage, displayErrorMessage] = React.useState('');

  // Input fields
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');

  // Result
  var [result, setResult] = React.useState('');
  
  var [visits, setVisits] = React.useState('');

  // Changes the input fields
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const onError = (e) => {
    displayErrorMessage('Enter a number greater than 0');
  };

  countapi.get('tatzpi_destroyer', '7946174a-b64b-4baf-bf9d-1be167af3c83').then((result) => {
    setVisits(result.value);
    console.log(result.value);
  });

  // Styles
  const formStyle = {
    padding: '40px',
    textAlign: 'center',
    margin: '15px'
  };

  const buttonStyle = {
    backgroundColor: '#141414',
    border: '1px solid rgba(54, 54, 54, 0.6)',
    borderRadius: '20px',
    fontWeight: '600',
    outline: 'none',
    opacity: '1',
  };

  const inputStyle = {
    margin: '7px',
    textAlign: 'center',
  };

  const boxStyle = {
    margin: '15px',
    marginBottom: '5px',
    borderRadius: '20px',
    border: '2px solid black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    display: 'inline-block',
    backgroundColor: 'lightgrey',
  };

  // Render
  return (
    <div className="App">
      <Box style={boxStyle}>
        <FormControl style={formStyle}>
          <TextField style={inputStyle} type="number" value={height} onChange={handleHeightChange} placeholder="Height (cm)"/>
          <TextField style={inputStyle} type="number" value={weight} onChange={handleWeightChange} placeholder="Weight (kg)"/>
          <TextField style={inputStyle} type="number" value={age} onChange={handleAgeChange} placeholder="Age"/>
          <Button style={buttonStyle} onClick={calculate}>Calculate</Button>
        </FormControl>
      </Box>
      <h1>You can Knock-Off {result} Tatzpi before you die</h1>
      {errorMessage && <h1 className="error"> {errorMessage} </h1>}
      <footer>
        <p>Made by Ido Bar-Rabi</p>
        <p>This site has {visits} visits</p>
      </footer>
    </div>
  );
}


export default App;
