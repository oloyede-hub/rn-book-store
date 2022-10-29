import React from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';


const BookItem = ({data, onPress}) => {

    const date = new Date(data.published);


    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, styles.shadow]}>
            <Image style={styles.image} source={{ uri: data.imgUrl}} />
            <View style={styles.info}>
               <Text style={styles.title}>{data.title}</Text>
               <Text style={styles.author}>{data.author}</Text>
               <View style={styles.infoBtns}>
                <Text style={styles.btn}>{data.pages}</Text>
                <Text style={styles.btn}>{date.getUTCFullYear()}</Text>
                {/* <Text style={styles.btn}>No</Text> */}
               </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical:30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    image: {
        flex: 0.4,
        height: 200,
        marginEnd: 10,
        borderWidth: 3,

    },
    info: {
        flex: 0.6,
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom:10,

    },
    author: {
        fontSize: 14,
        fontWeight: "300",
        color: "gray",
        marginBottom:10,
    },
    infoBtns: {
        flexDirection: "row",
        marginTop: 40,
    },
    btn: {
        flex:1,
        marginHorizontal: 5,
        fontWeight: "500",
        
        textAlignVertical: "center"
    }

   
})


export default BookItem;
