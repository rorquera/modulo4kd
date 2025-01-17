import { LaptopList } from './screens/LaptopList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen name="LaptopListNav" component={LaptopList} />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
