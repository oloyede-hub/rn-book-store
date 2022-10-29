import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TextInput, useWindowDimensions} from 'react-native';
import { AntDesign} from "@expo/vector-icons"

const HomeHeader = () => {
    const  { width } = useWindowDimensions();
    const [text, setText] = useState("");
    return (
        <View
        style={[styles.container, width]}
        >
        <View  style={styles.wrapper}>
        <TextInput
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
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
