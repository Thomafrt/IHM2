import Button from './components/Button.jsx'
import Check from './components/Check.jsx'
import { useState } from 'react'


const style = {textAlign : "center", alignItems : "center", justifyContent : "center", display : "flex", height : "50vh"}
const style2 = {border : "2px solid black", padding:"10px", backgroundColor : "grey"}


const click1 = () => {alert("Bouton 1 cliqué")}


function App() {


  const [nb, setNb] = useState(0);
  const increment = () => {
    setNb(nb + 1);
  }


  const [isChecked, setIsChecked] = useState(true)
  const check = () => {
    setIsChecked(!isChecked)
  }


  const [isTextBlue, setIsTextBlue] = useState(false);
  const handleCheckboxChange = () => {
    setIsTextBlue(!isTextBlue);
  };
  const textStyles = {
    ...style2,
    color: isTextBlue ? "blue" : "red",
  };
 
console.log(textStyles)
  return <>
    {isChecked && <h1 style={style}>
      <span style={textStyles}>Wouhou j’adore React</span>
    </h1>}


    <p>Vous avez cliqué {nb} fois</p>


    <Button value="Bouton 1" onClick={click1}/>
    <Button value="Incrémenter" onClick={increment}/>
    <Check onCheck={check} label="Cacher le titre"/>
    <Check onCheck={handleCheckboxChange} label="Changer de couleur" />
  </>
}


export default App