import { LaptopList } from './screens/LaptopList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaptopForm } from './screens/LaptopForm';

export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName='LaptopListNav'>
        <StackLaptops.Screen name="LaptopListNav" component={LaptopList} />
        <StackLaptops.Screen name="LaptopFormNav" component={LaptopForm} />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
