import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';

const WelcomeScreen = ({navigation}) => {
  const images = [
    require('../../assets/images/saarc_6.png'),
    require('../../assets/images/saarc_3.png'),
    require('../../assets/images/saarc_4.png'),
    require('../../assets/images/saarc_5.png'),
  ];

  const buttonColors = ['#6082B6', '#6082B6', '#6082B6', '#6082B6']; // Military color
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Start the animation sequence after a short delay (e.g., 500ms)
    setTimeout(() => {
      setAnimationFinished(true); // Update state when animation finishes
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        onIndexChanged={index => setCurrentIndex(index)}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
              <Animatable.View
                animation={animationFinished ? 'fadeInUp' : undefined}
                duration={1000}
                style={styles.animatedContainer}>
                <Animatable.Text
                  animation={animationFinished ? 'slideInLeft' : undefined}
                  duration={1000}
                  style={styles.title}>
                  Welcome
                </Animatable.Text>
                <Animatable.Text
                  animation={animationFinished ? 'slideInLeft' : undefined}
                  duration={1000}
                  style={styles.title}>
                  to
                </Animatable.Text>
                <Animatable.Text
                  animation={animationFinished ? 'slideInLeft' : undefined}
                  duration={1000}
                  style={styles.title}>
                  Saarc
                </Animatable.Text>
                <Animatable.Text
                  animation={animationFinished ? 'slideInLeft' : undefined}
                  duration={1000}
                  style={styles.title}>
                  Cases
                </Animatable.Text>
              </Animatable.View>
              <Animatable.View
                animation={animationFinished ? 'fadeInUp' : undefined}
                delay={1000}
                duration={1000}
                style={styles.animatedContainer}>
                <Animatable.Text
                  animation={animationFinished ? 'slideInRight' : undefined}
                  duration={1000}
                  style={styles.description}>
                  Sign In to your ERP Account
                </Animatable.Text>
              </Animatable.View>
              <Animatable.View
                animation={animationFinished ? 'fadeInUp' : undefined}
                delay={2000}
                duration={1000}
                style={styles.animatedContainer}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: buttonColors[currentIndex]},
                  ]}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: horizontalScale(300),
    height: horizontalScale(300),
    borderRadius: moderateScale(20),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  animatedContainer: {
    opacity: 0,
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
    marginVertical: verticalScale(10),
  },
  description: {
    fontSize: moderateScale(16),
    color: '#666',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  button: {
    borderRadius: moderateScale(5),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(5),
    margin: horizontalScale(3),
  },
  activeDot: {
    backgroundColor: '#007aff',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(5),
    margin: horizontalScale(3),
  },
});

export default WelcomeScreen;
