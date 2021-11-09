import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import COLORS from '../consts/colors';
import { Icon } from 'react-native-elements';



const RentalDetailsScreen = ({ navigation, route }) => {
    // This brings in the rental data passed from previous screen
    const rental = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header for listing details */}
            <View style={style.header}>
                <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()} />
            </View>
            {/* View container for image */}
            <View style={style.imageContainer}>
                <Image source={rental.img} style={{ resizeMode: 'contain', flex: 1 }} />
            </View>
            {/* View container for all details section */}
            <View style={style.detailsContainer}>
                <View style={{ marginTop: 20, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.black }}>{rental.name}</Text>
                    <View style={style.priceTag}>
                        <Text style={{ marginLeft: 15, color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>${rental.price} / day</Text>
                    </View>
                </View>
                {/* View container for description section */}
                <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                    <View style={style.line} />
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold', color: COLORS.darkGreen }}>Description</Text>
                    <Text style={{ color: 'grey', fontSize: 18, lineHeight: 25, marginTop: 20 }}>{rental.desc}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                                <View style={style.buyBtn}>

                                    <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Rent</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.gray,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 100,
        height: 50,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center'
    },
    line: {
        width: 200,
        height: 3,
        backgroundColor: COLORS.black,
        marginBottom: 5,
        marginRight: 3,
    },
    buyBtn: {
        width: 150,
        height: 50,
        backgroundColor: COLORS.darkGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    }
});

export default RentalDetailsScreen