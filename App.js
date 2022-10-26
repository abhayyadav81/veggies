import React, { useRef } from 'react';
import { StyleSheet, Text, View, Button, SearchBar, Animated, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SecondSceeen from './src/screens/SecondSceeen';
import ThirdScreen from './src/ThirdScreen';
import { ModalPortal } from 'react-native-modals';
import { useState } from 'react';
import SearchScreen from './src/screens/SearchScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SafeAreaView from 'react-native-safe-area-view';
import AnimatedHeader from './src/components/AnimatedHeader';
import TextScreen from './src/TextScreen';
import SigninScreen from './src/SigninScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';





function App() {

    const Stack = createNativeStackNavigator()




    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} >




                <NavigationContainer >


                    <Stack.Navigator initialRouteName='MainScreen'>
                        <Stack.Screen name="SecondSceeen" component={SecondSceeen}
                            options={{
                                title: 'Your Cart', headerStyle: {
                                    backgroundColor: 'white',


                                },
                            }}
                        />
                        <Stack.Screen name="ThirdSceeen" component={ThirdScreen}
                            options={{
                                title: ' Abhay yadav ', headerStyle: {
                                    backgroundColor: 'white',

                                },
                            }}
                        />
                        <Stack.Screen name="Searchscreen" component={SearchScreen}

                        />
                        <Stack.Screen name="TextScreen" component={TextScreen}

                        />
                       <Stack.Screen name="SigninScreen" component={SigninScreen} options={{
                       headerShown:false
                       }}/>
                        
                        <Stack.Screen

                            name="MainScreen"
                            component={MainScreen}
                            options={({ navigation }) => ({
                                title: 'Veggies', headerStyle: {
                                    backgroundColor: '#3CB371'
                                }, headerTintColor: '#fff',
                                headerShown: false,
                                // headerRight: () => {
                                //   return (
                                //     <View style={{ flexDirection: 'row' }}>
                                //       <View>
                                //         <EvilIcons style={{ marginRight: 20 }} name="search" size={28} color="white"
                                //           onPress={() => navigation.navigate('Searchscreen')}
                                //         />
                                //       </View>

                                //       <Ionicons name="person" size={24} color="white" onPress={() => navigation.navigate('TextScreen')} />
                                //     </View>
                                //   )
                                // }
                            })}


                        />

                    </Stack.Navigator>

                </NavigationContainer>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    veggies: {
        backgroundColor: 'green'
    }
});
export default App