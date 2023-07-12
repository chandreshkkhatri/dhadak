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
const batchSize = 10;

enum LastCardTextState {
  LOADING = "Loading...",
  NO_MORE_ARTICLES = "No more articles.",
  NO_ARTICLES_FOUND = "No articles found.",
  ERROR_LOADING_FEED = "Error loading feed.",
}

export default function HomeScreen() {
  const [newsFeed, setNewsFeed] = useState<INews[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastCardText, setLastCardText] = useState<LastCardTextState>(
    LastCardTextState.LOADING
  );

  const ref = useRef<ICarouselInstance>(null);

  const getNews = async () => {
    try {
      const response = await api.getNewsfeed(page, batchSize);
      const feed = response?.data;

      if (feed.length === 0) {
        if (newsFeed.length === 0) {
          setLastCardText(LastCardTextState.NO_ARTICLES_FOUND);
        } else {
          setLastCardText(LastCardTextState.NO_MORE_ARTICLES);
        }
      } else {
        setNewsFeed([...newsFeed, ...feed]);
      }
    } catch (error) {
      setLastCardText(LastCardTextState.ERROR_LOADING_FEED);
    }
  };

  const handleOnSnapToItem = (index: number) => {
    if (
      lastCardText === LastCardTextState.LOADING &&
      index >= newsFeed.length - 3
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getNews();
  }, [page]);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Carousel
          loop={false}
          ref={ref}
          vertical={true}
          height={PAGE_HEIGHT}
          data={[...newsFeed, lastCardText]}
          style={styles.carousel}
          onSnapToItem={(index) => handleOnSnapToItem(index)}
          renderItem={CarouselCard}
          pagingEnabled={true}
        />
      </GestureHandlerRootView>
    </View>
  );
}

const CarouselCard = ({
  item,
  index,
}: {
  item: INews | string;
  index: number;
}) => {
  if (typeof item === "string") {
    return <TextCard text={item} />;
  }
  return <NewsCard item={item} index={index} />;
};

const TextCard = ({ text }: { text: string }) => {
  return (
    <View style={styles.textCard}>
      <Text>{text}</Text>
    </View>
  );
};
