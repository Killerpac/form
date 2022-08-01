import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import Buttons from './components/buttons';
import Drop from './components/dropdown';
import Textbar from './components/textbar';
import TextBarHalf from './components/textbarhalf';

export default function App() {

  const [name, setName] = React.useState('');
  const [num, setNum] = React.useState('');
  const [address, setAddress] = React.useState('')
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState('')
  const [error1, setError1] = React.useState(false)
  const [error2, setError2] = React.useState(false)
  const [error3, setError3] = React.useState(false)
  const [error4, setError4] = React.useState(false)
  const [error5, setError5] = React.useState(false)
  const [error6, setError6] = React.useState(false)
  const [gender, setGender] = React.useState('')

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Details</Text>
      {/* {Name Address Phone TextInputs} */}
      <Textbar label='Name' onChangeText={(name:string) => {setName(name); setError1(false)}} multiline={false} error={error1} errormsg='Name is required and Should be less than 3 characters' value={name}/>
      <Textbar label='Phone Number' onChangeText={(number:string) =>{ setNum(number) ; setError2(false)}} multiline={false} keyboardType='numeric' textContentType='telephoneNumber' error={error2} errormsg='Phone Number is required and Should be 10 digits' value={num}/>
      <Textbar label='Address' onChangeText={(address:string) => { setAddress(address) ; setError3(false)}} multiline={false} error={error3} errormsg='Address is required and Should be Minimum 10 characters' value={address}/>
      <View style={styles.addresscontainer}> 
      {/* city state textinput */}
      <TextBarHalf label='City' onChangeText={(city:string) => { setCity(city) ; setError4(false)}} error={error4} errormsg='City is required' value={city}/>
      <TextBarHalf label='State' onChangeText={(state:string) => { setState(state) ; setError5(false)}} error={error5} errormsg='State is required' value={state}/>
      </View>
      {/* buttons and dropdown for gender */}
      <Drop onChangeText={(gen:string)=>{setGender(gen) ; setError6(false)}} value={gender} error={error6} errormsg="Gender Is Not Set" />
      <Buttons name={name} number={num} address={address} error={(err:number) => {
        if(err==1){
          setError1(true);
        }
        if(err == 2){
          setError2(true);
        }
        if(err == 3){
          setError3(true);
        }
        if(err == 4){
          setError4(true);
        }
        if(err == 5){
          setError5(true);
        }
        if(err == 6){
          setError6(true);
        }
      }}
      clear = {()=>{
        setName('');
        setNum('');
        setAddress('');
        setCity('');
        setState('');
        setError1(false);
        setError2(false);
        setError3(false);
        setError4(false);
        setError5(false);
        setError6(false);
        setGender('');
      }}
      city={city} state={state} gender={gender} submit={(vis:boolean)=>setVisible(vis)}
      />
        <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}>
        Form Submitted
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
      fontSize:34,
      fontWeight:'bold',
      alignSelf:"flex-start",
      marginStart:15,
      marginBottom:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  addresscontainer:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
  }
});
