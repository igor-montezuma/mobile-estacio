import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'





class ClassHome extends Component {

    state = {
        name:"Allan"
        }



  render() {
    return (
      <View>
        <Text style= {{fontSize:20, color:'purple'}}> Hello From Class </Text>
        <Text>{this.state.name} </Text>
        <Button title = 'Click me' onPress={() => this.setState({name:"Agora mudou"})}/>
    </View>
    )
  }
}

export default ClassHome