import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StylesList from '../components/Styles/StylesList';
import StyleDetails from '../components/Styles/StyleDetails';

const Stack = createStackNavigator();

export default function StylessScreen() {

  return (
    <Stack.Navigator screenOptions={stackStyle}>
      <Stack.Screen name="Styles" component={StylesList} />
      <Stack.Screen name="StyleDetails" component={StyleDetails} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
  );
}

const stackStyle = ({
  headerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
