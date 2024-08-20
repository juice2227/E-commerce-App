import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute, useNavigation } from "@react-navigation/native"; 
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";

const sizes = ["S", "M", "L", "XL"];
const colorArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetailsScreen = () => {
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState("M");
  const route = useRoute();
  const item = route.params.item;
  const [selectedColor, setSelectedColor] = useState("#B11D1D");

  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate("Cart");
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.sizeValueContainer}
              onPress={() => {
                setSelectedSize(size);
              }}
            >
              <Text
                style={[
                  styles.sizeValue,
                  selectedSize === size && { color: "#E55B5B" },
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={[styles.title, styles.colorText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {colorArray.map((color, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedColor(color);
              }}
              style={[
                styles.circleBorder,
                selectedColor === color && {
                  borderColor: color,
                  borderWidth: 1,
                },
              ]}
            >
              <View style={[styles.circle, { backgroundColor: color }]} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity 
        onPress={() => { 
          handleAddToCart(item);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4D4C4C",
  },
  sizeText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circleBorder: {
    height: 48,
    width: 48,
    marginHorizontal: 5,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E96E6E",
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
