import React, {useEffect} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import analytics from '@react-native-firebase/analytics'
import {getRemoteValue} from '../utils/firebase'
import {CUSTOM_LOGEVENT} from '../constants'
import CheckEvent from './CheckEvent'
import B from './Bold'

const TestString = () => {
  const typeString = getRemoteValue('typeString').asString()

  useEffect(() => {
    analytics().logEvent('typeString', {
      checkValue: typeString,
    })
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Color / String 🎨</Text>
        <Text style={styles.description}>
          Let's try another way, let's use directly the value from{' '}
          <B>Remote Config</B>. Here you will se a rectangle with the color and
          string that cames from Firebase.
        </Text>
        <Text style={styles.description}>
          Variants are <B>Green</B>, <B>Red</B>, <B>Yellow</B>, <B>Orange</B>{' '}
          and <B>Skyblue</B>.
        </Text>
        <View style={[styles.rectangle, {backgroundColor: typeString}]}>
          <Text
            style={
              typeString === 'yellow' ? styles.black : styles.rectangleText
            }>
            <B>{typeString}</B>
          </Text>
        </View>
      </View>
      <CheckEvent eventName={CUSTOM_LOGEVENT.TYPE_STRING} value={typeString} />
    </ScrollView>
  )
}

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
  black: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
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
})

export default TestString
