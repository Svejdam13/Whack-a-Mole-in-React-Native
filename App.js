
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './components/Square'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Whack a Mole</Text>
      <View>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
