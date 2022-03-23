import React, {useCallback, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface Props {
  eventName: string
  value: boolean | number | string
}

const CheckEvent = ({eventName, value}: Props) => {
  const [isChecked, setChecked] = useState(false)

  const pressButton = useCallback(() => {
    if (!isChecked) {
      setChecked(true)
    } else if (isChecked) {
      setChecked(false)
    }
  }, [isChecked])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pressButton}>
        <Text style={styles.text}>
          {!isChecked ? 'Check My Event Logs' : 'Hide My Event Logs'}
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>
          {isChecked &&
            `Event Name: ${eventName}\nCustom Demensions: checkValue\nValue: ${value}`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
})

export default CheckEvent
