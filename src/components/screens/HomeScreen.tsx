import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

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
          <Swiper
            verticalSwipe={true}
            horizontalSwipe={false}
            backgroundColor={"#808080"}
            cards={news}
            renderCard={(news) => <NewsCard news={news} />}
            showSecondCard={true}
            swipeBackCard={true}
            stackSize={3}
            onSwiped={() => console.log("onSwiped")}
            onSwipedAll={() => console.log("onSwipedAll")}
          />
        </>
      )}
    </View>
  );
}
