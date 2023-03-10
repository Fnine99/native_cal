import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { theme } from 'theme';
import BarGraph from 'components/Charts/Bar';
import LineGraph from 'components/Charts/Line';

const timeframes = ['Week', 'Month', 'Year', 'YTD'];
const tabs = ['Summary', 'Work', 'Studies', 'Sport'];
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [40, 45, 44, 42, 46, 43, 44]
    }
  ]
};

const Analytics = () => {

  const [timeframe, setTimeframe] = useState('Week');
  const [activeTab, setActiveTab] = useState('Summary');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
      <View style={styles.header}>
        <Text style={styles.title}>{activeTab}</Text>
        <View style={styles.timeframeContainer}>
          {
            timeframes.map((period, index)=>(
              <TouchableOpacity style={[styles.timeframeButton]} key={index} onPress={()=>setTimeframe(period)}>
                <Text style={[styles.timeframeText, {color: timeframe===period ? theme.secondary: theme.text.primary}]}>{period}</Text>
              </TouchableOpacity>
            ))
          }
        </View>        
      </View>
      <View style={styles.tabContainer}>
        {
          tabs.map((tab, index)=>(
            <TouchableOpacity 
              style={[
                styles.tabButton, {
                  backgroundColor:activeTab===tab ? theme.primary: 'rgba(23,23,24,0.6)',
                  borderTopLeftRadius: _.first(tabs)===tab && 10,
                  borderBottomLeftRadius: _.first(tabs)===tab && 10,
                  borderTopRightRadius: _.last(tabs)===tab && 10,
                  borderBottomRightRadius: _.last(tabs)===tab && 10
                }
              ]} 
              key={index} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, {color: activeTab===tab ? theme.secondary: theme.text.primary}]}>{tab}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={{color:'#fff'}}>This is a scrolling window</Text>
        {activeTab === 'Summary' && (
          <>
            <BarGraph data={data}/>          
          </>
        )}
        {activeTab === 'Work' && (
          <>
            <LineGraph data={data}/>
          </>          
        )}
        {activeTab === 'Studies' && (
          <>
          
          </>
        )}
        {activeTab === 'Sport' && (
          <>
          
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default Analytics

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.backgroundColor,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color:theme.text.primary
  },
  timeframeContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: theme.primary,
    padding: 7,
    borderRadius: 20,
    borderWidth: theme.boderWidth,
    borderColor: theme.borderColor
  },
  timeframeButton:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 5,
    borderLeftColor:theme.text.primary
  },
  timeframeText:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  // tabDivider:{
  //   borderStartColor: theme.text.primary,
  //   borderStartWidth: 1,
  //   borderTopStartRadius:1/2,
  //   borderBottomStartRadius:1/2,
  // },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    justifyContent:'center',
    alignSelf:'center',
    borderColor:theme.borderColor,
    borderWidth:theme.boderWidth,
    borderRadius:10

    // backgroundColor:'#fff'
  },
  tabButton:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical:5
  },
  tabText:{
    color:theme.text.primary,
    fontSize:14,
    fontWeight:'bold'
  },
  scrollView: {
    flex: 1,
    backgroundColor:theme.backgroundColor,
    margin: 5,
    marginTop: 20
  }
})


