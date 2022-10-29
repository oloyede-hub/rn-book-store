import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList,TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios"



import HomeScreen from "./screens/HomeScreen";
import BookDetails from "./screens/BookDetails";
import HomeHeader from "./components/HomeHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("")


  const getBook = async () => {

    const url = "https://fudap-books-api.herokuapp.com/books/";
    try {
      axios.get(url, {
        responseType: "json",
      }).then((response) => {
        setData(response.data);
        setLoading(!isLoading);
      })
    } catch (error) {
        setError("Unable to load Book at the moment")
       }
  }

  useEffect(() => {
    getBook();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
        options={{
          // headerShown: false,
          header: () => (
            <HomeHeader />)
        }}
        >
          {(props) => <HomeScreen error={error} isLoading={isLoading} data={data} {...props}  />}
        </Stack.Screen>
        <Stack.Screen name="BookDetails"
        options={{
          headerShown: false
        }}
        >
          {(props) => <BookDetails data={data} {...props}  />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
