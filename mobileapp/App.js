import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './Components/Calculator';

export default function App() {
  return (
    <View style={style.style}>
      <Calculator/>
    </View>
  );
}

const style = StyleSheet.create({
  style: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#323232'
  }
})
