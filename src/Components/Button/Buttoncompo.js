import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const Buttoncompo = (props) => {
  return (
    <TouchableOpacity>
        <View>
            {props.children}
            </View>
    </TouchableOpacity>
  )
}

export default Buttoncompo