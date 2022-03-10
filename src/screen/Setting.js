import React from 'react'
import { View, Text } from 'react-native'
import Headers from '../components/Headers'


const Setting = props => {
  return (
    <View>
      <Headers navigation={props.navigation} title="Settings" />
      <Text>This is Settings Screen</Text>
    </View>
  )
}

export default Setting