import { Text, View } from 'react-native';
import { Textarea, Textarea2 } from './Textarea';
import { Backspace } from './Backspace';
import { Keyboard } from './Keyboard';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

function Calculator() {
    const [Brackets, setBrackets] = useState(false)
    const [textarea, setTextarea] = useState([])
    const [textarea2, setTextarea2] = useState([])
    const [temp, setTemp] = useState(null)

    return (
        <View style={CalculatorStyle.Container}>
            <Textarea2 textarea2={textarea2}/>
            <Textarea textarea={textarea} textarea2={textarea2}/>
            <Backspace textarea={textarea} setTextarea={setTextarea}/>
            <Keyboard textarea={textarea} setTextarea={setTextarea} setTextarea2={setTextarea2} Brackets={Brackets} setBrackets={setBrackets}/>
        </View>
    )
}

const CalculatorStyle = StyleSheet.create({
    Container: {
        position: 'absolute',
        bottom: 0
    }
})

export default Calculator