import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { theme } from 'theme';

import Icon from 'components/common/Icon';
import AppModal from 'components/common/Modal';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");

// interface SheetList {
//   Sheet
// }
// interface Sheet {
//   title?: string,
//   todos?: Array<string>,
//   id: string
// }

const mockSheet = [
  {
    title: 'Sheet 1',
    todos: ['no item'],
    id: '1'
  },
  {
    title: 'No tiltle',
    todos: ['go shop', 'drink gatorade'],
    id:'2'
  },
  {
    title: 'Todays tasks',
    todos: ['sleep', 'rest', 'eat', 'work'],
    id:'3'
  }
]

export default function Todo() {

  const renderSheetItem = useCallback((item:string, index:number)=>{
    return (
      <View style={styles.item} key={index}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <CheckBox style={styles.checkbox} value={false} disabled={false} />
          <TextInput style={styles.bodyText} value={item} />
        </View>
        <TouchableOpacity style={styles.deleteItem}><Icon type={'ionicon'} name={'close'} size={20} color={'grey'}/></TouchableOpacity>
      </View>
      
    );
  }, [mockSheet]);

  const renderSheets = useCallback((sheet:{title:string, todos:Array<string>, id:string}, index:number)=>{
    return (
      <View style={styles.sheet} key={index}>
        <TouchableOpacity style={styles.deleteSheet} onPress={()=> console.log(sheet.id)} hitSlop={{top:4, bottom:8, right:4, left:8}} >
          <Icon type={'ionicon'} name={'trash-outline'} size={20} color={'red'} />
        </TouchableOpacity>          
        {/* sheet header */}
        <View style={styles.header}>
          <TextInput style={styles.headerText} value={sheet.title} />
        </View>
        {/* sheet body */}
        <ScrollView style={styles.body}>
          {sheet.todos.map((item, index)=>{return renderSheetItem(item, index)})}
        </ScrollView>
      </View>
    );
  }, [mockSheet]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <View style={styles.container} >
      <ScrollView contentContainerStyle={styles.caroussel} horizontal={true}> 
        {
          mockSheet.map((sheet, index)=>{
            return renderSheets(sheet, index);
          })
        }
      </ScrollView>
      <View style={styles.addContainer}>
        {
          isAddOpen && 
          (
          <View style={styles.paletteContainer} >
            <TouchableOpacity style={[styles.paletteItem, {backgroundColor:'white'}]} />
            <TouchableOpacity style={[styles.paletteItem, {backgroundColor:'beige'}]} />
            <TouchableOpacity style={[styles.paletteItem, {backgroundColor:'grey'}]} />
            <TouchableOpacity style={[styles.paletteItem, {backgroundColor:'lightblue'}]} />
          </View>
          )
        }
        <TouchableOpacity style={[isAddOpen ? styles.addSheetButtonAnimate: null]} onPress={()=>setIsAddOpen(!isAddOpen)}>
          <Icon type={'ant'} name={'pluscircleo'} size={22} color={isAddOpen ? 'red' : theme.secondary}/>
        </TouchableOpacity>
      </View>      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center', 
    backgroundColor:theme.backgroundColor
  },
  caroussel: {
    alignItems:'center',
    justifyContent:'center'  
  },
  sheet: {
    height: ScreenHeight*0.6,
    width: ScreenWidth*0.75,
    backgroundColor: theme.primary,
    borderRadius:8,
    padding:15,
    marginHorizontal: 15,
    flexDirection:'column',
    elevation:20,
    borderColor: theme.borderColor,
    borderWidth: theme.boderWidth,
  },
  item: {
    paddingVertical: 4,
    marginVertical : 2,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header: {
    height:40,
    borderBottomColor:'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20
  },
  body:{
    padding:15
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'600',
    marginStart: 10
  },
  deleteSheet:{
    position:'absolute',
    top:5,
    right:5,
    elevation:15
  },
  checkbox: {
    height: 16,
    width: 16
  },
  deleteItem:{
    
  },
  addContainer: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    height: 45,
    paddingHorizontal:10
  },
  addSheetButton:{ // pointless
    elevation: 10,
    shadowColor: theme.secondary,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4
  },
  addSheetButtonAnimate: {
    transform: [
      {rotate: '45deg'}
    ]
  },
  paletteContainer: {
    backgroundColor: theme.primary,
    flexDirection:'row',
    padding:10,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    marginHorizontal: 15
  },
  paletteItem: {
    height:20,
    width:20,
    borderRadius:10,
    marginHorizontal:5
  }
})