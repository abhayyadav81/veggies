import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Product = () => {
    // const [shouldShow,setShouldShow]=useState(true)
    return (
        <ScrollView horizontal={true} >
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row',paddingRight:50,paddingLeft:10 }}>
                <FontAwesome name="circle" size={60} color="#C0C0C0" />

               
                <FontAwesome style={{ marginLeft: 20 }} name="circle" size={60} color="#C0C0C0" />
              
               

                
            </View>

        </View >
        </ScrollView>
    )
}

export default Product

const styles = StyleSheet.create({})