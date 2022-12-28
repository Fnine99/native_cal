import {
    View,
    Text
} from 'react-native';

import Calendar from 'components/Calendar';
import Agenda from 'components/Agenda';

interface calendarProps {}
interface agendaProps {}

export default function Home() {
  return (
    <View 
      style={{ 
        flex: 1,
        backgroundColor: 'lightpink'
      }}>
      <View 
        style={{ 
          height:'100%',
          backgroundColor:'lightgreen',
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Calendar /> 
      </View>
      {/* <View 
        style={{ 
          position:'absolute',
          bottom: 0,
          height:'40%',
          width:'100%',
          backgroundColor: 'lightblue',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          alignItems:'center',
          justifyContent:'center'
        }}> 
            <View 
             style={{
              flexDirection: 'row' 
             }}>
             <Agenda />
            </View>
      </View> */}
    </View>
  );
}