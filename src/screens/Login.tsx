import { Dimensions } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';

const { width: ScreenWidth } = Dimensions.get("screen");

export default function Login() {
  // const disablePasswordInput = true;

  return (
    <View 
      style={{ 
        flex: 1,
        backgroundColor: '#FEFEFE'
      }}>
      <View 
        style={{ 
          height:'35%',
          backgroundColor:'transparent',
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Text>Logo</Text>
      </View>
      <View 
        style={{ 
          position:'absolute',
          bottom: 0,
          height:'65%',
          width:ScreenWidth,
          alignItems:'center',
          // justifyContent:'center'
        }}>         
          <TextInput 
            style={{
              marginTop: 20,
              height: 40,
              width:ScreenWidth*0.8,
              backgroundColor:'#EAF2FE',
              borderColor: '#EFF0F0',
              borderStyle: 'solid',
              borderWidth: 1/3,
              borderRadius: 7,
              fontSize:16,
              elevation: 5,
            }}
            placeholder='Username'
          />
          <TextInput 
            style={{ 
              marginTop: 15,
              height: 40,
              width: ScreenWidth*0.8,
              backgroundColor:'#EAF2FE',
              borderColor: '#EFF0F0',
              borderStyle: 'solid',
              borderWidth: 1/3,
              borderRadius: 7,
              fontSize:16,
              elevation: 5,
            }} 
            placeholder='Password'
          />
          <View 
            style={{
              flexDirection: 'row',
              marginTop: 32,
            }}>
            <TouchableOpacity 
              style={{
                height: 37,
                width: ScreenWidth * 0.35,
                backgroundColor: "#5096FE",
                borderRadius: 6,
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
              }}>
              <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 37,
                width: ScreenWidth * 0.35,
                backgroundColor: "#5096FE",
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                // marginTop: 16,
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.3,
                shadowColor: "#166080",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
              }}>
              <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Sign up</Text>
            </TouchableOpacity>  
          </View>        
          <View 
            style={{
              flexDirection: 'row',
              marginTop: 32,
            }}>
            <Text style={{marginRight:5}}>Logo1</Text>
            <Text style={{marginRight:5}}>Logo2</Text>
            <Text style={{marginRight:5}}>Logo3</Text>
            <Text>Logo4</Text>
          </View>
      </View>
    </View>
  );
}