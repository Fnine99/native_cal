import { useEffect, useState, useRef, useCallback } from 'react';
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
} from 'react-native';

import { theme } from 'theme';

import Input from 'components/common/Imput';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Icon from 'components/common/Icon';

import useAuth from 'hooks/useAuth';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

interface AuthForm {
  credentials: {
    userName: string,
    userPassword: string
  } 
}

export default function Login() {

  const { firebaseFacebookSignIn, firebaseGoogleSignIn, firebaseRegister, firebaseEmailPasswordSignIn } = useAuth();
  const { isLoggedIn, user } = useAuth();


  const [form, setForm] = useState({});
  
  // theres a common react bug when toggling this value. either fix it to secure entry or look it up, theres is 1 or 2 fixes
  const [secureEntry, setSecureEntry] = useState(true);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const HandleLogin = async () => {
    try {
      await firebaseEmailPasswordSignIn(form.userName, form.userPassword)
      .then(setForm({...form, userPassword: null}));
    } catch (err) {
      console.error(err);
    }
  };

  const HandleSignup = async () => {
    try {
      await firebaseRegister(form.userName, form.userPassword)
      .then(setForm({...form, userPassword: null}));
    } catch (err) {
      console.error(err);
    }
  };

  const HandleGoogleLoggin = async () => {
    try {
      await firebaseGoogleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const HandleFacebookLoggin = async () => { 
    try {
      await firebaseFacebookSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* top container */}
      <View 
        style={styles.topContainer}>
        <Image source={require('../../assets/Earth.jpg')} style={{width:'100%', height:'100%'}}/>
      </View>
      {/* bottom container */}
      <View style={styles.bottomContainer}>
        {/* imputs and login button container */}
        <KeyboardAvoidingView style={[styles.container, {marginTop:30}]} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Input
            // label='Username'
            iconPosition="right"
            placeholder="Enter Email"
            value={form.userName || null}
            onChangeText={(value) => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            // label='Password'
            icon={
              <TouchableOpacity
                hitSlop={{top:3, bottom:3}}
                onPress={() => {
                  setSecureEntry((secure) => !secure);
                }}>
                {secureEntry ? <Icon type="ionicon" name="eye-outline" style={styles.icon} size="20px"/>  : <Icon type="ionicon" name="eye-off-outline" style={styles.icon} size="20px"/>}
              </TouchableOpacity>
            }
            iconPosition="right"
            placeholder="Enter Password"
            value={form.userPassword || null}
            onChangeText={(value) => {
              onChange({name: 'userPassword', value});
            }}
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity 
            style={[styles.button, {marginTop: 20}]}
            onPress={HandleLogin}
            >
            <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Login</Text>
          </TouchableOpacity>
          {/* divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider}/>
            <Text style={styles.text}>Or</Text>
            <View style={styles.divider}/>
          </View>
          {/* social connection container */}
          <View style={styles.container}>
            <TouchableOpacity onPress={HandleGoogleLoggin}>
              <View style={styles.socials}>
                <Icon style={styles.icon} type='fa' name='google' size='20px'/>
                <Text style={styles.text}>Login with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={HandleFacebookLoggin}>
              <View style={styles.socials}>
                <Icon style={styles.icon} type='fa' name='facebook-official' size='20px'/>
                <Text style={styles.text}>Login with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* register msg */}
          <View style={{flexDirection:'row', justifyContent:'center', marginTop: 10}}>
            <Text style={styles.text}>Do not have an accout yet?</Text>
            <TouchableOpacity onPress={HandleSignup}><Text style={styles.text} > Register</Text></TouchableOpacity>
          </View>
        </KeyboardAvoidingView>  
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:theme.backgroundColor},
  topContainer : {alignItems:'center', justifyContent:'center', width: ScreenWidth, height:ScreenHeight*0.3},
  bottomContainer : {alignItems:'center', width: ScreenWidth, height:ScreenHeight*0.6, position:'absolute', bottom:0},
  icon: {color:'white'},
  divider : {
    borderBottomColor: 'white', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    width:ScreenWidth*0.25
  },
  dividerContainer: {
    flexDirection:'row', 
    justifyContent:'space-evenly',
    alignItems:'center', 
    marginVertical: 20,
    width: ScreenWidth * 0.8
  },
  button: {
    height: 37,
    width: ScreenWidth * 0.80,
    backgroundColor: theme.secondary,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: 10,
    elevation: 5,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#166080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  socials: {
    width: ScreenWidth*0.8,
    borderRadius: 4,
    borderColor: 'white',
    borderWidth: 1/2,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center',   
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom: 10
  },
  buttonText: { },
  text: {
    color: theme.text.primary, 
    fontWeight:'bold', 
    fontSize:14, 
    fontStyle: 'normal', 
    fontFamily:'Helvetica'
  }
});