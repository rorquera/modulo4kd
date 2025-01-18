import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { useState } from 'react';
import { saveContactRest } from '../rest_client/Contactos';

export const ContactsForm = ({ navigation }) => {
  const [name, setName] = useState();
  const [surName, setSurName] = useState();
  const [phone, setPhone] = useState();

  const showMessage = () => {
    Alert.alert('Confirmacion', 'Se creó el contacto');
  };

  const saveContact = () => {
    navigation.goBack();
    saveContactRest(
      {
        name,
        surName,
        phone,
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
      <Button title="Guardar" onPress={saveContact} />
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
