import './App.css';

var result = 0;
var weight = 0;
var height = 0;

function App() {
  
  const calculate = (e) => {
    
    result = Math.round(Math.pow(e.value.height, Math.E) + (e.value.weight/100) + 1);

    console.log('works' + result);

    //var weight = document.getElementsByClassName("weight").value;
    //var height = document.getElementsByClassName("height").value;
    
    document.getElementsByClassName("result").innerHTML= result;
  }

  return (
    <div className="App">
      <fieldset>
         <label>
           <p>Weight</p>
           <input value={weight} className="weight" />
         </label>
         <label>
           <p>Height</p>
           <input value={height} className="height" />
         </label>
       </fieldset>
       <button type="submit" onSubmit={calculate}>Submit</button>
    </div>
  );
}


export default App;
