import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BandsScreen() {
  return (
    <View style={style.container}>
      <Text>BandsScreen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
