import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider , CartContext} from "./context/CartContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CartScreen from "./screens/CartScreen";
//import{} from "./context/CartContext";
import { useContext } from "react";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PRODUCTS_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#E96E6E",
          }}
          initialRouteName=""
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={"home"} size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Reoder"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name={"reorder"} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons
                  name={"cart"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { carts } = useContext(CartContext);
                return (
                  <View style={{ position: "relative" }}>
                    <MaterialCommunityIcons
                      name={"cart"}
                      size={size}
                      color={color}
                    />
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 7,
                        backgroundColor: color,
                        justifyContent: "center",
                        alignContent: "center",
                        position: "absolute",
                        top: -10,
                        right: -5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "white",
                          fontWeight:"500",
                        }}
                      >
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
