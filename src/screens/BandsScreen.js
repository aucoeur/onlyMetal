import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BandsList from '../components/Bands/BandsList';
import BandDetailScreen from '../components/Bands/BandDetailScreen';

const Stack = createStackNavigator();

export default function BandsScreen() {

  return (
    <Stack.Navigator screenOptions={stackStyle}>
      <Stack.Screen name="Bands" component={BandsList} />
      <Stack.Screen name="BandDetails" component={BandDetailScreen} />
    </Stack.Navigator>
  );
}

const stackStyle = ({
  headerStyle: {
    backgroundColor: 'rgba(0, 0, 15, 0.7)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
