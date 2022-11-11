import { View, Text,StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import React from 'react'


let width=Dimensions.get('screen').width
const numColumns=4

const App = () => {
  const datalist=[{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},]
  let {container,ItemStyle,fontstyle}=style
  const Render=({item,index})=>{
   return(
    <View  style={ItemStyle}>
      <Text  style={fontstyle}>{item.key}</Text>
    </View>
   )
  }
  return (
    <View  style={container}>
      <StatusBar />
      <FlatList 
      data={datalist}
      renderItem={Render}
      keyExtractor={(item,index)=>index.toString()}
      numColumns={numColumns}
      
      
      />
    </View>
  )
}

export default App

const style=StyleSheet.create({
  container:{
    flex:1,
   
  },
  ItemStyle:{
    backgroundColor:"#3232ff",
    alignItems:"center",
    justifyContent:"center",
    height:100,
    flex:1,
    margin:1,
    height:width/numColumns

  }
  ,
  fontstyle:{
    fontSize:30,
    color:"#fff"
  }
})