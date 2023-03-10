import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';  
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import useAuth from 'hooks/useAuth';
import { theme } from 'theme';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/> 
      {/* next step */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:theme.background.primary, flexDirection:'column'},


})