import React, { useState } from 'react';
import { ImageBackground, Dimensions, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.2.3.90:5000';

//List of Categories to use in Dropdown menu 
const CategoryList = [
    { label: 'Cooking', value: 'COOKING' },
    { label: 'Furniture', value: 'FURNITURE' },
    { label: 'Toys', value: 'TOYS' },
    { label: 'Tech', value: 'TECH' },
];


const AddRentalScreen = ({ navigation }) => {

    //Set of hooks to save states when sending request to add listing to DB
    //message and error hooks to display error messages/success
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    //renders in text the items in the list inside the dropdown field
    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

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

    const onSubmitHandler = () => {
        //Before submiting to server, checks price with validator function
        if (priceValidator(price)) {
            //a valid price was entered, generate JSON
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
            setMessage("Invalid price entered!")
        }
    };

    //A simple message handler function that checks if a message is an error or not, and displays it
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    //Current issue/bug: Placeholder text in Dropdown menu wont display, thus wont show what option was picked
    //after exiting the dropdown, but still functions properly
    //Current issue: Icon is Box with X inside for my machine - RB
    return (
        < ImageBackground source={require('../public/images/Rentall-App-Background.png')} style={styles.image} >
            <View style={styles.card}>
                <Text style={styles.heading}>{'Create New Listing'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} maxLength={100} placeholder="Title" autoCapitalize="none" onChangeText={setTitle}></TextInput>
                        <TextInput style={styles.input} maxLength={100} placeholder="Description, 100 char max" onChangeText={setDescription}></TextInput>
                        <Dropdown
                            style={styles.dropdown}
                            selectedTextStyle={styles.input}
                            data={CategoryList}
                            search
                            labelField="label"
                            valueField="value"
                            placeholder="Select category"
                            searchPlaceholder="Search..."
                            value={category}
                            onChange={item => {
                                setCategory(item.value);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign style={styles.icon} color="black" name="appstore-o" size={20} />
                            )}
                            renderItem={item => _renderItem(item)}
                        />
                        <TextInput style={styles.input} placeholder="Price, $ not necessary" onChangeText={setPrice}></TextInput>
                        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={onSubmitHandler} >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
    dropdown: {
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 15,
    },
    icon: {
        marginRight: 5,
        width: 225,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
});


export default AddRentalScreen;