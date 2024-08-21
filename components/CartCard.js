import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";
const CartCard = ({item, deleteItemFromCart}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.cartContent}>
        <Text style ={styles.title}>{item.title}</Text>
        <Text style ={styles.price}>${item.price}</Text>
        <View style ={styles.circleSizeContainer}>
        <View style ={[styles.circle,{backgroundColor : item.color}]}/>
        <View style ={styles.sizeCircle}>
          <Text style ={styles.sizeText}>{item.size}</Text>
        </View>
      </View>
      
      </View>
      <TouchableOpacity onPress={() => {
        deleteItemFromCart(item)
      }}>
      <FontAwesome6 name ={"trash"} color={"#F68CB5"} size={22}/>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  sizeCircle:{
    backgroundColor: "white",
    height: 32,
    width:32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:10,

  },
  circleSizeContainer:{
    flexDirection: "row"

  },
  cartContent: {
    flex: 1,
  },
  coverImage: {
    height: 125,
    width: "25%",
    borderRadius: 20,
  },
  title:{
    fontSize: 18,
    color: "#444444",
    fontWeight: "500"


  },
  price:{
    color: "#797979",
    marginVertical: 10,
    fontSize: 18,

  },
  circle:{
    height: 32,
    width: 32,
    borderRadius: 16,
    
  },
  sizeText:{
    fontSize : 18,
    fontWeight: "500",

  }
});
