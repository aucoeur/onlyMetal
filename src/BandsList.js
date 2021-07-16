import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Band from './Band';

import bands from '../data/metal';

export default function BandsList({navigation}) {

  const renderBand = ({ item }) =>
    <Band
      name={item.band_name}
      showDetails={() => {
        navigation.navigate('BandDetails', { item });
      }}
    />



  return (
    <SafeAreaView style={style.container}>
      <View style={style.listContainer}>
        <FlatList
          data={bands}
          renderItem={renderBand}
          keyExtractor={(item) => (item.band_name)}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
