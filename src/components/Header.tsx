import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import B from './Bold'

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Firebase Test 🧪👨🏻‍🔬</Text>
    <Text style={styles.description}>
      Hi there! This is a demo project to show the power of Firebase{' '}
      <B>Custom Log Events</B>, <B>A/B Testing</B> and <B>Remote Config</B>{' '}
      tools with React Native.
    </Text>
  </View>
)

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
})

export default Header
