import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.0.112:5000';


const AddRentalScreen = ({ navigation }) => {

    //Set of hooks to save states when sending request to add listing to DB
    //message and error hooks to display error messages/success
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    var categories = ['COOKING', 'FURNITURE', 'TOYS', 'TECH'];
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    //Possibly change categories to be implemented with a dropdown menu
    //Function validates correct category, ignores case
    function CategoryValidator(categories, input) {
        var i = categories.length;

        while(i--) {
            if (categories[i] == input.toUpperCase()){
                return true
            }
        return false;
        }
    }

    //a function to check if the input for price is of the correct format,
    //which is a dollar sign is not allowed, and checks to see if commas are in correct spaces if used at all
    //regex provided by Fong C.D. of regexlib.com
    function priceValidator(input) {
        var re = new RegExp("^(([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?)|([0]\.(([0][1-9])|([1-9]\d)))$");
         if (re.test(input)) {
            return true;
        } else {
            return false;
        }
    }
    
    ///(CategoryValidator(categories, category) && 
    const onSubmitHandler = () => {
        //Before submiting to server, checks category and price with validator function
        //Bypassed for testing currently
        if (title) {
            //a valid category was entered, generate JSON
            const payload = {
                title: title,
                description: description,
                category: category,
                price: price,
            };
            fetch(`${API_URL}/addListings`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
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
                            setIsError(false);
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
        //an invalid category was entered, return an Error message to user
        else {
            setIsError(true)
            setMessage("Invalid category or price entered!")
        }
    };

    
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        < ImageBackground source={require('../public/images/basic-back.png')} style={styles.image} >
            <View style={styles.card}>
                <Text style={styles.heading}>{'Add Listing'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Title" autoCapitalize="none" onChangeText={setTitle}></TextInput>
                        <TextInput style={styles.input} placeholder="Description" onChangeText={setDescription}></TextInput>
                        <TextInput style={styles.input} placeholder="Category" onChangeText={setCategory}></TextInput>
                        <TextInput style={styles.input} placeholder="Price, $ not necessary" onChangeText={setPrice}></TextInput>
                        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={onSubmitHandler} >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={styles.buttonText}>{' \n Category must be only 1 of the following: \n "Cooking", \n "Toys", \n "Furniture", \n "Tech" '}</Text>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
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
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16,
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: '#21C489', //changed color for visual spice
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
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


export default AddRentalScreen;