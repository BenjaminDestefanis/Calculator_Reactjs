import './App.css';

import Logo from './Images/calc-logo.png'
import Button from './Components/Buttton';
import Display from './Components/Display';
import ClearButton from './Components/ClearButton';

 import { useState } from 'react'; 

import { evaluate } from 'mathjs';



function App() {

    const [display , setDisplay] = useState('')
   

    const inputChange = (value) => {
                        //  5

      //console.log("Probando")
      setDisplay(display + value)

    }

    const calcResult = () => {
      if(!display) return display;
      console.log(evaluate(display))
      setDisplay(evaluate(display))
    }



  return (
    <div className="App">

      <div className='container-logo'>

        <h1 className='app-name'> Calculadora con React.js</h1>
        
        <img 
          className='logo'
          src={Logo} 
          alt='Loco-Img'/>
      </div>


      <div className='calc-container'>

        <Display display={ display }></Display>

        <div className='row'>
            <Button changeClick={ inputChange } >1</Button>
            <Button changeClick={ inputChange }>2</Button>
            <Button changeClick={ inputChange }>3</Button>
            <Button changeClick={ inputChange }>+</Button>
        </div>
        
        <div className='row'>
            <Button changeClick={ inputChange }>4</Button>
            <Button changeClick={ inputChange }>5</Button>
            <Button changeClick={ inputChange }>6</Button>
            <Button changeClick={ inputChange }>-</Button>
        </div>

        <div className='row'>
            <Button changeClick={ inputChange }>7</Button>
            <Button changeClick={ inputChange }>8</Button>
            <Button changeClick={ inputChange }>9</Button>
            <Button changeClick={ inputChange }>*</Button>
        </div>

        <div className='row'>
            <Button changeClick={ calcResult }>=</Button>
            <Button changeClick={ inputChange }>0</Button>
            <Button changeClick={ inputChange }>.</Button>
            <Button changeClick={ inputChange }>/</Button>
        </div>

        <div className='row'>
            <Button changeClick={ inputChange }>(</Button>
            <Button changeClick={ inputChange }>)</Button>
            <ClearButton changeClick={ ()  => setDisplay('') }> Clear </ClearButton> 
        </div>
        

      </div>
      
    </div>
  );
}

export default App;
