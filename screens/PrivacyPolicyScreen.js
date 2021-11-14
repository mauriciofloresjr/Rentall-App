import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import COLORS from '../consts/colors';
import { Image } from 'react-native';

const width = Dimensions.get('screen').width / 2 - 30

const PrivacyPolicyScreen = ({ navigation }) => {

    return (
        // Entire screen is in this SafeAreaView
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
            <ScrollView>
                {/* Header which includes logo and "Rentall" name */}
                <View style={style.header}>
                    <View style={{ flexDirection: 'row', marginLeft: 90 }}>
                        {/* Adding Image and Text to header */}
                        <Image source={require('../public/images/Rentall-Logo.png')} style={{ width: 50, height: 60, marginRight: 20 }} />
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: COLORS.black, marginTop: 17 }}>Rentall</Text>
                    </View>
                </View>
                {/* Subheader for Privacy Policy Title */}
                <View style={style.header}>
                    <Text style={{ fontSize: 31, fontWeight: 'bold', color: COLORS.black, marginTop: 17, }}>Privacy & Security Policy</Text>
                </View>
                {/* Text for below Title*/}
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 5, }}>
                    {"Your privacy and security are important to us! Please read about how we use and collect your data, and what we do to keep you and your data safe.\n "}
                </Text>
                {/* Subheader for Data Collection and Usage */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>Data Collection & Usage</Text>
                </View>
                {/* Text for Privacy Policy */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>
                        {"Our application uses the following personal information from you for our service: \n \n"}
                        {"Your name, email address, and location data \n \n"}
                        {"This information is only collected to operate our service, and will NOT be sold/shared with any third-party. However, we reserve the right to use your data for our own analytical and technical use to improve the service. \n \n"}
                    </Text>
                </View>
                {/* Subheader for Security */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>Security</Text>
                </View>
                {/* Text for Security */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>
                        {"All payment implementation is handled via PayPal® to keep your payment information secure. \n\n"}
                        {"All other critical information such as your password, is encrypted, transmitted in a secure manner and stored securely in our systems. \n\n"}
                        {"When using our service to list or purchase rentals, we recommend the following procedures to keep yourself and your belongings safe: \n \n"}
                        {"• For any exchange of an agreed item, only agree to meet in a public area where you feel safe. \n"}
                        {"• Refrain from agreeing to any listing that insists on just a cash deal, or one that wants you to circumvent our application.\n"}
                        {"• Before leaving to meet someone, inform a friend or family member of where you will be, when you expect to return, etc.\n"}
                        {"• Finally, if possible, bring someone along to accompany you.\n\n"}
                    </Text>
                </View>
                {/* Text for final remarks and last updated */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>
                        {"By using our application you agree to these terms. Also, we reserve the right to update, change, and modify these terms, the details of which will be reflected above. \n\n"}
                    </Text>
                </View>
                <View style={style.subheader}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>
                        {"Last updated: November 11, 2021\n\n"}
                    </Text>
                </View>
                {/* Buttons for declining/accepting policy */}
            </ScrollView>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                {/* No Button requires platform specific implementation so left to do nothing */}
                <TouchableOpacity onPress={null}>
                    <View style={style.NoBtn}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.black, marginTop: 1, }}>
                            {"Disagree"}
                        </Text>
                    </View>
                </TouchableOpacity>
                {/*I agree button*/}
                <TouchableOpacity onPress={() => navigation.navigate('User Login')} >
                    <View style={style.YesBtn}>
                        <Text style={{ fontSize: 15, color: COLORS.white, fontWeight: 'bold' }}>I Accept</Text>
                    </View>
                </TouchableOpacity >
            </View>
        </SafeAreaView >
    )

};



const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subheader: {
        marginTop: 5,
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
    YesBtn: {
        marginLeft: 40,
        marginBottom: 25,
        height: 50,
        width: 150,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    NoBtn: {
        marginLeft: 10,
        height: 50,
        width: 150,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
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

export default PrivacyPolicyScreen;
