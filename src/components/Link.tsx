import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

interface Props {
  text: string
  press: () => void
}

const Link = ({text, press}: Props) => (
  <TouchableOpacity style={styles.button} onPress={press}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
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
})

export default Link
