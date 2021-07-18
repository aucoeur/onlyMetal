import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function StyleDetails({route}) {
  const {_, item} = route.params;
  const renderItem = ({item}) =>
    (<View key={item.band_name}>
      <Text style={item.split === '-' ? style.name : style.deadname}>{item.band_name}</Text>
    </View>)

  return (
    <View style={style.container}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.band_name}
        renderItem={renderItem}
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
    justifyContent: 'space-around',
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
