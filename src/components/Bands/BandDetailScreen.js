import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function multiply(a, b) {
  // convert to number
  const resNum = Number(a) * Number(b);
  // convert to locale string
  return resNum.toLocaleString();

}

export default function BandDetailScreen({route}) {
  const {item} = route.params;

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.header}>{item.band_name} 🤘</Text>
        <Text style={style.title}>{item.formed}{item.split !== '-' ? `-${item.split}` : '' }</Text>
      </View>
      <View style={style.details}>
        <Text style={style.title}>Origin: </Text>
        <Text style={style.subtitle}>{item.origin}</Text>
      </View>
      <View style={style.details}>
        <Text style={style.title}>Style: </Text>
        <Text style={style.subtitle}>{item.style}</Text>
      </View>
      <View style={style.details}>
        <Text style={style.title}>Fans: </Text>
        <Text style={style.subtitle}>{multiply(item.fans, 1000)}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    paddingRight: 10,
    paddingBottom: 5,
    alignItems: 'flex-start',
  },
  subtitle: {
    flexDirection: 'column',
    flexBasis: 100,
    // flexWrap: 'wrap',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }
})
