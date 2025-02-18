import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const Buttoncompo = ({onPress,style, children}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
        <View>
            {children}
        </View>
    </TouchableOpacity>
  )
}

export default Buttoncompo