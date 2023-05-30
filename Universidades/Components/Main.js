import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import { EntradaDados } from './EntradaDados';
import {RenderDados }from './RenderDados';
import axios from 'axios';

export default function Main() {

  const [result, addResult]= useState([]);

  const dados = async (uni, pais) => {
  
    const url = "http://universities.hipolabs.com/search?" + (uni ?`&name=${uni}` : '' ) + (pais ? `&country=${pais}` :'' ) 

    const resposta = await axios.get(url)

    if (resposta.data.length < 1){
        alert("Não foi encontrada a universidade desejada");
    }else{
      addResult(resposta.data)
    }
  }

  return (
    <View style={styles.container}>
      <EntradaDados callBackPesquisar={dados}/>
      <RenderDados resultado = {result}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#ffff',

  },
  texto: {
    backgroundColor: 'yellow',
    fontSize: 32
  },
  lista:{
    padding:10,
     backgroundColor:"red",
    textAlign:"center", 
    margin:10,
    borderRadius:6
  }
});