import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'



const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailValidate, setEmailValidate] = useState(true);

    const onChnageEmailValidate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            setEmail(text)
            setEmailValidate(false)
            return false;
        }
        else {
            setEmail(text)
            setEmailValidate(true)
            console.log("Email is Correct");
        }
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{marginTop:30}}>

                    <View>

                        <View style={styles.logo}>
                            <Image source={require('../src/Assets/Pattern.png')} style={styles.pattern} />
                            <View style={styles.logoImage}>
                                <Image source={require("../src/Assets/vee.png")} style={styles.logoImage1} />
                            </View>

                        </View>

                        <View style={styles.detail}>
                            <View style={styles.login}>
                                <Text style={styles.logintext}>Welcome Back!</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: 'black', fontSize: 13 }}>You have been missed</Text>
                                </View>
                            </View>

                        </View>
                    </View>


                    <View style={styles.alldetail}>

                        <View style={styles.emailbox}>
                            {/* <Text style={styles.emailtext}>Email</Text> */}
                            <TextInput style={styles.input} onChangeText={onChnageEmailValidate} placeholder="Email" />
                        </View>
                        <View style={{ marginLeft: 20, }}>
                            {!emailValidate ? <Text style={{ color: 'red' }}>please enter valid email</Text> : null}
                        </View>
                        <View style={styles.Password}>
                            {/* <Text style={styles.emailtext}>Password</Text> */}
                            <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
                        </View>


                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}> */}

                        <TouchableOpacity style={{
                            backgroundColor: '#3CB371', marginHorizontal: 20, justifyContent: 'center'
                            , alignItems: 'center', height: 40,
                            borderRadius: 10
                        }} onPress={() => navigation.navigate('MainScreen')} disabled={!emailValidate || email.length === 0 ? true : false}>

                            <Text style={{ color: 'white', fontSize: 20 }}>login</Text>
                        </TouchableOpacity>

                        {/* </View> */}
                        <View style={styles.forgot}>
                            <TouchableOpacity>
                                <Text style={styles.text1}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Image source={require('../src/Assets/Pattern.png')} style={{ width: "100%", height: 230, opacity: 0.1 }} />
                </View>
            </View >
        </ScrollView>

    )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#3CB371', 
    },
    logo: {
        height: 170,
        backgroundColor: '#3CB371',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logoImage: {
        height: 70, width: 70, backgroundColor: 'white', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
        alignItems: 'center', justifyContent: 'center',
        position: 'absolute', marginLeft: -10
    },
    logoImage1: {
        height: 60, width: 60, backgroundColor: 'white', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
        alignItems: 'center', justifyContent: 'center',
        position: 'absolute', marginLeft: -10
    },
    detail: {
        alignItems: 'center',
        borderTopLeftRadius: 80,
        backgroundColor: '#FBFCFC',
        marginLeft: 10,
        marginRight: 10


    },
    pattern: {
        height: 170, width: "100%", opacity: 0.1
    },
    login: {
        marginTop: 20
    },
    logintext: {
        fontSize: 25,
        color: '#3CB371',
        fontFamily: 'Inter-VariableFont_slnt,wght',
        fontWeight: '700'




    },
    alldetail: {
        flexGrow: 1,
        backgroundColor: '#FAFAFA',
        borderBottomRightRadius: 70,
        marginLeft: 10,
        marginRight: 10

    },
    emailbox: {
        marginTop: 30,
        backgroundColor: 'white',
        height: 47,
        padding: 10,
        marginHorizontal: 20,

        // shadowColor: 'black',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 3,
        // elevation: 7,
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    Password: {
        backgroundColor: 'white',
        height: 47,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        // shadowColor: 'black',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 3,
        // elevation: 7,
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    emailtext: {
        color: 'black',
        fontSize: 15,
    },
    input: {
        fontSize: 15,
        color: "#2E4053"
    },
    button: {
        flexGrow: 1,
        backgroundColor: '#58d648',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
        marginTop: 20

    },
    text: {
        color: 'white'
    },
    forgot: {
        // height: 100,
        alignItems: 'center',
        padding: 20,




        // backgroun/
    },
    text1: {
        color: 'black', borderBottomWidth: 1, fontFamily: 'Inter-VariableFont_slnt,wght'
    },
    button1: {
        justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1,
    },
    text2: {
        fontSize: 25, color: 'black', fontWeight: 'bold',
    }

})


{/* <Text h3>{headerText}</Text> */ }


{/* <Input
    label="Email :"
    value={email}
    onChangeText={onChnageEmailValidate}
    autoCapitalize="none"
    autoCorrect={false}
/>

{!emailValidate ? <Text style={styles.error}>emailerror</Text> : null}

<Input secureTextEntry
    label="Password :"
    value={password}
    onChangeText={setPassword}
    autoCapitalize="none"
    autoCorrect={false}
/>

<Button title={submitButtonText} disabled={!emailValidate || email.length === 0 ? true : false}
onPress={() => onSubmit({ email, password })} />

</> */}
