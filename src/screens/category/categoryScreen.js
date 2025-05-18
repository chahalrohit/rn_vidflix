import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel-v4';

const width = Dimensions.get('window').width;

const itemWidth = Math.round(width * 0.8);

const SliderList = [
  {
    image: require('../../assets/images/slider/1.png'),
  },
  {
    image: require('../../assets/images/slider/2.png'),
  },
  {
    image: require('../../assets/images/slider/3.png'),
  },
  {
    image: require('../../assets/images/slider/4.png'),
  },
];

const newMoviesList = [
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
];

const hitMoviesList = [
  {
    id: '1',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_1.jpg'),
  },
  {
    id: '2',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_2.jpg'),
  },
  {
    id: '3',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_3.jpg'),
  },
  {
    id: '4',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_4.jpg'),
  },
  {
    id: '5',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_5.jpg'),
  },
  {
    id: '6',
    movieHookImage: require('../../assets/images/multiplex_movies/multiplex_movies_6.jpg'),
  },
];

const popularMovieList = [
  {
    id: '1',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_1.jpg'),
  },
  {
    id: '2',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_2.jpg'),
  },
  {
    id: '3',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_3.jpg'),
  },
  {
    id: '4',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_4.jpg'),
  },
  {
    id: '5',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_5.jpg'),
  },
  {
    id: '6',
    movieHookImage: require('../../assets/images/popular_movies/popular_movies_6.jpg'),
  },
];

const trendingMoviesList = [
  {
    id: '1',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_1.jpg'),
  },
  {
    id: '2',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_2.jpg'),
  },
  {
    id: '3',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_3.jpg'),
  },
  {
    id: '4',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_4.jpg'),
  },
  {
    id: '5',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_5.jpg'),
  },
  {
    id: '6',
    movieHookImage: require('../../assets/images/best_of_kids/best_of_kids_6.jpg'),
  },
];

const productionStudiosList = [
  {
    id: '1',
    productionStudioImage: require('../../assets/images/production_studio/studio_1.png'),
  },
  {
    id: '2',
    productionStudioImage: require('../../assets/images/production_studio/studio_2.png'),
  },
  {
    id: '3',
    productionStudioImage: require('../../assets/images/production_studio/studio_3.png'),
  },
  {
    id: '4',
    productionStudioImage: require('../../assets/images/production_studio/studio_4.png'),
  },
  {
    id: '5',
    productionStudioImage: require('../../assets/images/production_studio/studio_5.png'),
  },
];

const CategoryScreen = ({navigation, route}) => {
  const category = route.params.category;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blackColor}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{flex: 1}}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.fixPadding * 2.0}}>
          {sliderForMoviesAndWebSeries()}
          {productionStudios()}
          {titleWithMore({title: 'New Movies'})}
          {newMovies()}
          {titleWithMore({title: 'Hit Movies'})}
          {hitMovies()}
          {titleWithMore({title: 'Popular Movies'})}
          {popularMovies()}
          {titleWithMore({title: 'Trending'})}
          {trendings()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  function trendings() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <Image
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={trendingMoviesList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function popularMovies() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <Image
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={popularMovieList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function hitMovies() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <Image
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={hitMoviesList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function newMovies() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <Image
          source={item.movieHookImage}
          style={styles.allMoviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={newMoviesList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function titleWithMore({title}) {
    return (
      <View style={styles.titleWithMoreTextContentStyle}>
        <Text style={{...Fonts.whiteColor20Medium}}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('MoreMovies')}>
          <Text style={{...Fonts.primaryColor16Light}}>MORE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function productionStudios() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('MoreMovies')}
        style={{
          marginRight: Sizes.fixPadding + 2.0,
          borderRadius: Sizes.fixPadding,
        }}>
        <Image
          source={item.productionStudioImage}
          style={{height: 100.0, width: 100.0, borderRadius: Sizes.fixPadding}}
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={productionStudiosList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Sizes.fixPadding * 2.0,
          paddingBottom: Sizes.fixPadding * 2.0,
          paddingLeft: Sizes.fixPadding + 5.0,
        }}
      />
    );
  }

  function sliderForMoviesAndWebSeries() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <ImageBackground
          source={item.image}
          style={styles.sliderImageStyle}
          resizeMode="cover"
          borderRadius={Sizes.fixPadding - 5.0}></ImageBackground>
      </TouchableOpacity>
    );
    return (
      <Carousel
        data={SliderList}
        sliderWidth={width}
        itemWidth={itemWidth}
        renderItem={renderItem}
        autoplay={true}
        loop={true}
        containerCustomStyle={{marginTop: Sizes.fixPadding}}
        autoplayInterval={4000}
      />
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
          style={{position: 'absolute', left: 10.0}}
        />
        <Text style={{...Fonts.whiteColor20Medium}}>{category}</Text>
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
  sliderImageStyle: {
    width: itemWidth,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWithMoreTextContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 5.0,
    alignItems: 'center',
  },
  allMoviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  listItemsContentStyle: {
    paddingLeft: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
  },
});

export default CategoryScreen;
