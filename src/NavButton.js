import { View, Text ,ScrollView,Animated} from 'react-native'
import React, { useEffect, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';


const NavButton = (props) => {
    // console.log('sss',props.iconstyle)
  
    return (
        
        <Animated.View style={{ flexGrow: 1, alignItems: 'flex-end', marginRight: 10, justifyContent: 'center',opacity:props.iconstyle,
        transform:[{
            scale:props.scale
        }],
        // height:props.iconstyle!==1?1:0,width:props.iconstyle!==1?1:0
        }}  >
            <EvilIcons style={{height:30,width:30 ,position:'absolute',right:10}} name="search" size={28} color="black"
             onPress={()=> props.navigation.navigate('Searchscreen')
            }/>
        </Animated.View>
     
    )
}

export default NavButton
