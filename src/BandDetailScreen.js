import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function BandDetailScreen({route}) {
  const {item} = route.params;

  return (
    <View style={style.container}>
      <Text style={style.title}>Band: {item.band_name}</Text>
      <Text style={style.subtitle}>{item.formed}{item.split !== '-' ? `-${item.split}` : '' }</Text>
      <Text style={style.subtitle}>Origin: {item.origin}</Text>
      <Text style={style.subtitle}>Style: {item.style}</Text>
      <Text style={style.subtitle}>Fans: {item.fans}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    backgroundColor: '#fff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
