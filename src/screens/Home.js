import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import Link from '../components/Link';
import analytics from '@react-native-firebase/analytics';
import RefreshConfig from '../components/RefreshConfig';
import {getRemoteValue} from '../utils/firebase';

const Home = ({navigation}) => {
  const pressEvent = useCallback(() => {
    const {logo} = JSON.parse(getRemoteValue('exJson_220317').asString());
    analytics().logEvent('testAB_2', {
      checkValue: logo,
    });
    navigation.navigate('test2');
  }, []);

  const pressSecondEvent = useCallback(() => {
    const {logo} = JSON.parse(getRemoteValue('exJson').asString());
    analytics().logEvent('testAB_4', {
      checkValue: logo,
    });
    navigation.navigate('test4');
  }, []);

  return (
    <ScrollView>
      <Header />
      <RefreshConfig />
      <Link text="Test #1" press={() => navigation.navigate('test1')} />
      <Link text="Test #2" press={pressEvent} />
      <Link text="Test #3" press={() => navigation.navigate('test3')} />
      <Link text="Test #4" press={pressSecondEvent} />
    </ScrollView>
  );
};

export default Home;
