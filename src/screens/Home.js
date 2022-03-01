import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';
import RefreshConfig from '../components/RefreshConfig';

const Home = ({navigation}) => (
  <ScrollView>
    <Header />
    <RefreshConfig />
    <Link text="Test #1" press={() => navigation.navigate('test1')} />
    <Link text="Test #2" press={() => navigation.navigate('test2')} />
  </ScrollView>
);

export default Home;
