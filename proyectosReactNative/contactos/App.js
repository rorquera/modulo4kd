import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactList } from './screens/ContactList';
import { ContactsForm } from './screens/ContactsForm';

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="ContactListNav">
        <StackContacts.Screen name="ContactListNav" component={ContactList} />
        <StackContacts.Screen name="ContactFormNav" component={ContactsForm} />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
