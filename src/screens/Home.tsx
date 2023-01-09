import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import useAuth from 'hooks/useAuth';

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
          backgroundColor:'#000001',
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Calendar /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

})