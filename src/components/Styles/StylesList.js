import React from 'react';
import { Flatlist } from 'react-native';

import Style from './Style';
import getUniqueStyles from '../../../data/utils';

export default function StylesList() {
  return (
    <Flatlist
      data={getUniqueStyles}
      renderItem={({ item }) => (
        <Style
          key={item.name}
          name={item.name}
          showDetails={() => {
            navigation.navigate('StylesDetails', { item });
          }}
          />
      )}
    />
  );
}
