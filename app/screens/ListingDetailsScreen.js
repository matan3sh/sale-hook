import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/mr.incredible.jpg')}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Mr. Incredible (Blue Suit)</AppText>
        <AppText style={styles.price}>$1580</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/portrait.png')}
            title='Matan Shaviro'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
});
