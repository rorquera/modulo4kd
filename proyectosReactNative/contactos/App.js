import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactList } from './screens/ContactList';

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen name="ContactListNav" component={ContactList} />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}
