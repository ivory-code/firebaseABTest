import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import B from './Bold';
import {images} from '../images/images';
import {getRemoteValue} from '../utils/firebase';

const Test1 = () => {
  // modify boolean true to false
  const experiment = getRemoteValue('experiment_1');
  // console.log(typeof experiment, '???');
  // console.log(experiment, 'mario? luigi?');

  const variants = {
    mario: (
      <Image source={images.mario} style={styles.image} resizeMode="contain" />
    ),
    luigi: (
      <Image source={images.luigi} style={styles.image} resizeMode="contain" />
    ),
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Mario & Luigi 🍄</Text>
        <Text style={styles.description}>
          In this one we will test an image! If you see <B>Mario</B> you are in{' '}
          <B>Control Group</B>, otherwise, if you see <B>Luigi</B>, you are in{' '}
          <B>Variant A</B>.
        </Text>
        {experiment === 'false' ? variants.mario : variants.luigi}
      </View>
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
});

export default Test1;
