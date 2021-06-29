import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MusicListScreen from '../musicListScreen';
import MusicDetailScreen from '../musicDetailScreen';

const Routes = () => {
  const MusicStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MusicStack.Navigator>
        <MusicStack.Screen
          name={'MusicListScreen'}
          component={MusicListScreen}
          options={{headerShown: false, title: 'Music List'}}
        />
        <MusicStack.Screen
          name={'MusicDetailScreen'}
          component={MusicDetailScreen}
          options={{title: 'Music Details'}}
        />
      </MusicStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
