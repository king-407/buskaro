import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusBoardingScreen from './screens/BusBoardingScreen';
import BusInfoScreen from './screens/BusInfoScreen';
import BusListScreen from './screens/BusListScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import BusJourneyScreen from './screens/BusJourneyScreen';
import AlertScreen from './screens/AlertScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="BusList" component={BusListScreen} /> */}
        <Stack.Screen name="BusBoarding" component={BusBoardingScreen} />
        <Stack.Screen name="BusInfo" component={BusInfoScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="BusJourney" component={BusJourneyScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
