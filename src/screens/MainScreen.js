import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity, FlatList, Animated, LayoutAnimation } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import VegRenderCard from '../components/card/VegRenderCard';
import App from '../../App';


import SafeAreaView from 'react-native-safe-area-view';
import Header from '../components/Header';
import Product from '../components/Product';
import NavButton from '../NavButton';






const MainScreen = ({ navigation }) => {

    const iconstyle = .5


    const [price, setPrice] = useState("")
    const[totalPrice,setTotalPrice]=useState(0)
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 60)
    const translateY = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60],
        extrapolate: 'clamp'
    })
    const opacity = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [0, -60],

    })
    const fadeOut = scrollY.interpolate({
        inputRange: [0, 120],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
    const scale = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });
 const [detail,setDetail]=useState([])
  

    const [products, setProducts] = useState([
        {
            id: 1,
            image: require('./assets/potatoes.png'),
            price: 12,
            unit: 'kgs',
            text: 'Potatoes',
            totalPrice:0,
            quantatiy:0

        },
        {
            id: 2,
            image: require('./assets/onion.png'),
            price: 15,
            unit: 'kgs',
            text: 'Onions',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 3,
            image: require('./assets/pepper_PNG3264.png'),
            price: 20,
            unit: 'kgs',
            text: 'Capsicum',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 4,
            image: require('./assets/tomatoes.png'),
            price: 14,
            unit: 'kgs',
            text: 'Tomatoes',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 5,
            image: require('./assets/tomatoes.png'),
            price: 14,
            unit: 'kgs',
            text: 'Tomatoes',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 6,
            image: require('./assets/potatoes.png'),
            price: 14,
            unit: 'kgs',
            text: 'Potatoes',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 7,
            image: require('./assets/tomatoes.png'),
            price: 14,
            unit: 'kgs',
            text: 'Tomatoes',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 8,
            image: require('./assets/potatoes.png'),
            price: 14,
            unit: 'kgs',
            text: 'Potatoes',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 9,
            image: require('./assets/pepper_PNG3264.png'),
            price: 20,
            unit: 'kgs',
            text: 'Capsicum',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 10,
            image: require('./assets/pepper_PNG3264.png'),
            price: 20,
            unit: 'kgs',
            text: 'Capsicum',
            totalPrice:0,
            quantatiy:0
        },
        {
            id: 11,
            image: require('./assets/pepper_PNG3264.png'),
            price: 20,
            unit: 'kgs',
            text: 'Capsicum',
            totalPrice:0,
            quantatiy:0
        },
    ])

    const vegRender = ({ item }) => {
        return <VegRenderCard item={item} setPrice={setPrice} detail={detail} setDetail={setDetail} setTotalPrice={setTotalPrice}/>
    }

    return (
        <View style={{flex:1}}>
            <ScrollView style={{ flexGrow: 1, marginTop: 33, backgroundColor: '#F5F5F5' }} stickyHeaderIndices={[3]} onScroll={(e) => {
                scrollY.setValue(e.nativeEvent.contentOffset.y)
            }} >
                <View style={{ flex: 1, }}>
                    <Animated.View style={{
                        
                    }}>
                        <Header navigation={navigation}   />
                    </Animated.View>

                </View>

                <View style={{ flex: 1, width: '100%', }}></View>

                <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>chakferi,bilaspur,rampur </Text>
                        <AntDesign name="down" size={20} color="grey"
                            onPress={() => navigation.navigate('ThirdSceeen')} />
                    </View>

                    <Text style={{ fontSize: 16, color: 'grey' }}>Categories</Text>
                </View >


                <View style={{ flex: 1, backgroundColor: '#F5F5F5', flexDirection: 'row', paddingVertical: 5 }}>
                    <StatusBar backgroundColor='white' />
                    <View style={{
                        flexGrow: 1, flexDirection: 'row',

                    }}>
                        <Product />
                        <NavButton iconstyle={fadeOut} scale={scale} navigation={navigation} />


                    </View>
                </View>


                <View>
                    <Text style={{ fontSize: 18, color: 'grey', backgroundColor: '#F5F5F5', paddingLeft: 15, paddingRight: 15, marginTop: 14 }}>Vegetable Products</Text>
                </View>
                <View style={{ flexGrow: 1, marginBottom: 50, backgroundColor: '#F5F5F5', paddingLeft: 15, paddingRight: 15, }} >
                    <FlatList


                        data={products}
                        renderItem={vegRender}
                        keyExtractor={item => item.id}

                    />

                </View>



               

            </ScrollView>
            <TouchableOpacity style={{ backgroundColor: '#3CB371', flexDirection: 'row' }}
                    onPress={() => navigation.navigate('SecondSceeen')}>
                    <View>
                        <Text style={{ fontSize: 20, color: 'white', marginVertical: 10, marginLeft: 10 }}>Proceed to checkout</Text>
                    </View >
                    <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <FontAwesome style={{ marginTop: 3, marginRight: 4 }} name="rupee" size={20} color="white" />
                        <View>
                            <Text style={{ fontSize: 22, color: 'white', marginRight: 10 }}>{totalPrice}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
        </View>


    )
}


const styles = StyleSheet.create({
    secondscreen: {
        height: 400,
        backgroundColor: 'green',
    },
    vegImage: {
        height: 60,
        width: 60
    },
    prize: {
        fontSize: 20,
    },
    vegName: {
        fontSize: 18, color: '#292b2c',
    },
    perkgs: {
        fontSize: 15, color: 'grey'
    },
    // STICKY_SCROLL_DISTANCE:20,
    // INIT_STICKY_HEADER:20,
    // HEADER_MIN_HEIGHT:20


})
export default MainScreen