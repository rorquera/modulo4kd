import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react';
import { guardarLaptopRest } from '../rest_client/Laptops';

export const LaptopForm = ({ navigation }) => {
  const [marca, setMarca] = useState();
  const [procesador, setProcesador] = useState();
  const [memoria, setMemoria] = useState();
  const [disco, setDisco] = useState();

  const mostrarMensaje = () => {
    Alert.alert('Confirmacion', 'Se agrego la laptop');
  };

  const guardarLaptop = () => {
    navigation.goBack();
    guardarLaptopRest(
      {
        marca,
        procesador,
        memoria,
        disco,
      },
      mostrarMensaje
    );
  };

  return (
    <View style={styles.container}>
      <Text>Formulario de Laptops</Text>
      <Input
        value={marca}
        placeholder="Marca"
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        value={memoria}
        placeholder="Memoria"
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        value={disco}
        placeholder="Disco"
        onChangeText={(value) => {
          setDisco(value);
        }}
      />
      <Button title="Guardar" onPress={guardarLaptop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
