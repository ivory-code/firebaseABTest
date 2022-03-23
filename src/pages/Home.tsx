import React from 'react'
import {ScrollView, Text} from 'react-native'
import Header from '../components/Header'
import Link from '../components/Link'
import RefreshConfig from '../components/RefreshConfig'
import {StackParamList} from 'App'
import {StackNavigationProp} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'

type HomeScreenProp = StackNavigationProp<StackParamList, 'Home'>

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>()

  return (
    <ScrollView>
      {__DEV__ && <Text>Dev mode on</Text>}
      <Header />
      <RefreshConfig />
      <Link
        text="Test Boolean"
        press={() => navigation.navigate('TestBoolean')}
      />
      <Link text="Test JSON" press={() => navigation.navigate('TestJSON')} />
      <Link
        text="Test String"
        press={() => navigation.navigate('TestString')}
      />
      <Link
        text="Test Number"
        press={() => navigation.navigate('TestNumber')}
      />
    </ScrollView>
  )
}

export default Home
