import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Drawer from './Navigation/Drawer';


export default function App() {
  return (
    <NavigationContainer >
      <Drawer />
    </NavigationContainer>
  );
}
