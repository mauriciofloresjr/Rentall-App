/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RentalScreen, AuthScreen, RentalDetailsScreen, PaymentScreen, AddRentalScreen } from './screens';
import COLORS from './consts/colors';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <Stack.Navigator>
                <Stack.Screen name="User Login" component={AuthScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Listings" component={RentalScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={RentalDetailsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Add" component={AddRentalScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



