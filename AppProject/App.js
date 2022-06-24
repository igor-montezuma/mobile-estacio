import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contants from 'expo-constants';

import Home from'./components/Home' ;
// import ClassHome from './components/ClassHome';
import Create from "./components/Create";

export default function App() {

  


  return (
    <View style={styles.container}>
      
      
      <Create/>
      
      {/* <Text> Welcome </Text> */}

      

      {/* <ClassHome /> */}

         

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
