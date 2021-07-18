import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { getCount, formatFans, getUniqueCountries, getActiveBands, getSplitBands, getUniqueStyles } from '../../../data/utils';

export default function Stats() {

  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>
        <Text style={style.header}>MetalOnlyFans  🤘</Text>
        <View style={style.row}>
          <Text style={style.title}>Count: </Text>
          <Text style={style.subtitle}>{getCount}</Text>
        </View>
        <View style={style.row}>
          <Text style={style.title}>Fans: </Text>
          <Text style={style.subtitle}>{formatFans}</Text>
        </View>
        <View style={style.row}>
          <Text style={style.title}>Countries:</Text>
          <Text style={style.subtitle}>{getUniqueCountries.length}</Text>
        </View>
        <View style={style.row}>
          <Text style={style.title}>Active: </Text>
          <Text style={style.subtitle}>{getActiveBands}</Text>
        </View>
        <View style={style.row}>
          <Text style={style.title}>Split: </Text>
          <Text style={style.subtitle}>{getSplitBands}</Text>
        </View>
        <View style={style.row}>
          <Text style={style.title}>Unique Styles: </Text>
          <Text style={style.subtitle}>{getUniqueStyles.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    padding: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    padding: 20,
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
});
