import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
    Platform,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { theme } from '../theme'

export default function SuccessRegister() {
    const navigation = useNavigation();
    const handlePress = () => {
        return navigation.navigate('Home')
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
        <Image source={require('../../assets/register.png')} style={{width:100, height:100}}/>        
        <Text style={[styles.text, {marginTop:30}]}>Hi!<Text style={{fontWeight:'bold'}}> Fnine99</Text></Text>
        <Text style={styles.text}>Welcome to Sapphire</Text>
        <TouchableOpacity style={styles.submit} onPress={handlePress}>
          <Text style={{ fontSize: 16, color:'#FFFFFF', fontWeight:'600'}}>Get started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:theme.background.secondary, flexDirection:'column', alignItems:'center', justifyContent:'center'},
    text: {fontSize:22, color:'#240F51'},
    submit: {width:'70%', height:60, borderRadius:30, marginVertical:30, marginHorizontal:20, backgroundColor:theme.background.primary, alignItems:'center', justifyContent:'center', elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 4},
})
