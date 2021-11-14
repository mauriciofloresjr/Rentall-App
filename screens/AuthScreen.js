/*
MIT License
Copyright (c) 2021 agus
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Dimensions } from 'react-native';
import COLORS from '../consts/colors';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.2.3.90:5000';

//Checks an attempted user password against the regular expression.
//The regular expression calls for: At least one uppercase English letter,
//at least one lower case English letter, at least one digit,
//at least one special character, and at least 8 characters in length
function passwordValidator(password) {
    var re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    if (re.test(password)) {
        return true;
    } else {
        return false;
    }
}


function AuthScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    if (res.status === 200) {
                        setMessage(jsonRes.message);
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });
    }

    const onSubmitHandler = () => {
        //Before submiting to server, checks password with validator function
        if (passwordValidator(password)) {
            //a valid password was entered, generate JSON
            const payload = {
                email,
                name,
                password,
            };
            fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
                .then(async res => {
                    try {
                        const jsonRes = await res.json();
                        if (res.status !== 200) {
                            setIsError(true);
                            setMessage(jsonRes.message);
                        } else {
                            onLoggedIn(jsonRes.token);
                            setIsError(false);
                            setMessage(jsonRes.message);
                            navigation.navigate('Listings')
                        }
                    } catch (err) {
                        console.log(err);
                    };
                })
                .catch(err => {
                    console.log(err);
                });
        }
        //an invalid password was entered, return an Error message to user
        else {
            setIsError(true)
            setMessage("Invalid Password.")
        }
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        < ImageBackground source={require('../public/images/Rentall-App-Background.png')} style={styles.image} >
            <View style={styles.card}>
                <Image source={require('../public/images/Rentall-Logo.png')} style={{ width: 50, height: 60, marginLeft: 150, marginTop: 25 }} />
                <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>
                <View style={styles.form}>

                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                        {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>}
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={onSubmitHandler} >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
                            <Text style={styles.buttonAltText}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={styles.buttonText}>{isLogin ? '' : ' \n Passwords must have: \n- at least 8 characters \n- a letter \n- a number \n- a special character: \n i.e. !@#$%^&*  '}</Text>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 450, //380
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },
    input: {
        marginTop: 10,
        width: 300,
        height: 40,
        backgroundColor: COLORS.gray,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        fontSize: 16,
    },
    button: {
        width: '80%',
        backgroundColor: COLORS.darkGreen, //changed color for visual spice
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
});

export default AuthScreen;
