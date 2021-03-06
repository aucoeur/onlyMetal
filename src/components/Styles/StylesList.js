import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';

import Style from './Style';
import { alphabetize, groupByStyle } from '../../../data/utils';

const Separator = () => <View style={style.separator} />

export default function StylesList({navigation}) {

  const sortedStyles = alphabetize(Object.keys(groupByStyle))

  return (
    <SafeAreaView style={style.container}>
    <View style={style.listContainer}>
      <FlatList
        data={sortedStyles}
        renderItem={({item}) => (
          <Style
            name={item}
            showDetails={() => {
              navigation.navigate('StyleDetails', {
                name: item,
                item: groupByStyle[item]
              });
            }}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
    </SafeAreaView>
  )
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
    backgroundColor: "#000",
    padding: 15,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
});
