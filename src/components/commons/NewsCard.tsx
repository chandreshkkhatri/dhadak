import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import INews from "../../commons/types/INews";
import placeholder from "../../../assets/placeholder.png";

const NewsCard = ({ item, index }: { item: INews; index: number }) => {
  const [imageError, setImageError] = useState(false);
  const { author, content, date, description, image, title, url } = item;

  return (
    <TouchableOpacity
      key={index}
      style={styles.card}
      onPress={() => console.log("pressed")}
    >
      <Image
        source={!imageError && image ? { uri: image } : placeholder}
        style={styles.image}
        onError={(e) => {
          if (!imageError) {
            setImageError(true);
          }
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  description: {
    marginTop: 10,
    fontSize: 15,
  },
  author: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NewsCard;
