import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Test1 from './src/components/Test1';
import Test2 from './src/components/Test2';
import Test3 from './src/components/Test3';
import Test4 from './src/components/Test4';
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
          name="home"
          component={Home}
          options={{
            title: 'Experiments',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="test1"
          component={Test1}
          options={{
            title: 'Test #1',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="test2"
          component={Test2}
          options={{
            title: 'Test #2',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="test3"
          component={Test3}
          options={{
            title: 'Test #3',
            ...navStyle,
          }}
        />
        <Stack.Screen
          name="test4"
          component={Test4}
          options={{
            title: 'Test #4',
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
