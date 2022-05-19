import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [calc, setCalc] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNumber(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (option, no) => {
    let no1 = parseInt(number["number" + (no - 1)]);
    let no2 = parseInt(number["number" + (no)]);

    let calc = 0;
    // console.log(number);
    switch (option) {
      case "+":
        calc = no1 + no2;
        break;
      case "-":
        calc = no1 - no2;
        break;
      case "*":
        calc = no1 * no2;
        break;
      case "/":
        calc = no1 / no2;
        break;
      default:
        calc = "";
    }
    setCalc(values => ({ ...values, ["calc" + no / 2]: calc }))
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Calculator App</h2>

      </div>

      <div className="calculator-container">
        <form>
          <h3>Adding</h3>
          <label> Num1:
            <input type="number" name='number1' onChange={handleChange}></input>
          </label>
          <label> Num2:
            <input type="number" name='number2' onChange={handleChange}></input>
          </label>
          <input type="text" value={calc.calc1 || ""} readOnly></input>
          <button type="button" name='add' onClick={() => handleSubmit("+", 2)}>Add</button>

          <h3>Minus</h3>
          <label> Num1:
            <input type="number" name='number3' onChange={handleChange}></input>
          </label>
          <label> Num2:
            <input type="number" name='number4' onChange={handleChange}></input>
          </label>
          <input type="text" value={calc.calc2 || ""} readOnly></input>
          <button type="button" name='minus' onClick={() => handleSubmit("-", 4)}>Minus</button>

          <h3>Times</h3>
          <label> Num1:
            <input type="number" name='number5' onChange={handleChange}></input>
          </label>
          <label> Num2:
            <input type="number" name='number6' onChange={handleChange}></input>
          </label>
          <input type="text" value={calc.calc3 || ""} readOnly></input>
          <button type="button" name='times' onClick={() => handleSubmit("*", 6)}>Times</button>

          <h3>Divide</h3>
          <label> Num1:
            <input type="number" name='number7' onChange={handleChange}></input>
          </label>
          <label> Num2:
            <input type="number" name='number8' onChange={handleChange}></input>
          </label>
          <input type="text" value={calc.calc4 || ""} readOnly></input>
          <button type="button" name='divide' onClick={() => handleSubmit("/", 8)} >Divide</button>

        </form>
      </div>

    </div>












  );
}

export default App;
