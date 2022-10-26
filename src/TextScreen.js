import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const TextScreen = () => {
  return (
    <ScrollView
      style={styles.screen}
      stickyHeaderIndices={[1]}
 >
     <View ><Text  style={{fontSize:200}}>Hello1</Text></View>
     <View ><Text style={{fontSize:200}}>Hello2</Text></View>
     <View><Text  style={{fontSize:200}}>Hello3</Text></View>
 </ScrollView>
  )
}

export default TextScreen

const styles = StyleSheet.create({})