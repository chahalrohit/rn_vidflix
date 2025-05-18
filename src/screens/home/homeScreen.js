import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel-v4';

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

const categoryBackColorList = [
  '#2196F3',
  '#F44336',
  '#FF9800',
  '#4CAF50',
  '#009688',
];

const categoryList = [
  {
    id: '1',
    categoryName: 'Action',
  },
  {
    id: '2',
    categoryName: 'Adventure',
  },
  {
    id: '3',
    categoryName: 'Comedy',
  },
  {
    id: '4',
    categoryName: 'Drama',
  },
  {
    id: '5',
    categoryName: 'Horror',
  },
];

const specialAndLatestMovieList = [
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

const multiplexMovieList = [
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

const bestOfKidsList = [
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

const width = Dimensions.get('window').width;

const itemWidth = Math.round(width * 0.8);

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {header()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Sizes.fixPadding * 8.0}}>
        {sliderForMoviesAndWebSeries()}
        {title({title: 'Explore by Genre'})}
        {categories()}
        {titleWithMore({title: 'Specials & Latest Movies'})}
        {specialAndLatestMovies()}
        {titleWithMore({title: 'Multiplex Movies'})}
        {muliplexMovies()}
        {titleWithMore({title: 'Popular Movies'})}
        {popularMovies()}
        {titleWithMore({title: 'Best of Kids'})}
        {bestOfKids()}
      </ScrollView>
    </View>
  );

  function bestOfKids() {
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
        data={bestOfKidsList}
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

  function muliplexMovies() {
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
        data={multiplexMovieList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function specialAndLatestMovies() {
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
        data={specialAndLatestMovieList}
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

  function categories() {
    const renderItem = ({item, index}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('Category', {category: item.categoryName})
        }
        style={{
          backgroundColor: categoryBackColorList[index],
          ...styles.categoryContentStyle,
        }}>
        <Text style={{...Fonts.whiteColor15Light}}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={categoryList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function title({title}) {
    return (
      <Text
        style={{
          ...Fonts.whiteColor20Medium,
          marginHorizontal: Sizes.fixPadding + 5.0,
          marginVertical: Sizes.fixPadding + 5.0,
        }}>
        {title}
      </Text>
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
      <View style={styles.headerStyle}>
        <Text style={{...Fonts.whiteColor20Medium}}>VidFlix</Text>
        <MaterialIcons
          name="notifications"
          size={24}
          color={Colors.whiteColor}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding,
  },
  sliderImageStyle: {
    width: itemWidth,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemsContentStyle: {
    paddingLeft: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
  },
  categoryContentStyle: {
    borderRadius: Sizes.fixPadding - 3.0,
    paddingVertical: Sizes.fixPadding - 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.fixPadding * 2.5,
    marginRight: Sizes.fixPadding + 2.0,
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
});

export default HomeScreen;
