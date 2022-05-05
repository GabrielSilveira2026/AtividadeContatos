import {useState} from 'react';

import { 
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

{/*
  Observações:
  felxDirection: Row ou Colum
  justifyContent opera no eixo principal
  alingItems = secundario/outro eixo  
  
  <ScrollView> <- não recicla os componentes
        Lista de lembretes
        {
          lembretes.map((x) => (
            <View key={x} style={styles.itemNaLista}>
              <Text>{x}</Text>
            </View>
          ))
        }
  </ScrollView>
*/}

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [contatos, setContatos] = useState([])
  const [contadorContatos, setContadorContatos] = useState(0)

  const capturarTelefone = (TelefoneDigitado) => {
    setTelefone(TelefoneDigitado)
  }

  const capturarNome = (NomeDigitado) => {
    setNome(NomeDigitado)
  }

  const adicionarContato = () =>{
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 1)
      return [{key: contadorContatos.toString(), value: nome, telefone: telefone}, ...contatos]
    })
  }

  return (
    <View style={styles.telaPrincipalView}>
      
      <View>
      {/*Usuario insere lembrete aqui*/}
        <TextInput
          onChangeText={capturarNome}
          placeholder='Insira nome do Contato'
          style={{borderBottomColor: 'Black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <TextInput
          onChangeText={capturarTelefone}
          placeholder='Insira telefone do Contato'
          style={{borderBottomColor: 'Black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <Button 
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>

      <FlatList
        data={contatos}
        renderItem={
          l =>(
            <View style={styles.itemNaLista}>
              <Text style={styles.tituloItem}>{l.item.value}</Text>
              <Text style={styles.corpoItem}>Telefone: {l.item.telefone}</Text>
            </View>
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 15
  },

  itemNaLista:{
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#94cafa'
  },

  tituloItem:{
    fontSize: 20,
    paddingBottom: 10,
    borderBottomColor: '#2894f4',
    borderBottomWidth: 1,
    marginBottom: 2
  },

  corpoItem:{
    paddingTop:10,

  }
});