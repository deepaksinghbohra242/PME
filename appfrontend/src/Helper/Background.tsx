import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require('../assest/back.jpg')} style={{ height: '100%', width: '100%' }}>
        <View style={{ position: 'absolute' }}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Background;
