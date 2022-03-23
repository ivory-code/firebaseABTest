import remoteConfig from '@react-native-firebase/remote-config'

export const fetchConfig = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 1000,
  })
  await remoteConfig().fetchAndActivate()
}

export const refreshConfig = async () => await remoteConfig().fetchAndActivate()

export const getRemoteValue = (key: string) => remoteConfig().getValue(key)
