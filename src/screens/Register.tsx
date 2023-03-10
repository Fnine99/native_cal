import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, useController, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  Platform,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';
import Checkbox from 'expo-checkbox';

import { theme } from 'theme';

// import Input from 'components/common/Imput';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Icon from 'components/common/Icon';

import useAuth from 'hooks/useAuth';
import BackButton from 'components/common/BackButton';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

type data = {
  username: string,
  password: string
}

const Input = ({name, control, ...Props}:any) => {
  const { field } = useController({
    control,
    defaultValue:'',
    name
  })
  return (
    <TextInput 
      style={styles.textinput}
      onChangeText={field.onChange}
      value={field.value}
      {...Props} 
    />
  )
}

export default function Login() {

  const { firebaseRegister } = useAuth();
  // const { isLoggedIn, user } = useAuth();
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  const onSubmit = async (data:any) => {
    const {name, username, password} = data;
    try {
      await firebaseRegister( username, password)
      // .then(setForm({...form, userPassword: null}));
    } catch (err) {
      console.error(err);
    }
  }
  const [checkbox, setcheckbox] = useState(false);
  const handleCheckbox = () => {
    return setcheckbox(!checkbox);
  }

  const handleBackPress = () => {
    return navigation.goBack();
  }

  const handleLogin = () => {
    return navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={{flex:1, paddingHorizontal:20}}>
          <View style={{flexDirection:'row', paddingVertical:15, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={styles.backbutton} onPress={handleBackPress}>
              <Icon type={'material'} name='chevron-left' size={25} color='#131313'/>
            </TouchableOpacity>
            <Text style={{color:'#131313', fontSize:18, fontWeight:'400'}}>
              Register
            </Text>
          </View>
          <View style={{top:40}}>
            <Text style={{color:'#240F51', fontSize:24, fontWeight:'bold', marginBottom: 4}}>Welcome to Sapphire</Text>
            <Text style={{color:'#292B2D', fontSize:14, fontWeight:'300'}}>Complete the sign up to get started</Text>
          </View>
          <SafeAreaView style={{top:30}}>
            <View style={styles.input}>
              <Text style={styles.label}>Name</Text>
              <Input name={'name'} control={control} editable/>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Username</Text>
              <Input name={'username'} control={control} editable/>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Password</Text>
              <Input name={'password'} control={control} editable secureTextEntry={true}/>
            </View>
            <View style={{ flexDirection: 'row', padding:10, alignItems:'flex-start'}}>
              <Checkbox style={{width:15, height:15, marginRight:8, top:2}} value={checkbox} color={theme.background.primary} onValueChange={handleCheckbox}/>
              <Text style={{ fontSize: 15, textAlign:'auto', fontWeight:'400'}} numberOfLines={2}>By signing up, you agree to the <Text style={{color:theme.background.primary}}>Terms of 
              Service and Privacy Policy.</Text></Text>
            </View>
          </SafeAreaView>
        </View>
        <View style={{alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
          <TouchableOpacity style={styles.login} onPress={handleLogin}>
            <Text style={{ fontSize: 16, color:theme.background.primary, fontWeight:'600'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={handleSubmit(onSubmit)}>
            <Text style={{ fontSize: 16, color:'#FFFFFF', fontWeight:'600'}}>Register</Text>
          </TouchableOpacity>
        </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:theme.background.secondary, flexDirection:'column'},
  backbutton:{position:'absolute', left:0, height:30, width:30, backgroundColor:'#FFFFFF', alignItems:'center', justifyContent:'center', borderRadius:25},
  input: {width:'100%', height:60, marginBottom:15, borderRadius:40, backgroundColor:'#FFFFFF', paddingHorizontal:20, paddingVertical:10},
  textinput: {flex:1, fontSize:14, fontWeight:'400', color:'#131313'},
  label: {color:'#7B8186', fontSize: 10},
  submit: {width:'40%', height:60, borderRadius:30, marginVertical:30, marginHorizontal:20, backgroundColor:theme.background.primary, alignItems:'center', justifyContent:'center', elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 4},
  login: {backgroundColor:'#2C14DD10', width:'20%', height:30, borderRadius:30, marginVertical:30, marginHorizontal:20, alignItems:'center', justifyContent:'center', elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 4}
})