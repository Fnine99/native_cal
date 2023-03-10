import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
      import { StatusBar } from 'expo-status-bar';
import { useForm, useController, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import {
  Dimensions,
  Platform,
  Keyboard,
  View,
  // SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

import { theme } from 'theme';

// import Input from 'components/common/Imput';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Icon from 'components/common/Icon';

import useAuth from 'hooks/useAuth';
import BackButton from 'components/common/BackButton';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

type User = {
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

  const { resetPassword } = useAuth();
//   const { isLoggedIn, user } = useAuth();
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();
  const onSubmit = async (data:any) => {
    const {username} = data;
    try {
      await resetPassword(username)
      // .then(setForm({...form, userPassword: null}));
    } catch (err) {
      console.error(err);
    }
  }
  const handleBackPress = () => {
    return navigation.goBack()
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
            Forgot Password
          </Text>
        </View>
        <View style={{top:40}}>
          <Text style={{color:'#240F51', fontSize:24, fontWeight:'bold', marginBottom: 4}}>Enter your email and we’ll send you a link to reset your password.</Text>
        </View>
        <SafeAreaView style={{top:30, alignItems:'flex-end'}}>
          <View style={styles.input}>
            <Text style={styles.label}>Email</Text>
            <Input name={'username'} control={control} editable/>
          </View>
        </SafeAreaView>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'flex-end'}}>
        <TouchableOpacity style={styles.submit} onPress={handleSubmit(onSubmit)}>
          <Text style={{ fontSize: 16, color:'#FFFFFF', fontWeight:'600'}}>Continue</Text>
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
  submit: {width:'90%', height:60, borderRadius:30, marginVertical:30, backgroundColor:theme.background.primary, alignItems:'center', justifyContent:'center', elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 4},
})