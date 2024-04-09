import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HouseRules = ({title, subTitle}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        gap: 10,
        flexDirection: 'row',
      }}>
      <MaterialIcons
        name="verified"
        size={20}
        color="#F44259"
        style={{top: 2}}
      />

      <View style={{gap: 5}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: responsiveFontSize(2),
            letterSpacing:0.5
          }}>
          {title}
        </Text>
        <Text
          style={{color: 'black', opacity: 0.7, width: responsiveWidth(70),lineHeight:20}}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default HouseRules;
