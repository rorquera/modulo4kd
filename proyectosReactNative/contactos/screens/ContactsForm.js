import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react';
import {
  deleteContactRest,
  saveContactRest,
  updateContactRest,
} from '../rest_client/Contactos';

export const ContactsForm = ({ navigation, route }) => {
  let contactRetrieved = route.params.contactParam;
  let isNew = true;
  if (contactRetrieved != null) {
    isNew = false;
  }

  const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
  const [surName, setSurName] = useState(
    isNew ? null : contactRetrieved.apellido
  );
  const [phone, setPhone] = useState(isNew ? null : contactRetrieved.celular);

  const showMessage = (message) => {
    Alert.alert('Confirmacion', message);
    navigation.goBack();
  };

  const createContact = () => {
    saveContactRest(
      {
        name,
        surName,
        phone,
      },
      showMessage
    );
  };

  const updateContact = () => {
    console.log('actualizando...');
    updateContactRest(
      { id: contactRetrieved.id, name, surName, phone },
      showMessage
    );
  };

  const confirmDelete = () => {
    Alert.alert('Eliminar', '¿Esta seguro que desea eliminar el contacto?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      { text: 'Si', onPress: deleteContact },
    ]);
  };

  const deleteContact = () => {
    deleteContactRest(
      {
        id: contactRetrieved.id,
      },
      showMessage
    );
  };

  return (
    <View style={styles.container}>
      <Text>Formulario de Contacto</Text>
      <Input
        value={name}
        placeholder="Nombre"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <Input
        value={surName}
        placeholder="Apellido"
        onChangeText={(value) => {
          setSurName(value);
        }}
      />
      <Input
        value={phone}
        placeholder="Telefono"
        onChangeText={(value) => {
          setPhone(value);
        }}
      />
      <Button title="Guardar" onPress={isNew ? createContact : updateContact} />
      {isNew ? (
        <View></View>
      ) : (
        <Button title="Eliminar" onPress={confirmDelete} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
