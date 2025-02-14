import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const Buttoncompo = ({onPress,children}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View>
            {children}
        </View>
    </TouchableOpacity>
  )
}

export default Buttoncompo