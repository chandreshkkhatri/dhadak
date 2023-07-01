import { useState, useEffect, useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel";

// import i18n from "../../services/internationalization/i18n";
import NewsCard from "../commons/NewsCard";
import api from "../../services/api/api";
import INews from "../../commons/types/INews";
import styles from "../styles/global";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const PAGE_HEIGHT = Dimensions.get("window").height;

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [newsFeed, setNewsFeed] = useState<INews[]>([]);
  const ref = useRef<ICarouselInstance>(null);

  const getNews = async () => {
    const response = await api.getFeed();
    const feed = response?.feed;
    setNewsFeed(feed);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      ) : newsFeed?.length > 0 ? (
        <GestureHandlerRootView>
          <Carousel
            ref={ref}
            vertical={true}
            height={PAGE_HEIGHT}
            data={newsFeed}
            style={styles.carousel}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={NewsCard}
          />
        </GestureHandlerRootView>
      ) : (
        <View style={styles.loading}>
          <Text>No news available</Text>
        </View>
      )}
    </View>
  );
}
