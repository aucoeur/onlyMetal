import React from 'react';
import {
  TouchableHighlight, Text, StyleSheet, View
} from 'react-native';

import { Ionicons as Icon } from '@expo/vector-icons';

export default function Band({ name, showDetails }) {

  return (
    <TouchableHighlight
      style={style.container}
      underlayColor="rgba(0,0,0,0.1)"
      onPress={() => showDetails(name) }
    >

      <View style={style.head}>
        <Text style={style.headText}>{name}</Text>
        <Icon name="ios-chevron-forward" size={36} color="rgba(255,255,255,0.4)" />
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  head: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
  },
  headText: {
    fontSize: 20,
    color: "#fff",
  },
});
