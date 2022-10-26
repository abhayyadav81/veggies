import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';




const SecondSceeen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const onClick = () => setShowResults(true)
  const [products, setProducts] = useState([
    {
      id: 1,
      image: require('./assets/potatoes.png'),
      price: 12,
      unit: 'kgs',
      text: 'Potatoes'
    },
    {
      id: 2,
      image: require('./assets/onion.png'),
      price: 15,
      unit: 'kgs',
      text: 'Onions'
    },
    {
      id: 3,
      image: require('./assets/onion.png'),
      price: 15,
      unit: 'kgs',
      text: 'Onions'
    },
    {
      id: 4,
      image: require('./assets/onion.png'),
      price: 15,
      unit: 'kgs',
      text: 'Onions'
    },

  ])
  return (
    <View style={{ flex: 1, }}>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>
        <Text style={{ color: 'grey', fontSize: 18 }}>Fresh veggies in your cart </Text>
      </View>
      {/* <ScrollView style={{ flexGrow: 1 }} horizontal={true}> */}
      <View style={{ marginBottom: 50, height: 170, paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }} >
        <FlatList
          horizontal
          data={products}
          style={{ height: 50 }}
          renderItem={({ item }) => {
            return (

              <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                <ScrollView>
                  <View>
                    <Image resizeMode='contain' style={styles.vegImage} source={item.image} />
                    <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.unit}</Text>
                  </View>
                </ScrollView>
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>

                </View>
                <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>

                </View>

              </View>


            )
          }}
        />


      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Our guarantee</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'grey', flexDirection: 'row', marginTop: 8 }}></View>
          <Text style={{ fontSize: 17, marginLeft: 10, color: 'grey' }}>that your veggies are <Text style={{ color: '#3CB371' }}>fresh</Text>,</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'grey', flexDirection: 'row', marginTop: 18 }}></View>
          <Text style={{ fontSize: 17, marginLeft: 10, color: 'grey', marginTop: 10 }}>that you get your veggies within 6 hrs.</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={.9} style={{ backgroundColor: '#3CB371', flexDirection: 'row', marginTop: 185 }}
        onPress={() => setModalVisible(true)} >
        <View>
          <Text style={{ fontSize: 20, color: 'white', marginVertical: 10, marginLeft: 10 }}>Place your order</Text>
        </View >
        <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <FontAwesome style={{ marginTop: 3, marginRight: 4 }} name="rupee" size={20} color="white" />
          <View>
            <Text style={{ fontSize: 22, color: 'white', marginRight: 10 }}>38</Text>
          </View>

        </View>
      </TouchableOpacity>

      <Modal

        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
                    
          setModalVisible(!modalVisible);
      }}
        
      >
        <View style={{ backgroundColor: 'black', flex: 3, opacity: .3 ,justifyContent:'flex-end',alignItems:'center'}} >
        {/* <AntDesign name="arrowdown" size={24} color="black" /> */}
        </View>
        <View style={{ backgroundColor: 'green', flex: 1, }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', backgroundColor: 'white', justifyContent: 'flex-end', flexGrow: 1, alignItems: 'center' }}>
            <Image source={require('./assets/potatoes.png')} style={{ height: 60, width: 80, marginTop: 10 }} />
            <View style={{ flexDirection: 'column', marginLeft: 20, justifyContent: "flex-end", alignItems: 'flex-end' }}>
              <Text>
                <FontAwesome name="rupee" size={22} color="black" />
                <Text style={{ fontSize: 24 }}>12</Text>
              </Text>
              <Text style={styles.perkgs}>per kgs</Text>
            </View>
            <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>
              <Text style={styles.vegName}>Potatoes</Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#3CB371', flexDirection: 'row' }}
            onPress={() => navigation.navigate('ThirdSceeen', setModalVisible(!modalVisible))}>
            <View >
              <Text style={{ fontSize: 20, color: 'white', marginVertical: 10, marginLeft: 10 }}>Update cart</Text>
            </View >
            <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <FontAwesome style={{ marginTop: 3, marginRight: 4 }} name="rupee" size={20} color="white" />
              <View>
                <Text style={{ fontSize: 22, color: 'white', marginRight: 10 }}>38</Text>
              </View>

            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{flexGrow:1,justifyContent:'flex-end',backgroundColor:'red'}}>
          
          <View style={{flexDirection:'row',alignItems:'flex-end',backgroundColor:'white', justifyContent:'flex-end',flexGrow:1,}}>
            <Image source={require('./assets/potatoes.png')} style={{ height: 60, width: 80, marginTop: 10 }} />
            <View style={{ flexDirection: 'column', marginLeft: 25, justifyContent:"flex-end",alignItems:'flex-end' }}>
              <Text>
                <FontAwesome name="rupee" size={22} color="black" />
                <Text style={{ fontSize: 24 }}>12</Text>
              </Text>
              <Text style={styles.perkgs}>per kgs</Text>
            </View>
            <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>
              <Text style={styles.vegName}>Potatoes</Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#3CB371', flexDirection: 'row' }} 
            onPress={() => navigation.navigate('ThirdSceeen',setModalVisible(!modalVisible)) }>
            <View >
              <Text style={{ fontSize: 20, color: 'white', marginVertical: 10, marginLeft: 10 }}>Update cart</Text>
            </View >
            <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <FontAwesome style={{ marginTop: 3, marginRight: 4 }} name="rupee" size={20} color="white" />
              <View>
                <Text style={{ fontSize: 22, color: 'white', marginRight: 10 }}>38</Text>
              </View>

            </View>
          </TouchableOpacity>
        
        </View> */}
      </Modal>



    </View>

  )
}
const styles = StyleSheet.create({
  vegImage: {
    height: 70,
    width: 70
  },
  prize: {
    fontSize: 20,
  },
  vegName: {
    fontSize: 18, color: '#292b2c', paddingRight: 20, paddingTop: 10
  },
  perkgs: {
    fontSize: 18, color: 'grey'
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  //   opacity:.2


  //   // marginTop: 22
  // },
  // modalView: {

  //   backgroundColor: "white",
  //   paddingLeft: 20,
  //   paddingTop: 30,
  //   height: 140,
  //   width: 360,
  //   flexDirection: 'row',
  //   // paddingLeft: 140,
  //   // paddingRight: 220,
  //   // alignItems: "",
  //   shadowColor: "#000",
  //   opacity:.9,
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,

  // },
})
export default SecondSceeen