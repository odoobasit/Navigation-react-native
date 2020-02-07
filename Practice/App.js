import React from "react";
import { View, Button, StyleSheet } from "react-native";
class App extends React.Component {
  constructor(props){
    super(props)
  }
  Talha=()=>{
    {this.props.navigation.navigate("Talha")}
  }
  Kashaf=()=>{
    {this.props.navigation.navigate("Kashaf")}
  }
  Khalid=()=>{
    {this.props.navigation.navigate("Khalid")}
  }


  render() {
    return (
      <View style={styles.main}>
      <Button title="talha" onPress={this.Talha}></Button>
      <Button title="kashaf" onPress={this.Kashaf}></Button>
      <Button title="khalid" onPress={this.Khalid}></Button>
      </View>
    )
  };
}
const styles=StyleSheet.create({
main:{
  alignSelf:"center",
  marginTop:270
}
})

export default App;