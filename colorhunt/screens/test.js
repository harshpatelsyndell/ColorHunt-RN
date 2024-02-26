import React, { useRef, useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Pressable,
} from 'react-native';

// const images = new Array(6).fill(
//   'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
// );

const images = [
    require('../assets/images/c1.png'),
    require('../assets/images/c2.png'),
    require('../assets/images/c3.png'),
    require('../assets/images/c4.png'),
  ];

const Ads = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
        scrollRef.current?.scrollTo({ animated: true, x: 0 });
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        scrollRef.current?.scrollTo({ animated: true, x: windowWidth * (currentIndex + 1) });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
    scrollRef.current?.scrollTo({ animated: true, x: windowWidth * index });
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], { useNativeDriver: false })}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <Pressable
                key={imageIndex}
                style={{ width: windowWidth }}
                onPress={() => handleDotPress(imageIndex)}
              >
                <ImageBackground source={image} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Pressable
                key={imageIndex}
                onPress={() => handleDotPress(imageIndex)}
              >
                <Animated.View
                  style={[styles.normalDot, { width }]}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default Ads;
