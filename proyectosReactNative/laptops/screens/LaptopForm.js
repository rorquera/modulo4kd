import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react';
import {
  guardarLaptopRest,
  actualizarLaptopRest,
} from '../rest_client/Laptops';

export const LaptopForm = ({ navigation, route }) => {
  let laptopRecuperada = route.params.laptopParam;
  let esNuevo = true;
  if (laptopRecuperada) {
    esNuevo = false;
  }

  const [marca, setMarca] = useState(esNuevo ? null : laptopRecuperada.marca);
  const [procesador, setProcesador] = useState(
    esNuevo ? null : laptopRecuperada.procesador
  );
  const [memoria, setMemoria] = useState(
    esNuevo ? null : laptopRecuperada.memoria
  );
  const [disco, setDisco] = useState(esNuevo ? null : laptopRecuperada.disco);

  const mostrarMensaje = () => {
    Alert.alert(
      'Confirmacion',
      esNuevo ? 'Se agrego la laptop' : 'Se actualizo los datos de la laptop'
    );
    navigation.goBack();
  };

  const guardarLaptop = () => {
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

  const actualizarLaptop = () => {
    actualizarLaptopRest(
      {
        id: laptopRecuperada.id,
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
      <Button
        title="Guardar"
        onPress={esNuevo ? guardarLaptop : actualizarLaptop}
      />
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
