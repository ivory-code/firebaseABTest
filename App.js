import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import TestBoolean from './src/components/TestBoolean';
import TestJSON from './src/components/TestJSON';
import TestString from './src/components/TestString';
import TestNumber from './src/components/TestNumber';
import {fetchConfig} from './src/utils/firebase';

fetchConfig().catch(console.log);

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Experiments',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="TestBoolean"
          component={TestBoolean}
          options={{
            title: 'Test Boolean',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="TestJSON"
          component={TestJSON}
          options={{
            title: 'Test JSON',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="TestString"
          component={TestString}
          options={{
            title: 'Test String',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="TestNumber"
          component={TestNumber}
          options={{
            title: 'Test Number',
            ...navStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const navStyle = {
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerBackTitle: 'Back',
};
