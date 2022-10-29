import React from 'react';
import {View, StyleSheet, Text,Image, StatusBar, ImageBackground, useWindowDimensions, TouchableOpacity, ScrollView} from 'react-native';
import {AntDesign} from "@expo/vector-icons"
const BookDetails = ({ navigation, route, data}) => {

    const index = route.params.index;;
    const currentData = data[index];
    const {width} = useWindowDimensions();

    const goToHome = () => {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: currentData.imgUrl}} style={[styles.image, width]}>
            <TouchableOpacity  onPress={goToHome} style={styles.btn}><AntDesign color="white" size={20} name='arrowleft' /></TouchableOpacity>
                <View style={styles.overlay}>
                    <Image source={{uri: currentData.imgUrl}} style={styles.shortimg} />
                    <Text style={styles.title}>{currentData.title}</Text>
                    <Text style={styles.author}>{currentData.author}</Text>
                </View>
            </ImageBackground>
            <View style={styles.des}>
                <Text style={styles.heading}>Description:</Text>
                <ScrollView
                contentContainerStyle={{ paddingLeft: 14, lineHeight: 20 }}
                indicatorStyle='white'
                ><Text style={styles.description}>{currentData.description}</Text></ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    image :{
        flex: .65,
    },
    overlay: {
        fontSize: 28,
        backgroundColor: "#888888ce",
        opacity: 0.85,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        
    },
    shortimg: {
        width: 150,
        height: 200,
        borderRadius: 10,
        
        
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        marginTop:10,
        marginBottom:10,
        color: "#fff",

    },
    author: {
        fontSize: 20,
        fontWeight: "300",
        color: "#fff",
        marginBottom:10,
    },
    des: {
        backgroundColor: "#fff",
        flex: 0.35,
        marginTop: -24,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        borderTopWidth: .5,
        borderStyle: "solid"
    },
    heading: {
        fontSize: 20,
        fontWeight: "800",
        color:"gray",
        paddingBottom: 20,
        letterSpacing: 2.5

    },
    description: {
        fontSize: 14,
        lineHeight: 30,
        color: "#000",

    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        position: "absolute",
        left: 5,
        top: 0,
        zIndex:10
    },
    icon: {
        color: "white",
        fontWeight: "800",
        fontSize: 20
    }
})

export default BookDetails;
