import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function StyleDetails({route}) {
  const {name, item} = route.params;

  return (
    <View style={style.container}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.band_name}
        renderItem={({item}) =>
          <Text style={item.split === '-' ? style.name : style.deadname}>{item.band_name}</Text>
        }
        />
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
    paddingTop: 20,
  },
  name: {
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#000',
    padding: 7,
  },
  deadname: {
    fontSize: 25,
    color: '#666',
    textDecorationLine: 'line-through',
    padding: 7,
  },
})
