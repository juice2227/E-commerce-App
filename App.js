import * as React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const myHomeStack = ()=>{
  return(
    <Stack.Navigator 
    screenOptions={{headerShown: false,}} initialRouteName=''>
      <Stack.Screen name="Home" component={HomeScreen } />
      <Stack.Screen name="PRODUCTS_DETAILS" component={ProductDetailsScreen} />
      </Stack.Navigator>

  );
}

export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false ,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E96E6E"

      }}>
        <Tab.Screen name="Home_STACK" component={myHomeStack} options={{tabBarIcon:({size,focused, color})=> {
               return <Entypo name={"home"} size={size} color={color}/>
        }
         
        }} />
        <Tab.Screen name='Reoder' component={HomeScreen} 
        options={{
          tabBarIcon: ({size,color}) =>
             <MaterialIcons name={"reorder"} size={size} color={color}/>
        }}
        />
        <Tab.Screen name='Account' component={HomeScreen}
        options={{
          tabBarIcon: ({size,color}) =>
             <MaterialCommunityIcons
          name={"cart"} size={size} color={color}/>
        }}
        />
        <Tab.Screen name='Cart' component={HomeScreen}
        options={{
          tabBarIcon: ({size,color}) =>
             <FontAwesome6
          name={"user"} size={size} color={color}/>
        }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}