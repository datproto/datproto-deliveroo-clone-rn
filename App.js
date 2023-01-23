import {StatusBar} from 'expo-status-bar'
import {Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View className={'h-full w-full flex'}>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}
