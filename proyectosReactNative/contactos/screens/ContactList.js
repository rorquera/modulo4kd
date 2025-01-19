import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { Button, ListItem, FAB } from '@rneui/base';
import { getAllContacts } from '../rest_client/Contactos';
import { useState } from 'react';

export const ContactList = ({ navigation }) => {
  const [contactList, setContactList] = useState([]);

  const fnRefreshList = (contactos) => {
    setContactList(contactos);
  };

  const ContactItem = ({ contact }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('ContactFormNav',{contactParam:contact});
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{contact.id}</ListItem.Title>
            <ListItem.Subtitle>{contact.nombre}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
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
      <FAB
        placement="right"
        title="Add"
        icon={{ name: 'add', color: 'white' }}
        color="green"
        onPress={() => {
          navigation.navigate('ContactFormNav',{});
        }}
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
