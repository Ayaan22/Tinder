import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import HouseRules from '../../components/Welcome/HouseRules';
import CustomButton from '../../components/Button/CustomButton';

const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* ///First Container */}
      <View style={styles.firstContainer}>
        <Text style={styles.title}>Welcome to Tinder</Text>
        <Text style={styles.subTitle}>Please follow the house rules</Text>
      </View>

      {/* ///Second Container */}

      <View style={{gap: 15}}>
        <HouseRules
          title="Be yourself"
          subTitle="Make sure your photos,age and bio are true to who you are"
        />
        <HouseRules
          title="Stay safe"
          subTitle="Make sure your photos,age and bio are true to who you are"
        />
        <HouseRules
          title="Play it cool"
          subTitle="Make sure your photos,age and bio are true to who you are"
        />
        <HouseRules
          title="Be proactive"
          subTitle="Make sure your photos,age and bio are true to who you are"
        />
      </View>
      {/* ///Third Container */}
      <View>
        <CustomButton title="I Agree" onPress={() => console.log('clicked')} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  firstContainer: {
    alignItems: 'center',
    gap: 5,
    marginTop: responsiveHeight(5),
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    opacity: 0.7,
  },
});
