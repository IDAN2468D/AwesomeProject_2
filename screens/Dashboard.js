import React from 'react';
import { StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';

const Dashboard = ({ style }) => {
  return (
    <Block
      color="#88B04B"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <StatusBar />
      <Text h2 white center>
        New video comming soon
      </Text>
    </Block>
  );
};


export default Dashboard