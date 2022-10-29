import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput, useWindowDimensions} from 'react-native';
import { AntDesign} from "@expo/vector-icons"

const HomeHeader = ({searchFunction, text}) => {
    const  { width } = useWindowDimensions();

    return (
        <View
        style={[styles.container, width]}
        >
        <View  style={styles.wrapper}>
        <TextInput
            style={styles.input}
            onChangeText={newText => searchFunction(newText)}
            defaultValue={text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
        />
        <TouchableOpacity
          style={{ padding: 10 }}
          >
          <AntDesign name="search1" size={20}  />
        </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: "#ece7e7ce",
      },
      wrapper: {
        flexDirection: "row",
        alignSelf: "center",
        paddingHorizontal: 30,
      },
      input: {height: 40,width : "85%", 
      borderWidth: 1,
      borderRadius: 20,
      paddingStart: 20
    },
})

export default HomeHeader;
