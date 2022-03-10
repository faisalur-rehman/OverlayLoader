import React from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';

const OverlayLoader = ({isLoading}) => {
  return (
    {(isLoading) && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green" />
        </View>
    )}
  )
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88',
  },
})
