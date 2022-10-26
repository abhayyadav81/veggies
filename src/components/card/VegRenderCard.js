import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const reducer = (state, action) => {
    
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
            
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        //  case "UPDATE" :
        //         return [...state.filter(i => i.id !== action.product.id), action.product]    
        default:
            return state;
    }
    
};


const VegRenderCard = ({ item, setPrice, detail, setDetail,setTotalPrice }) => {
    const[quantity,setQuantity]=useState(0)
    const [state, dispatch] = useReducer(reducer, { count: 0});
    // console.log('stategshd',state)
   
   

    useEffect(()=>{
        var oldQuantity =   detail?.reduce((acc,element) => {
           return element.totalPrice+acc
       },0);
       console.log('oldQuantity',oldQuantity)
       setTotalPrice(oldQuantity)
       console.log('settotal price ',setTotalPrice)
    },[quantity])
    
    
    const increment = (quant) => {
        // console.log('quant',quant)
        var foundIndex = detail.findIndex(x => x.id == item.id);
        // console.log(foundIndex,'jasbdjasbd')

        if(foundIndex>=0){
            // console.log(item.price,"40item.price")
            // console.log(quant,"41quant")

            detail[foundIndex].totalPrice = item?.price*quantity;
            detail[foundIndex].quantity = quant;
            // console.log(quant,"qustnt")
            

        }else{
            // console.log(item.price,"47item.price")
            // console.log(quant,"48quant")
            setDetail((oldData)=>[...oldData,item])
        }
        
        


    }
  
    const decrement = (quant) => {
        var foundIndex = detail.findIndex(x => x.id == item.id);

        if(foundIndex>=0){
            console.log(item.price,"item.price")
            console.log(quantity,"quantity")

            detail[foundIndex].totalPrice = item.price*quantity;
            detail[foundIndex].quantity = quant;

        }else{
            setDetail((oldData)=>[...oldData,item])
        }
        
        


    }
    




    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, flex: 1, }}>

            <View>
                <Image resizeMode='contain' style={styles.vegImage} source={item?.image} />
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text>
                    <FontAwesome name="rupee" size={18} color="black" />
                    <Text style={styles.prize}>{item?.price}</Text>
                </Text>
                <Text style={styles.perkgs}>per {item?.unit}</Text>
            </View>

            <View style={{ alignItems: 'flex-end', flexGrow: 1 }} >
                <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.vegName}>{item?.text}</Text>

                </View >

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onClick
                        style={{ marginRight: 15, marginTop: 5 }}
                        


                    >
                        <AntDesign name="minuscircleo" size={18} color="black" onPress={() => {
                            if (quantity!==0 && quantity>=0){
                                setQuantity(quantity-1)
                                decrement() 
                            }
                            // dispatch({ type: 'decrement', payload: 1 });
                            
                            
                        }}/>
                    </TouchableOpacity>


                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            {quantity}
                        </Text>

                    
                    </View>
                    <TouchableOpacity
                        style={{ marginLeft: 15, marginTop: 5 }}
                        onPress={() => {
                            // dispatch({ type: 'increment', payload: 1 });
                                setQuantity(quantity+1)


        
                            increment(quantity)

                            
                            // setPrice(item?.price)
                        }}

                    >
                        <AntDesign name="pluscircleo" size={18} color="black" />
                    </TouchableOpacity>


                </View>
                {/* <Button title='addtocart' onClick={()=>addTocart(item)} > Add to cart</Button> */}




            </View>
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
    }
})

export default VegRenderCard