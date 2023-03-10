import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  Platform,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView
} from 'react-native';

import { theme } from 'theme';

import Input from 'components/common/Imput';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Icon from 'components/common/Icon';

import useAuth from 'hooks/useAuth';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

type Slide = {
    key:number,
    title: string,
    text: string
}
interface ScrollViewProps { 
    slides: Slide[]
}

const slides = [
    {
        key:0, 
        title: 'You ought to know where your money goes',
        text: 'Get an overview of how you are performing and motivate yourself to achieve even more.' 
    },
    {  
        key:1, 
        title: 'Gain total control of your money',
        text: 'Track your transaction easily, with categories and financial report'
    },
    {
        key:2, 
        title: 'Plan ahead and manage your money better',
        text: 'Setup your budget for each category so you in control. Track categories you spend the most money on'
    }
]

export default function Onboard() {
  const navigation = useNavigation();  
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const HandleNext = () => {
    if (activeSlide === slides.length-1) return setActiveSlide(0)
    return setActiveSlide(activeSlide => activeSlide+1);
  };
  const handleLogin = () => {
    return navigation.navigate('Login')
  }
  const handleRegister = () => {
    return navigation.navigate('Register')
  }
  console.log(activeSlide)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light'/>
      {/* top container */}
      <View 
        style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={{padding:10, width:'85%', height:'75%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../../assets/logo_sapphire.png')} style={{resizeMode: 'contain', width: '100%', height: '100%'}}/>
        </View>
      </View>
      {/* bottom container */}
      <View style={{flex: 1, alignItems:'center'}}>
        <View style={styles.card}>
            <ScrollView contentContainerStyle={{flex:1}} horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false}>
            {slides.map((slide, index) => (
                <View style={styles.slideContainer} key={slide.key}>
                    <Text style={styles.title}>{slide.title}</Text>
                    <Text style={styles.text}>{slide.text}</Text>
                    <View style={styles.sliderDots}>
                    {slides.map((_, i) => (
                        <TouchableOpacity
                        key={i}
                        style={[
                            styles.sliderDot,
                            i === activeSlide ? styles.activeSliderDot : null,
                        ]}
                        onPress={() => setActiveSlide(i)}
                        />
                    ))}
                    </View>
                </View>
            ))}
            </ScrollView>
            <View style={{flexDirection:'row', justifyContent:'center', width:'100%'}}>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:theme.background.primary, flexDirection:'column'},
  loginButton: {
    width: 75,
    height: 30,
    backgroundColor: '#FFFFFF15',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:20,
    right:20
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity:0.85,
    fontWeight:'600'
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '88%',
    height: '95%',
    borderRadius: 48,
    paddingHorizontal: 25,
    paddingVertical: 35,
    elevation: Platform.OS === 'android' ? 36 : undefined,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.27,
    shadowRadius: 12
  },
  slideContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor: 'transparent',
    paddingVertical:10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#13085E'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color:'#13095E'
  },
  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#BBBBBB',
    marginHorizontal: 4,
  },
  activeSliderDot: {
    backgroundColor: '#2C14DD',
    height: 18,
  },
  button: {
    backgroundColor: theme.background.primary,
    borderRadius: 90,
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:52,
    elevation: Platform.OS === 'android' ? 36 : undefined,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    top:10

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight:'500'
  }
});