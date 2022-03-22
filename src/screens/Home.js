import React from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';
import RefreshConfig from '../components/RefreshConfig';

const Home = ({navigation}) => {
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
  );
};

export default Home;
