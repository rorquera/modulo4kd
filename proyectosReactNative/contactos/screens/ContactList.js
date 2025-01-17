import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from '@rneui/base';
import { getAllContacts } from '../rest_client/Contactos';
import { useState } from 'react';

export const ContactList = () => {
  const [contactList, setContactList] = useState([]);

  const fnRefreshList = (contactos) => {
    setContactList(contactos);
  };

  const ContactItem = ({ contact }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contact.id}</ListItem.Title>
          <ListItem.Subtitle>{contact.nombre}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View>
      <Text>LISTA DE CONTACTOS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllContacts(fnRefreshList);
        }}
      />
      <FlatList
        data={contactList}
        renderItem={({ item }) => {
          return <ContactItem contact={item} />;
        }}
      />
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
