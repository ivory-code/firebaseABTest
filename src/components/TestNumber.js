import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import analytics from '@react-native-firebase/analytics';
import {getRemoteValue} from '../utils/firebase';
import {CUSTOM_LOGEVENT} from '../constants';
import CheckEvent from './CheckEvent';
import B from './Bold';

const TestNumber = () => {
  const typeNumber = getRemoteValue('typeNumber').asNumber();

  useEffect(() => {
    analytics().logEvent('typeNumber', {
      checkValue: typeNumber.toString(),
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Color / Number 🎨</Text>
        <Text style={styles.description}>
          Let's try another way, let's use directly the value from{' '}
          <B>Remote Config</B>. Here you will se a rectangle with the color and
          hex color codes that cames from Firebase.
        </Text>
        <Text style={styles.description}>
          Variants are <B>330899</B>, <B>252399</B>, <B>760293</B> and{' '}
          <B>800000</B>.
        </Text>
        <View style={[styles.rectangle, {backgroundColor: `#${typeNumber}`}]}>
          <Text style={styles.rectangleText}>
            <B>My Hex Color Code is #{typeNumber}.</B>
          </Text>
        </View>
      </View>
      <CheckEvent eventName={CUSTOM_LOGEVENT.TYPE_NUMBER} value={typeNumber} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  rectangleText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  rectangle: {
    width: 144,
    height: 72,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default TestNumber;
