import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// eanimated';
import { Entypo } from '@expo/vector-icons'; 


const Header = ({navigation}) => {
  const [search, setSearch]=useState(false)
 
  return (
    <View style={{ flexDirection: 'row' ,padding:10,backgroundColor: '#3CB371',justifyContent:'flex-end',alignItems:'center',
     left:0,right:0,height:60,zIndex:-2,
    }}>
                    <View style={{justifyContent:'flex-start',flexGrow:1,}}>
                       {!search? <Text style={{color:'white',fontSize:22,marginLeft:10}}>Veggies</Text>:
                        <TextInput style={{ backgroundColor:'white'}}  />}
                    </View>
                     {!search? <TouchableOpacity onPress={()=>setSearch(true)} >
                        <EvilIcons style={{ marginRight: 20, }} name="search" size={28} color="white"
                         
                        />
                      </TouchableOpacity>:<Entypo name="cross" size={24} color="black" />}

                      <Ionicons name="person" size={24} color="white" onPress={() => navigation.navigate('ThirdSceeen')} />
                    </View>
  )
}

export default Header