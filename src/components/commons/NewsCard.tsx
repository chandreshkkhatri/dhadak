import { View, Text } from "react-native";
import INews from "../../commons/types/INews";
import styles from "../styles/global";

const NewsCard = ({ item, index }: { item: INews; index: number }) => {
  return (
    <View style={styles.card} key={index}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default NewsCard;
