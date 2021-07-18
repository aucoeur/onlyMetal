import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { multiply } from '../../../data/utils';

export default function StylesDetail({route}) {
  const {item} = route.params;

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.header} />
          <Text style={item.split === '-' ? style.name : style.deadname }>{item.band_name}</Text>
          <Text style={style.name}>{item.split === '-' ? '🤘' : '💀'}</Text>
        </View>
      <View style={style.body}>
      <View style={style.row}>
        <Text style={style.title}>Formed: </Text>
        <Text style={style.subtitle}>{item.formed}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.title}>Split: </Text>
        <Text style={style.subtitle}>{item.split}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.title}>Origin: </Text>
        <Text style={style.subtitle}>{item.origin}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.title}>Style: </Text>
        <Text style={style.subtitle}>{item.style}</Text>
      </View>
      <View style={style.row}>
        <Text style={style.title}>Fans: </Text>
        <Text style={style.subtitle}>{multiply(item.fans, 1000)}</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#000',
  },
  deadname: {
    fontSize: 30,
    color: '#666',
    // backgroundColor: '#000',
    textDecorationLine: 'line-through',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
  },
  subtitle: {
    flexDirection: 'column',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#000',
  }
})
