import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, Button, TextInput} from 'react-native'



export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch('http://127.0.0.1:5000/get',{
        method:'GET'
      })
      .then(resp => resp.json)
      .then(article => {
          setData(article)
      })
    },[])
    


  const [idade, onChangeIdade] = React.useState(
     " "
  )

  const [genero, onChangeGenero] = React.useState(
    " "
 );

  const [altura, onChangeAltura] = React.useState(
    0
  );

  const [peso, onChangepeso] = React.useState(
    " "
  );

  const [colesterol, onChangeColesterol] = React.useState(
    " "
  );
  
  const mostrarDados = () => (
    console.log(genero) 
  )

  return (
    <View>
      <Text>Idade</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => onChangeIdade(e)}
      />
    
      <Text>Genero</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => onChangeGenero(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      />
      <Button
        title="Enviar"
        onPress={() => mostrarDados()}/>

        


    </View>


  )
  
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

