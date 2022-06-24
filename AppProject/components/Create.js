import {React, useState} from 'react';
import { View} from 'react-native';
import { TextInput } from 'react-native-paper';



export default function Create() {
    const [idade, setIdade] = useState("")
    const [genero, setGenero] = useState("")
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [colesterol, setColesterol] = useState("")
    const [glicose, setGlicose] = useState("")
    const [pressao_Sistolica, setPressao_Sistólica] = useState("")
    const [pressao_Diastolica, setPressao_Diastólica] = useState("")

    return (
        <View>
            <TextInput 
                label="Idade"
                value={idade}
                mode='outlined'
                onChangeText={text => setIdade(text)}
            />
            <TextInput
                label="Genero"
                value={genero}
                mode='outlined'
                onChangeText={text => setGenero(text)}
                />
            <TextInput
                label="Altura"
                value={altura}
                mode='outlined'
                onChangeText={text => setAltura(text)}
                />
            <TextInput
                label="Peso"
                value={peso}
                mode='outlined'
                onChangeText={text => setPeso(text)}
                />
            <TextInput
                label="Colesterol"
                value={colesterol}
                mode='outlined'
                onChangeText={text => setColesterol(text)}
                />
            <TextInput
                label="Glicose"
                value={glicose}
                mode='outlined'
                onChangeText={text => setGlicose(text)}
                />
            <TextInput
                label="Pressão Sistólica mmHg"
                value={pressao_Sistolica}
                mode='outlined'
                onChangeText={text => setPressao_Sistólica(text)}
                />
            <TextInput
                label="Pressão Diastólica mmHg"
                value={pressao_Diastolica}
                mode='outlined'
                onChangeText={text => setPressao_Diastólica(text)}
                />
            
            <button
            
            title='Enviar Dados'
            icon="pencil"
            mode='contained'
            onPress = {() => console.log("Enviar")}/>



        </View>
    );

    const styles = StyleSheet.create({
    tabela: {
        margin: 12,
        
},
})
}


