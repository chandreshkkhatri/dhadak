import {  View, Text, Dimensions } from "react-native";
import INews from "../../commons/types/INews";
import styles from "../styles/global";

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{news.title}</Text>
    </View>
  );
};


export default NewsCard;
