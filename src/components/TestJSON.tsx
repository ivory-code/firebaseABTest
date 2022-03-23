import React, {useEffect} from 'react'
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {images} from '../images/images'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {getRemoteValue} from '../utils/firebase'
import {CUSTOM_LOGEVENT} from '../constants'
import CheckEvent from './CheckEvent'
import B from './Bold'
import analytics from '@react-native-firebase/analytics'

interface DetailProps {
  text: string
  image: object
  color: string
  url: string
}

interface NameProps {
  youtube: DetailProps
  linkedin: DetailProps
  instagram: DetailProps
  medium: DetailProps
  github: DetailProps
}

const config: NameProps = {
  youtube: {
    text: 'YouToube',
    image: images.youtube,
    color: '#FF0000',
    url: 'https://www.youtube.com/',
  },
  linkedin: {
    text: 'LinkedIn',
    image: images.linkedin,
    color: '#0077B5',
    url: 'https://www.linkedin.com/',
  },
  instagram: {
    text: 'Instagram',
    image: images.instagram,
    color: '#262625',
    url: 'https://www.instagram.com/',
  },
  medium: {
    text: 'Medium',
    image: images.medium,
    color: '#292929',
    url: 'https://www.medium.com/',
  },
  github: {
    text: 'GitHub',
    image: images.github,
    color: '#333333',
    url: 'https://www.github.com/',
  },
}

const TestJSON = () => {
  const {logo} = JSON.parse(getRemoteValue('typeJSON').asString())

  useEffect(() => {
    analytics().logEvent('typeJSON', {
      checkValue: logo,
    })
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Images / JSON 🔗</Text>
        <Text style={styles.description}>
          Ok, let's test more than two posibilities! Here you will see a button
          that opens a external website.
        </Text>
        <Text style={styles.description}>
          Variants are: <B>LinkedIn</B>, <B>Youtube</B>, <B>Instagram</B>,{' '}
          <B>Medium</B> and <B>GitHub</B>.
        </Text>
        <TouchableOpacity
          style={[styles.button, {borderColor: config[logo]?.color}]}
          onPress={() => Linking.openURL(config[logo]?.url)}>
          <Image
            source={config[logo]?.image}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={[styles.description, {color: config[logo]?.color}]}>
            <B>{config[logo]?.text}</B>
          </Text>
        </TouchableOpacity>
      </View>
      <CheckEvent eventName={CUSTOM_LOGEVENT.TYPE_JSON} value={logo} />
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  button: {
    marginTop: 48,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 32,
  },
})

export default TestJSON
