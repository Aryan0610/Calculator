import { View, Text, Pressable, Image, StyleSheet } from "react-native"

export function Backspace({textarea, setTextarea}) {
    
    function BtnClick() {
        let temp = new Array()
        for (let i=0; i < textarea.length-1; i++) {
            temp.push(textarea[i])
        }
        setTextarea(temp)
    }

    return (
        <View style={Styles.Styles}>
            <Pressable onPress={() => {BtnClick()}}>
                <Image source={require('../img/BackspaceIcon.png')}/>
            </Pressable>
        </View>
    )
}

const Styles = StyleSheet.create({
    Styles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10
    }
})