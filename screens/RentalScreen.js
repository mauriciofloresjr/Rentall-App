import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { renderNode } from 'react-native-elements/dist/helpers';
import { Image } from 'react-native';
import COLORS from '../consts/colors';
import { Icon } from 'react-native-elements';
import rentals from '../consts/rentals';

// Declaring width of screen with 30 pixel padding
const width = Dimensions.get('screen').width / 2 - 30

const RentalScreen = ({ navigation }) => {
    // Adding to this array will update categories accordingly
    const categories = ['COOKING', 'FURNITURE', 'TOYS', 'TECH'];

    const [categoryIndex, setCategoryIndex] = useState(0)

    const CategoryList = () => {
        return (
            <View style={style.categoryContainer}>
                {/* Iterates through categories and maps them to items and indices. */}
                {/* This allows us to click on different categories and have them change color */}
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setCategoryIndex(index)}>
                        <Text style={[style.categoryText, categoryIndex == index && style.categoryTextSelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    // System for the Card objects
    const Card = ({ rental }) => {
        return (

            <View style={style.card}>
                <View style={{ height: 100, alignItems: 'center', marginTop: 10 }}>
                    {/* Image in card */}
                    <Image style={{ flex: 1, resizeMode: 'contain' }} source={rental.img} />
                </View>
                {/* Rental item name */}
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginBottom: 5, color: COLORS.black }}> {rental.name} </Text>
                {/* View for storing Price per Day and Rent button*/}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.darkGreen }}>${rental.price}/day</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Details", rental)} >
                        <View style={{ height: 35, width: 50, backgroundColor: COLORS.darkGreen, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: COLORS.white, fontWeight: 'bold' }}>Rent</Text>
                        </View>
                    </TouchableOpacity >
                </View>
            </View>


        )
    }

    return (
        // Entire screen is in this SafeAreaView
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
            {/* Header which includes logo and "Rentall" name */}
            <View style={style.header}>
                <View style={{ flexDirection: 'row', marginLeft: 90 }}>
                    {/* Adding Image and Text to header */}
                    <Image source={require('../public/images/Rentall-Logo.png')} style={{ width: 50, height: 60, marginRight: 20 }} />
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: COLORS.black, marginTop: 17 }}>Rentall</Text>
                </View>
            </View>
            {/* View container for Search Bar and Sort Button */}
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                {/* Search bar */}
                <View style={style.searchContainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 20 }} />
                    <TextInput placeholder="Search" style={style.input} />
                </View>
                {/* Sort button */}
                <TouchableOpacity onPress={() => navigation.navigate("Add")}>
                    <View style={style.sortBtn}>
                        <Icon name="add" size={30} color={COLORS.white} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* View for list of Categories, Categories are declared above */}
            <CategoryList />
            {/* This FlatList contains the displays for the individual items, this includes numColumns and data being pulled from rentals.js */}
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={rentals}
                renderItem={({ item }) => <Card rental={item} />}
            />
        </SafeAreaView >
    )

}

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.gray,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
        flex: 1,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 15,
        color: "grey",
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    card: {
        height: 225,
        backgroundColor: COLORS.gray,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
});



export default RentalScreen;