import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import HomeScreen from "./screens/HomeScreen";
import BookDetails from "./screens/BookDetails";
import HomeHeader from "./components/HomeHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [searchItem, setSearchItem] = useState([]);

  const getBooks = async () => {
    const url = "https://fudap-books-api.herokuapp.com/books/";
    
    try {
       await axios
        .get(url, {
          responseType: "json",
        })
        .then((response) => {
          setData(response.data);
          setSearchItem(response.data);
          setError(null);
          console.log(response.data)
          setLoading(!isLoading);
        });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const searchFunction = (text) => {
    if (text) {
      const filteredData = data.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchItem(filteredData);
      setText(text);
    } else {
      setSearchItem(data);
      setText(text);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            // headerShown: false,
            header: () => (
              <HomeHeader searchFunction={searchFunction} text={text} />
            ),
          }}
        >
          {(props) => (
            <HomeScreen
              error={error}
              isLoading={isLoading}
              searchItem={searchItem}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="BookDetails"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <BookDetails data={data} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
