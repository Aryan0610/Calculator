import { useState } from 'react'
import './Calculator.css'
import Keyboard from './Keyboard'
import Textarea, { TextArea2 } from './textarea'
import Backspace from './Backspace'
function Calculator() {
    const [Brackets, setBrackets] = useState(false)
    const [textarea, setTextarea] = useState([])
    const [textarea2, setTextarea2] = useState([])
    const [temp, setTemp] = useState(null)

    return (
        <div className="CalculatorContainer">
            <TextArea2 textarea2={textarea2}/>
            <Textarea textarea={textarea} textarea2={textarea2}/>
            <Backspace textarea={textarea} setTextarea={setTextarea}/>
            <Keyboard textarea={textarea} setTextarea={setTextarea} setTextarea2={setTextarea2} Brackets={Brackets} setBrackets={setBrackets}/>
        </div>
    )
}

export default Calculator