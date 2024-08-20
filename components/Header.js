import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native"


const Header = ({isCart}) => {
    const navigation = useNavigation();
  return (
    <View style ={styles.container}>
        <TouchableOpacity
        onPress={() =>
            navigation.navigate("HOME_STACK")
        }
        style= {styles.tabcontainer}>
            {
                isCart? ( <Ionicons name={ "chevron-back-sharp"} color={"#E96E6E"} size={24}/>) 
                :
                (
                    <Image source={require("../assets/images/tab.png")} style = {styles.tab}/>

                )

            }
            
        </TouchableOpacity>
        {
            isCart && <Text style= {styles.myCart}>My Cart</Text>
        }
        
        <Image source={require("../assets/images/profile.jpeg")} style = {styles.profile}/>
      
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",

    },
    tabcontainer:{
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius:22,
        justifyContent: "center",
        alignItems: "center",
    

    },
    profile: {
        height: 44,
        width: 44,
        borderRadius:22,


    },
    tab:{
        height: 28,
        width: 28,

    },
    myCart:{
       fontSize: 28,
       color:"black" 
    }
})