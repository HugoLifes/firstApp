import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';


class Nutrilife extends Component{

constructor(){
  super();
    this.state={
      screenWidth:Dimensions.get("window").width
    };
}

  render(){

      const imageHeigth = Math.floor(this.state.screenWidth*1.1);
      const imageUri =
      "https://cosmos-images1.imgix.net/file/spina/photo/13650/180119_el_gordo_1.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=1300" + "=s" +
      imageHeigth+ "-c";

      return (
      <View style={styles.container}>

        <View style={styles.tempbar}>
        <Text> Nutrilife </Text>
        </View>

        <View style={styles.userBar}>
        <View style={{
          flexDirection:"row",
          alignItems:"center"
        }}
        >
        <Image
        //imagen de perfil
        style={styles.userPic}
        source={{
          uri:
            'https://lh6.googleusercontent.com/-VyC1Np8uFgw/AAAAAAAAAAI/AAAAAAAAxW8/ImxhPgNUuAs/photo.jpg'
        }}
          />
          <Text style={{marginLeft:5}}>Hugo Vidana</Text>
        </View>
        <View style={{alginItem:"center"}}>
        <Text style={{fontSize:30}}>...</Text>
        </View>
      </View>

      <Image style={{width:this.state.screenWidth, height: 300}}
      //imagen subida a la red
          source={{
              uri:imageUri
            }}
          />
      </View>
    );
  }}
export default Nutrilife;
const styles = StyleSheet.create({
  //objeto container
  container: {
    //caracteristicas del objeto
    flex: 1,
    width: 100 + "%",
    height: 100 + "%"
  },
  tempbar:{
    width:100+"%",
    height: 80,
    paddingTop: 30,
    backgroundColor: "rgb(255,255,255)",
    borderBottomColor:"rgb(238,238,238)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:"center",
    alignItems: "center"
  },

  userBar:{
    width: 100+"%",
    height: 40,
    backgroundColor:"rgb(255,255,255)",
    flexDirection:'row',
    paddingHorizontal:5,
    marginTop: 3,
    marginBottom: 3,
    justifyContent:"space-between"
  },

  userPic:{
    height:40,
    width:40,
    borderRadius:20
  }

});
