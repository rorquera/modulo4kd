import { Button, ListItem } from '@rneui/base';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getAllLaptops } from '../rest_client/Laptops';
import { useState } from 'react';

export const LaptopList = () => {
  const [laptopList, setLaptopList] = useState([]);

  const fnRefrescarLista = (cuerpo) => {
    setLaptopList(cuerpo);
  };

  const LaptopItem = ({ laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca}</ListItem.Title>
          <ListItem.Subtitle>{laptop.procesador}</ListItem.Subtitle>
          <ListItem.Subtitle>{laptop.disco}</ListItem.Subtitle>
          <ListItem.Subtitle>{laptop.id}</ListItem.Subtitle>
          <ListItem.Subtitle>{laptop.memoria}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View>
      <Text>Lista de laptops</Text>
      <Button
        title="Traer Laptops"
        onPress={() => {
          getAllLaptops(fnRefrescarLista);
        }}
      />
      <FlatList
        data={laptopList}
        renderItem={({ item }) => {
          return <LaptopItem laptop={item} />;
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
