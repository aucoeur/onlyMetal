import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BandsScreen from './src/screens/BandsScreen';
import StatsScreen from './src/screens/StatsScreen';
import StylesScreen from './src/screens/StylesScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Bands':
                iconName = 'fist-raised';
                break;
              case 'Stats':
                iconName = 'chart-bar'
                break;
              case 'Styles':
                iconName = 'music'
                break;
              default:
                break;

            }

            return <Icon name={iconName} size={24} color={color} />
          },
          })}
          tabBarOptions={{
             activeTintColor: 'tomato',
             inactiveTintColor: 'lightgrey',
             labelStyle: {
                fontSize: 12,
              },
              style: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                paddingTop: 5,

              }
            }}
          >
        <Tab.Screen name="Bands" component={BandsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Styles" component={StylesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
