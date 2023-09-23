import { Pressable, View, Text, StyleSheet, Dimensions, Image } from "react-native"


export function Keyboard({textarea, setTextarea, setTextarea2, Brackets, setBrackets}) {
    var clear = false

    const BtnArray = [{
        name: 'Clear',
        text: 'C',
        type: 'Clear'
    }, {
        name: 'Brackets',
        text: '()',
        type: 'Brackets'
    }, {
        name: 'Percentage',
        text: '%',
        type: 'Operator'
    }, {
        name: 'Divide',
        text: '/',
        type: 'Operator'
    }, {
        name: 'Num',
        text: 7,
        type: 'Number'
    }, {
        name: 'Num',
        text: 8,
        type: 'Number'
    }, {
        name: 'Num',
        text: 9,
        type: 'Number'
    }, {
        name: 'Multiply',
        text: '*',
        type: 'Operator'
    }, {
        name: 'Num',
        text: 4,
        type: 'Number'
    }, {
        name: 'Num',
        text: 5,
        type: 'Number'
    }, {
        name: 'Num',
        text: 6,
        type: 'Number'
    }, {
        name: 'Subtract',
        text: '-',
        type: 'Operator'
    }, {
        name: 'Num',
        text: 1,
        type: 'Number'
    }, {
        name: 'Num',
        text: 2,
        type: 'Number'
    }, {
        name: 'Num',
        text: 3,
        type: 'Number'
    }, {
        name: 'Add',
        text: '+',
        type: 'Operator'
    }, {
        name: 'plusOrMinus',
        text: '+/-',
        type: 'plusOrMinus'
    }, {
        name: 'Num',
        text: 0,
        type: 'Number'
    }, {
        name: 'Decimal',
        text: '.',
        type: 'Number'
    }, {
        name: 'Equal',
        text: '=',
        type: 'Equal'
    },]

    const EqualFunc = (text) => {
        let num1Arr = new Array()
        let num2Arr = new Array()
        let operatorArr = new Array()

        for (let i=0; i<text.length; i++) {
            if (operatorArr.length === 0 && text[i].type !== 'Brackets') {
                if (text[i].type === 'Operator' && num1Arr.length > 0) {
                    operatorArr.push(text[i])
                } else {
                    num1Arr.push(text[i])
                }
            } else if (text[i].type === 'Brackets') {
                let bracketsArr = new Array()
                i++
                while ((text[i].type !== 'Brackets') && (text.length > i+1)) {
                    bracketsArr.push(text[i])
                    i++
                    if (((text.length > i) === true) && ((text.length > i+1) === false) && (text[i].type === 'Number')) {
                        bracketsArr.push(text[i])
                    }
                }

                if (bracketsArr.length === 0) {
                    bracketsArr.push(text[i])
                }

                if (num1Arr.length > 0) {
                   num2Arr.push({
                    name: 'Num',
                    text: EqualFunc(bracketsArr),
                    type: 'Number'
                    })
                } else {
                    num1Arr.push({
                        name: 'Num',
                        text: EqualFunc(bracketsArr),
                        type: 'Number'
                    })
                }
            } else {
                num2Arr.push(text[i])
            }
        }

        let num1 = 0
        let num2 = 0
        let num1Decimal
        let num1DecimalDigit = 10
        let num2Decimal
        let num2DecimalDigit = 10
        let num1Negative = false

        for (let i=0; i<num1Arr.length; i++) {
            if (num1Arr[i].name === 'Decimal') {
                num1Decimal = i
            }
        }

        for (let i=0; i<num2Arr.length; i++) {
            if (num2Arr[i].name === 'Decimal') {
                num2Decimal = i
            }
        }

        for (let i=0; i<num1Arr.length; i++) {
            if (num1Decimal) {
                if (num1Decimal > i) {
                    num1 = num1*10 + num1Arr[i].text
                } else {
                    if (num1Arr[i].text !== '.') {
                        num1 = num1 + num1Arr[i].text/num1DecimalDigit
                        num1DecimalDigit *= 10
                    }
                }
            } else if (num1Arr[i].name === "Subtract") {
                num1Negative = true
            } else {
                num1 = num1*10 + num1Arr[i].text
            }
        }

        if (num1Negative) {
            num1 *= -1
        }

        const checkNum2 = () => {
            for (let j = 0; j < num2Arr.length; j++) {
                if (num2Arr[j].type === 'Operator') {
                    return true
                }
            }
        }

        if (checkNum2()) {
            num2 = EqualFunc(num2Arr)
        } else {
            for (let i=0; i<num2Arr.length; i++) {
                if (num2Decimal) {
                    if (num2Decimal > i) {
                        num2 = num2*10 + num2Arr[i].text
                    } else {
                        if (num2Arr[i].text !== '.') {
                            num2 = num2 + num2Arr[i].text/num2DecimalDigit
                            num2DecimalDigit *= 10
                        }
                    }
                } else {
                    num2 = num2*10 + num2Arr[i].text
                }
            }
        }

        if (operatorArr.length > 0) {
            if (operatorArr[0].text === '+') {
                return num1 + num2
            } else if (operatorArr[0].text === '-') {
                return num1 - num2
            } else if (operatorArr[0].text === '*') {
                return num1 * num2
            } else if (operatorArr[0].text === '/') {
                return num1 / num2
            } else if (operatorArr[0].text === '%') {
                return (num1 / 100)*num2
            }
        } else {
            return num1
        }
    }

    function BtnClick(btnName) {
        if (btnName.type === 'Number') {
            let temp = textarea
            
            if (temp.length > 0) {
                if ((temp[temp.length-1].type === 'Brackets') && (temp[temp.length-1].text === ')')) {
                    temp.push({
                        name: 'Multiply',
                        text: '*',
                        type: 'Operator'
                    })
                }
            }

            if (temp.length > 0) {
                if (temp[temp.length-1].type === 'Operator' && btnName.name === 'Decimal') {
                    temp.push({
                        name: 'Num',
                        text: 0,
                        type: 'Number'
                    })
                }
            } else if (btnName.name === 'Decimal' && temp.length <= 0) {
                temp.push({
                    name: 'Num',
                    text: 0,
                    type: 'Number'
                })
            }

            setTextarea([...textarea, btnName])
        } else if (btnName.type === 'Operator') {
            if (textarea.length > 0) {
                var Arr = [...textarea]
                if ((Arr[Arr.length-1].type === 'Operator')) {
                    Arr[Arr.length-1] = btnName 
                    setTextarea(Arr)
                } else {
                    setTextarea([...textarea, btnName])
                }
            }
        } else if (btnName.type === 'Clear') {
            setTextarea([])
            setTextarea2([])
        } else if (btnName.type === 'Brackets') {
            let BracketsText = btnName
            var temp1 = new Array()

            if (Brackets === false) {
                if ((textarea.length > 0) && (textarea[textarea.length-1].type !== 'Operator')) {           
                    temp1.push({
                        name: 'Multiply',
                        text: '*',
                        type: 'Operator'
                    })
                }

                btnName.text = '('
                setBrackets(true)
            } else {
                btnName.text = ')'
                setBrackets(false)
            }

            if (temp1.length > 0) {
                let temp2 = [...textarea]
                temp1.push(BracketsText)
                
                for (let i=0; i<temp1.length; i++) {
                    temp2.push(temp1[i])
                }

                setTextarea(temp2)
            } else {
                setTextarea([...textarea, BracketsText])
            }
        } else if (btnName.type === 'plusOrMinus') {
            let temp = textarea
            let tempArr = new Array()
            let tempArr2 = new Array()
            let operatorExist = false
            if (temp.length > 0) {
                for (let i = temp.length-1; i >= 0; i--) {
                    if (temp[i].type === 'Operator') {
                        operatorExist = true
                    }
                    if (operatorExist === false) {
                        tempArr.push(temp[i]) 
                    } else {
                        tempArr2.push(temp[i])
                    }
                }
            }

            tempArr.push({
                name: 'Subtract',
                text: '-',
                type: 'Operator'        
            })

            
            tempArr.push({
                name: 'Brackets',
                text: '(',
                type: 'Brackets'       
            })

            setBrackets(true)

            tempArr.reverse()
            tempArr2.reverse()

            setTextarea(tempArr2.concat(tempArr))
        } else if (btnName.type === 'Equal') {
            let Arr = [{
                name: 'Num',
                text: EqualFunc(textarea),
                type: 'Number'
            }]

            setBrackets(false)
            setTextarea2(textarea)
            setTextarea(Arr)
        }
    }

    const row1 = BtnArray.map(function(item, i) {
        if (i < 4) {
            if (item.type === 'Clear') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Clear.png')}/>
                    </Pressable>
                )
            } else if (item.type === 'Brackets') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Brackets.png')}/>
                    </Pressable>
                )
            } else if (item.name === 'Percentage') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Percentage.png')}/>
                    </Pressable>
                )
            } else if (item.name === 'Divide') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Division.png')}/>
                    </Pressable>
                )
            } else {
                return (
                    <Pressable key={i} className="keyboardBtn" onClick={() => {BtnClick(item)}}>
                        <Text>{item.text}</Text>
                    </Pressable>
                )
            }
        }
    })

    const row2 = BtnArray.map(function(item, i) {
        if (3 < i && i < 8) {
            if (item.name === 'Multiply') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Multiplication.png')}/>
                    </Pressable>
                )
            } else {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardBtn} onPress={() => {BtnClick(item)}}>
                        <Text style={KeyboardStyles.KeyboardBtnText}>{item.text}</Text>
                    </Pressable>
                )
            }
        }
    })

    const row3 = BtnArray.map(function(item, i) {
        if (7 < i && i < 12) {
            if (item.name === 'Subtract') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Subtract.png')}/>
                    </Pressable>
                )
            } else {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardBtn} onPress={() => {BtnClick(item)}}>
                        <Text style={KeyboardStyles.KeyboardBtnText}>{item.text}</Text>
                    </Pressable>
                )
            }
        }
    })

    const row4 = BtnArray.map(function(item, i) {
        if (11 < i && i < 16) {
            if (item.name === 'Add') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Add.png')}/>
                    </Pressable>
                )
            } else {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardBtn} onPress={() => {BtnClick(item)}}>
                        <Text style={KeyboardStyles.KeyboardBtnText}>{item.text}</Text>
                    </Pressable>
                )
            }
        }
    })

    const row5 = BtnArray.map(function(item, i) {
        if (15 < i && i < 20) {
            if (item.type === 'Equal') {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardEqualOperatorBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/Equal.png')}/>
                    </Pressable>
                )                
            } else if (item.type === 'plusOrMinus') {
                    return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardBtn} onPress={() => {BtnClick(item)}}>
                        <Image source={require('../img/PlusOrMinus.png')}/>
                    </Pressable>
                    )                
            } else {
                return (
                    <Pressable key={i} style={KeyboardStyles.KeyboardBtn} onPress={() => {BtnClick(item)}}>
                        <Text style={KeyboardStyles.KeyboardBtnText}>{item.text}</Text>
                    </Pressable>
                )
            }
        }
    })

    return (
        <View style={KeyboardStyles.KeyboardContainer}>
            <View style={KeyboardStyles.KeyboardRow}>{row1}</View>
            <View style={KeyboardStyles.KeyboardRow}>{row2}</View>
            <View style={KeyboardStyles.KeyboardRow}>{row3}</View>
            <View style={KeyboardStyles.KeyboardRow}>{row4}</View>
            <View style={KeyboardStyles.KeyboardRow}>{row5}</View>
        </View>
    )
}

export default Keyboard

const screenWidth = Dimensions.get('window').width;


const KeyboardStyles = StyleSheet.create({
    KeyboardContainer: {
        width: screenWidth,
        backgroundColor: '#232323',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 20
    },

    KeyboardRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    KeyboardBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
    },

    KeyboardBtnText: {
        fontSize: 22,
        color: '#DADADA',
    },

    KeyboardOperatorBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
    },

    KeyboardOperatorBtnText: {
        fontSize: 22,
        color: '#FEA1A1',
    },

    KeyboardEqualOperatorBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#FEA1A1',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
    },
})