import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function StyleDetails({route}) {
  const {name, item} = route.params;

  return (
    <View style={style.container}>
      <Text style={style.title}>{name}</Text>

      <View style={style.subtitle}>
        { item.map(obj =>
          <Text style={obj.split === '-' ? style.name : style.deadname}>{obj.band_name}</Text>
        )}
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
    alignItems: 'center',
    justifyContent: 'center',
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
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    marginBottom: 15,
  },
  subtitle: {
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#000',
  }
})
