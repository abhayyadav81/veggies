import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ThirdScreen = ({ navigation }) => {
    return (
        <View style={{ padding: 15 ,flex:1}}>
            <Text style={{ color: 'grey', fontSize: 18 }}>Phone number</Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>+91 - 893989839898</Text>
            <TextInput placeholder=" Write Number" style={{ fontSize: 20, marginTop: 25,paddingLeft:1,borderRadius:7 }} />
            <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'grey', fontSize: 18, marginTop: 15 }}>need support?</Text>
                <Text style={{ color: 'black', fontSize: 18, marginTop: 10 }}>mail us at <Text style={{ color: '#00CCCC' }}>veggies@gmail.com</Text></Text>
            </View>
            <View style={{ justifyContent:'flex-end',flex:1,alignItems:'center'}}>
                <Text style={{fontSize:25,color:'#DC143C'}}>
                   Logout
                </Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    margin: {
        padding: 10, paddingTop: 20,
        flex: 1

    }
})
export default ThirdScreen