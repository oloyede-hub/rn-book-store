import React from 'react';
import axios from "axios"
import {View, StyleSheet, Text,SafeAreaView,StatusBar, FlatList, ActivityIndicator} from 'react-native';
import BookItem from '../components/BookItem';

const HomeScreen = ({ navigation, data, isLoading, error, searchItem}) => {
   
    const goToDetailScreen = (index) => {
        navigation.navigate("BookDetails", {index} )
    }


    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };

    const Loading = () => (<View style={styles.loading}>
        {error ? error: <ActivityIndicator size={40}  testID="loading" accessibilityLabel="App is loading books" />}
    </View>)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"blue"} barStyle="light-content" />
            {isLoading ? <Loading />: (
                <FlatList
                data={searchItem}
                accessibilityLabel="books"
                renderItem={({ item, index }) => (
                  <BookItem
                    testID="book"
                    data={item}
                    onPress={() => goToDetailScreen(index)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                  />
                  
                )}
              />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor: "#1D212B"
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default HomeScreen;
