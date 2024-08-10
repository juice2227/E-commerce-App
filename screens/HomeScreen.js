import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';

const categories = ['Trending Now','All', 'New', 'Mens', 'Womens']
export default function HomeScreen() {
  const [selectedCategory,setSelectedCategory ] =useState(null);

  return (
    
      <LinearGradient
        
        colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
          <Header/>
          <Text style ={styles.match}>Match Your Style</Text>
          <View style ={styles.inputContainer}>
           <View style= {styles.iconContainer}>
           <Fontisto name='search' size={26} color={"#C0C0C0"}/>
           </View>
            
            <TextInput style= {styles.textInput} placeholder='Search'/>
          </View>
        {/* category section */}
        <FlatList 
        data={categories} 
        renderItem= {({item}) => (
          <Category 
        item = {item} 
        selectedCategory= {selectedCategory} 
        setSelectedCategory={setSelectedCategory}/>
          

        )
         }
        keyExtractor={(item) => item} 
        horizontal ={true}
        showsHorizontalScrollIndicator = {false}
        />
        
        {/* Productlist */}
        <View style= {{
          flexDirection: "row"

        }}>
          <ProductCard/>
          <ProductCard/>
        </View>
        <FlatList 
        data={[1, 2, 3, 4, 5, 6]} 
        ListHeaderComponent={
          <>
          <FlatList 
        data={categories} 
        renderItem= {({item}) => (
          <Category 
        item = {item} 
        selectedCategory= {selectedCategory} 
        setSelectedCategory={setSelectedCategory}/>
          

        )
         }
        keyExtractor={(item) => item} 
        horizontal ={true}
        showsHorizontalScrollIndicator = {false}
        />
          </>
        }
        renderItem={ProductCard}
        numColumns={2}
        />
        {/*<View style= {{
          flexDirection: "row"
          
        }}>
          <ProductCard/>
          <ProductCard/>
        </View>*/}
    </LinearGradient>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
    
  },
  match:{
    fontSize: 28,
    color:"#000000",
    marginTop: 25,

  },
  inputContainer:{
    backgroundColor:"#FFFFFF",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,

  },
  textInput:{
    flex:1,
    

  },
  iconContainer:{
    marginHorizontal: 15,
  }

  
});
