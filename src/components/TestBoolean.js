import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import B from './Bold';
import CheckEvent from './CheckEvent';
import {images} from '../images/images';
import {getRemoteValue} from '../utils/firebase';
import {CUSTOM_LOGEVENT} from '../constants';
import analytics from '@react-native-firebase/analytics';

const TestBoolean = () => {
  const typeBoolean = getRemoteValue('typeBoolean').asBoolean();
  const variants = {
    mario: (
      <Image source={images.mario} style={styles.image} resizeMode="contain" />
    ),
    luigi: (
      <Image source={images.luigi} style={styles.image} resizeMode="contain" />
    ),
  };

  useEffect(() => {
    analytics().logEvent('typeBoolean', {
      checkValue: typeBoolean.toString(),
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Mario & Luigi /Boolean 🍄</Text>
        <Text style={styles.description}>
          In this one we will test an image! If you see <B>Mario</B> you are in{' '}
          <B>Variant A</B>, otherwise, if you see <B>Luigi</B>, you are in{' '}
          <B>Control Group</B>.
        </Text>
        {typeBoolean ? variants.mario : variants.luigi}
      </View>
      <CheckEvent
        eventName={CUSTOM_LOGEVENT.TYPE_BOOLEAN}
        value={typeBoolean}
      />
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
    color: '#333',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  image: {
    marginTop: 48,
    width: 144,
    height: 144,
    alignSelf: 'center',
  },
  button: {
    margin: 12,
    borderWidth: 2,
    borderColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: '#333',
  },
});

export default TestBoolean;
