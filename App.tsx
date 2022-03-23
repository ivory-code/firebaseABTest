import React from 'react'
import {LogBox} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/pages/Home'
import TestBoolean from './src/components/TestBoolean'
import TestJSON from './src/components/TestJSON'
import TestString from './src/components/TestString'
import TestNumber from './src/components/TestNumber'
import {fetchConfig} from './src/utils/firebase'

fetchConfig().catch(console.log)

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])

export type StackParamList = {
  Home: undefined
  TestBoolean: undefined
  TestJSON: undefined
  TestString: undefined
  TestNumber: undefined
}

const Stack = createStackNavigator<StackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Experiments',
          }}
        />
        <Stack.Screen
          name="TestBoolean"
          component={TestBoolean}
          options={{
            title: 'Test Boolean',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="TestJSON"
          component={TestJSON}
          options={{
            title: 'Test JSON',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="TestString"
          component={TestString}
          options={{
            title: 'Test String',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="TestNumber"
          component={TestNumber}
          options={{
            title: 'Test Number',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
