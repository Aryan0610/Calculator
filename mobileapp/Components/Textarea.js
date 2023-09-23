import { Image, StyleSheet, Text, View } from 'react-native';

export function Textarea({textarea, textarea2})  {  
    var text = ''
    var data = new Array()
    
    for (let i = 0; i < textarea.length; i++) {
        text = `${text}${textarea[i].text}`
    }

    const TempDiv = textarea.map(function(item, i) {
        if (item.text === '*') {
            return (
                <Image key={i} source={require('../img/MultiplicationText.png')}/>
            )
        } else if (item.text === '/') {
            return (
                <Image key={i} source={require('../img/DivisionText.png')}/>  
            )
        } else if (item.text === '+') {
            return (
                <Text key={i}>
                    {item.text}
                </Text>
            )
        } else if (item.text === '-') {
            return (
                <Text key={i}>
                    {item.text}
                </Text>
            )
        } else {
            return (
                <Text key={i}>{item.text}</Text>
            )
        }
    })

    return (
        <View style={Textarea1Styles.container}>
            <Text style={Textarea1Styles.text}>
                {TempDiv}
            </Text>
        </View>
    )
}

export function Textarea2({textarea2}) {
    const TempDiv = textarea2.map(function(item, i) {
        if (item.text === '*') {
            return (
                <Image key={i} source={require('../img/MultiplicationText.png')}/>
            )
        } else if (item.text === '/') {
            return (
                <Image key={i} source={require('../img/DivisionText.png')}/>  
            )
        } else if (item.text === '+') {
            return (
                <Text key={i}>
                    {item.text}
                </Text>
            )
        } else if (item.text === '-') {
            return (
                <Text key={i}>
                    {item.text}
                </Text>
            )
        } else {
            return (
                <Text key={i}>{item.text}</Text>
            )
        }
    })

    return (
        <View style={Textarea2Styles.container}>
            <Text style={Textarea2Styles.text}>
                {TempDiv}
            </Text>
        </View>
    )
} 

const Textarea1Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20
    },

    text: {
        fontSize: 32,
        color: '#DADADA'
    }
})

const Textarea2Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20
    },

    text: {
        fontSize: 20,
        color: '#DADADA'
    }
})