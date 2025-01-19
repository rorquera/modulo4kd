import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react';
import {
  guardarLaptopRest,
  actualizarLaptopRest,
  eliminarLaptopRest,
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

  const mostrarMensaje = (mensaje) => {
    Alert.alert('Confirmación', mensaje);
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

  const confirmarEliminacion = () => {
    Alert.alert(
      'Eliminar',
      '¿Está seguro que desea eliminar la información de la laptop?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Si', onPress: eliminarLaptop },
      ]
    );
  };

  const eliminarLaptop = () => {
    eliminarLaptopRest({ id: laptopRecuperada.id }, mostrarMensaje);
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
      <View style={styles.botonera}>
        <Button
          title="Guardar"
          onPress={esNuevo ? guardarLaptop : actualizarLaptop}
        />
        {esNuevo ? (
          <View></View>
        ) : (
          <Button title="Eliminar" onPress={confirmarEliminacion} />
        )}
      </View>
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
  botonera: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-evenly',
  },
});
