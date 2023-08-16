import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';  
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Platform
    
} from 'react-native';
import Icon from 'components/common/Icon';
import useAuth from 'hooks/useAuth';
import { theme } from 'theme';

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState('');

  // const handleScroll = (event) => {
  //   const currentOffset = event.nativeEvent.contentOffset.y;
  //   const direction = currentOffset > 0 ? (currentOffset > previousOffset ? 'down' : 'up') : '';
  //   setScrollDirection(direction);
  //   setPreviousOffset(currentOffset);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.nav}>
        <View style={{flexDirection:'column', flex:1}}>
          <Text style={styles.navtitle}>
            Hello<Text style={{fontWeight:'bold'}}> Fnine99</Text>
          </Text>
          <Text style={styles.navsubtitle}>
            Send your suggestions with a search
          </Text>
        </View>
        <TouchableOpacity style={styles.search}>
          <Icon type={'material'} name='search' color='#FFFFFF' size={20}/> 
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.maincard}></View>
        <View style={styles.historycard}></View>
        <View style={{marginTop:40}}>
          <Text style={[styles.navsubtitle,{fontSize:15, left:10}]}>My share</Text>
          <View style={styles.sharecard}></View>
        </View>
        <View style={{marginTop:40}}>
          <Text style={[styles.navsubtitle,{fontSize:15, left:10}]}>Recent deposits</Text>
          <View style={styles.depositcard}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, paddingHorizontal: 20, backgroundColor:theme.background.primary, flexDirection:'column'},
  nav: {width: '100%', justifyContent:'space-between', alignItems:'center', flexDirection:'row', marginVertical:15},
  navtitle: {textAlign:'left', fontSize: 16, color:'#FFFFFF', marginBottom:5},
  navsubtitle: {textAlign: 'left', fontSize:12, color:'#FFFFFF', opacity:0.9, fontWeight:'300'},
  search: {backgroundColor:'#2812C9', borderRadius:25, width:35, height:35, justifyContent:'center', alignItems:'center'},
  scrollview: {flex:1},
  maincard: {width: '100%', height: 250, backgroundColor:'#2812C9', marginTop:30, borderRadius:24, elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 3},
  historycard: {width: '100%', height: 100, backgroundColor:'#2812C9', marginTop:30, borderRadius:24, elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 3},
  sharecard: {width: '100%', height: 180, backgroundColor:'#432DEC', marginTop:15, borderRadius:24, elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 3},
  depositcard: {width: '100%', height: 200, backgroundColor:'#432DEC', marginTop:15, borderRadius:24, elevation: Platform.OS === 'android' ? 36 : undefined, shadowColor: '#000000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 3},


})