import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const BookItem = ({ data, onPress }) => {
  const date = new Date(data.published);

  return (
    <TouchableOpacity onPress={onPress} testID="book">
      <View style={[styles.container, styles.shadow]}>
        <Image style={styles.image} source={{ uri: data.imgUrl }} />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.author}>{data.author}</Text>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.btn}>
            {data.description}
          </Text>
          <View style={styles.infoBtns}>
            <Text style={styles.btn}>Pages: {data.pages}</Text>
            <Text style={styles.btn}>Published:{date.getUTCFullYear()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    maxHeight: 300,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    flex: 0.4,
    height: 200,
    marginRight: 10,
    borderWidth: 3,
    minHeight: "90%",
  },
  info: {
    flex: 0.6,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  author: {
    fontSize: 14,
    fontWeight: "300",
    color: "gray",
    marginBottom: 10,
  },
  infoBtns: {
    flexDirection: "row",
  },
  btn: {
    // flex:1,
    marginHorizontal: 5,
    marginVertical: 15,
    fontWeight: "500",
    color: "gray",
    textAlignVertical: "center",
  },
});

export default BookItem;
