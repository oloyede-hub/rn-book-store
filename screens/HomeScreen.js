import React from "react";
import axios from "axios";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import BookItem from "../components/BookItem";

const HomeScreen = ({ navigation, isLoading, error, searchItem }) => {
  const goToDetailScreen = (index) => {
    navigation.navigate("BookDetails", { index });
  };



  // const Loading = ({ accessibilityLabel, testID}) => (
  //   <View style={styles.loading}>
  //     {error ? (
  //       error
  //     ) : (
  //       <>
  //       <ActivityIndicator
  //         size={50}
  //         color="gray"
  //         testID={testID}
  //         accessibilityLabel={accessibilityLabel}
  //       />
  //       <Text style={{ color: "#3a753593", fontSize: 20}}>Loading books...</Text>
  //       </>
  //     )}
  //   </View>
  // );





  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      {isLoading ? (
        <ActivityIndicator
        size={50}
        color="gray"
        testID="loading" accessibilityLabel="App is loading books"
      />
        // <Loading  />
      ) : (
        <FlatList
          data={searchItem}
          testID="book"
          // accessibilityLabel="books"
          accessibilityLabel="books"
          renderItem={({ item, index }) => (
            <BookItem
              testID="book"
              data={item}
              onPress={() => goToDetailScreen(index)}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece7e70c",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
