import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// import i18n from "../../services/internationalization/i18n";
import NewsCard from "../commons/NewsCard";
import api from "../../services/api/api";
import INews from "../../commons/types/INews";
import styles from "../styles/global";

export default function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<INews[]>([]);

  const getNews = async () => {
    const response = await api.getNews();
    setNews(response);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.card}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : news.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.text}>No news found</Text>
        </View>
      ) : (
        <>
          <Carousel
            loop
            height={800}
            vertical={true}
            data={news}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={NewsCard}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
          />
        </>
      )}
    </View>
  );
}
