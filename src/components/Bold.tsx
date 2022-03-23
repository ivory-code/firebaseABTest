import React, {Children} from 'react'
import {StyleSheet, Text} from 'react-native'

interface Props {
  children: string
}

const Bold = ({children}: Props) => <Text style={styles.bold}>{children}</Text>

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
})

export default Bold
