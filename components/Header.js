import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style ={styles.container}>
        <View style= {styles.tabcontainer}>
            <Image source={require("../assets/images/tab.png")} style = {styles.tab}/>
        </View>
        <Image source={require("../assets/images/profile.jpeg")} style = {styles.profile}/>
      
    </View>
  )
}

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

    }
})