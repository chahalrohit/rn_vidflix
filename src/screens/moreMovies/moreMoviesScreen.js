import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const multiPlexMoviesList = [
  {
    id: '1',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_1.jpg'),
  },
  {
    id: '2',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_2.jpg'),
  },
  {
    id: '3',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_3.jpg'),
  },
  {
    id: '4',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_4.jpg'),
  },
  {
    id: '5',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_5.jpg'),
  },
  {
    id: '6',
    movieHookImage: require('../../assets/images/special_latest_movies/special_latest_movies_6.jpg'),
  },
  {
    id: '7',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_1.jpg'),
  },
  {
    id: '8',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_2.jpg'),
  },
  {
    id: '9',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_3.jpg'),
  },
];

const {width} = Dimensions.get('screen');

const MoreMoviesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blackColor}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{flex: 1}}>
        {header()}
        {movies()}
      </View>
    </SafeAreaView>
  );

  function movies() {
    const renderItem = ({item}) => (
      <Image
        source={item.movieHookImage}
        style={styles.movieHookImageStyle}
        resizeMode="stretch"
      />
    );
    return (
      <View style={{marginHorizontal: Sizes.fixPadding + 5.0}}>
        <FlatList
          data={multiPlexMoviesList}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            paddingVertical: Sizes.fixPadding,
          }}
        />
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerConentStyle}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors.whiteColor}
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 10.0, zIndex: 1}}
        />
        <Text style={{...Fonts.whiteColor20Medium}}>Multiplex Movies</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerConentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackColor,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
  },
  movieHookImageStyle: {
    height: 150.0,
    width: width / 3.6,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 5.0,
    marginBottom: Sizes.fixPadding + 5.0,
  },
});

export default MoreMoviesScreen;
