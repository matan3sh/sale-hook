import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Mr. Incredible (Blue Suit)',
    price: 1580,
    image: require('../assets/mr.incredible.jpg')
  },
  {
    id: 2,
    title: 'T-Bone',
    price: 170,
    image: require('../assets/T-Bone.jpg')
  }
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});
