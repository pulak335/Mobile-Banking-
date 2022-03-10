import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components/Navtigator/MyDrawer';


export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
  );
}