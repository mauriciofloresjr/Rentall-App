import { BUILDER_KEYS } from '@babel/types';
import React from 'react'
import { Image,View, Text, StyleSheet, TouchableOpacity, TextInput, Platform,SafeAreaView, ImageBackground,button, Alert} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../consts/colors';
import RentalScreen from './RentalScreen';
import { Icon } from 'react-native-elements';
import { BRAINTREE_PAYPAL_CHECKOUT_SOURCE } from '@paypal/react-paypal-js/dist/types/constants';
import { Header } from "native-base";
''

const PaymentScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState("First Name");
  const [number, onChangeNumber] = React.useState(null);
  const[last, onChangeLast] = React.useState("Last Name");
  const [lastName, onChangeLastName] = React.useState(null);
const [card, onChangeCard]= React.useState("Card Information");
const [cardnumber, onChangeCardNumber]= React.useState(null);
const [Exp, onChangeExp]= React.useState("Experation");
const [Expnumber, onChangeExpNumber]= React.useState(null);
const [CCV, onChangeCCV]= React.useState("CCV");
const [CCVnumber, onChangeCCVNumber]= React.useState(null);
const [Bill, onChangebill]= React.useState("Billling");
const [billing, onChangebillNumber]= React.useState(null);

  return (
    <SafeAreaView>
      
        <ImageBackground source = {require ('../public/images/gradient-back.jpeg')}style={{position: 'absolute',color: 'white',width:'100%', height: '200%'}} />
      
    
    
         < Image source={require('../public/images/backgroudpaypal.png')} style={{width: 400, height: 150, marginRight: 0,marginTop:20 }} /> 
       <TextInput style = {styles.input}onChangeCardNumber={onChangeCardNumber} value= {cardnumber} placeholder = "Card information" keyboardType = "numeric"
      />
     
      <View style={styles.stacks} >
      <TextInput style={styles.stacks}onChangeText={onChangeExpNumber}value={number}placeholder="EXP(DDYY) "keyboardType = "numeric" maxLength = {4}
      />
      <TextInput style={styles.stacks}onChangeText={onChangeCCV}value={number}placeholder="CCV"keyboardType = "numeric" maxLength = {3}
      />
      </View>
      <View style={styles.stacks} >
      <TextInput style={styles.input}onChangeText={onChangeNumber}value={number}placeholder="First Name"
      />
      <TextInput style={styles.input}onChangeText={onChangeNumber}value={number}placeholder="Last Name"
      />
      </View>
      <TextInput style = {styles.input}onChangeCardNumber={onChangebillNumber} value= {cardnumber} placeholder = "Billing Zip Code" keyboardType = "numeric" maxLength ={5}
      />
      <View 
         style = {styles.inputs}>
          
        <Button 
        
        style = {styles.inputs} title = "Confirm" onPress = { () =>  navigation.goBack(Alert.alert(" Success Rental Complete"))}
      />
      </View>
      <View 
      style = {styles.inputs}>
      <Button 
        title = "Exit"  onPress = { () =>  navigation.goBack()}
      />
      </View>
    </SafeAreaView>
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
        margin: 2,
        width: '100%',
        flex :1, 
        flexDirection:'row',
        justifyContent : 'space-around',
        paddingLeft : 0,
        backgroundColor : '#87E0FE', 
        borderRadius : 20,
        borderColor : 'black',
        paddingTop : 0,
        color : 'black',
        fontSize: 16,
        minHeight: 40,
    },
    inputs2: {
        width: '100%',
        flex :1, 
        flexDirection:'row',
        justifyContent : 'space-around',
        paddingLeft : 0,
        backgroundColor : '#87E0FE', 
        borderRightWidth: 1,
        borderRadius : 20,
        borderColor : 'black',
        paddingTop : 0,
        color : 'black',
        fontSize: 16,
        minHeight: 40,
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stacks:{
       
        width: '100%',
        flex :1, 
        flexDirection:'row',
        justifyContent : 'space-around', 
        borderRightWidth : 1,
        
        paddingLeft : 0,
        paddingTop: 0,
        fontSize: 16,
        minHeight: 40,

    },
    input: {
        width: '100%',
        flex :1, 
        flexDirection:'row',
        justifyContent : 'space-around',
        borderTopWidth : 1,
        borderLeftWidth: 1,
        borderRightWidth : 1, 
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingLeft : 0,
        paddingTop: 0,
        fontSize: 16,
        minHeight: 40,
    },
    button: {
        width: 10,
        height:50,
        backgroundColor: COLORS.darkGreen,
        paddingTop :2,
        paddingLeft: 1,
        margin : 120,
        justifyContent: 'left',
        alignItems: 'left',
        borderRadius: 30,
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
export default PaymentScreen;
