import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('screen');

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

const typesOfMoviesAndWebSeriesList = [
  {
    id: '1',
    type: 'Comedy Movie',
  },
  {
    id: '2',
    type: 'Mystery',
  },
  {
    id: '3',
    type: 'Action',
  },
  {
    id: '4',
    type: 'Latest Movie',
  },
  {
    id: '5',
    type: 'Web Series',
  },
  {
    id: '6',
    type: 'New Web Series',
  },
  {
    id: '7',
    type: 'Drama',
  },
  {
    id: '8',
    type: 'Sport',
  },
];

const specialForUserList = [
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

const SearchScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.typesOfMoviesAndWebSeriesWrapStyle}>
      <Text numberOfLines={1} style={{...Fonts.whiteColor15Light}}>
        {item.type}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{paddingBottom: Sizes.fixPadding * 7.0}}>
        <FlatList
          ListHeaderComponent={
            <>
              {searchText()}
              {searchTextField()}
            </>
          }
          ListHeaderComponentStyle={{marginBottom: Sizes.fixPadding + 10.0}}
          data={typesOfMoviesAndWebSeriesList}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            paddingLeft: Sizes.fixPadding + 5.0,
          }}
          ListFooterComponent={
            <>
              {title({title: 'Explore by Genre'})}
              {categories()}
              {title({title: 'Special for You'})}
              {userSpecials()}
            </>
          }
        />
      </View>
    </View>
  );

  function userSpecials() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push('WebSeries')}>
        <Image
          source={item.movieHookImage}
          style={styles.moviesHookImageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={specialForUserList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
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

  function searchTextField() {
    return (
      <View style={styles.searchFieldWrapStyle}>
        <MaterialIcons
          name="search"
          size={24}
          color={Colors.blackColor}
          style={{marginRight: Sizes.fixPadding + 5.0}}
        />
        <TextInput
          placeholder="Search for shows,series & movies"
          placeholderTextColor="black"
          style={{flex: 1, ...Fonts.blackColor16Medium}}
          selectionColor={Colors.primaryColor}
        />
      </View>
    );
  }

  function searchText() {
    return (
      <Text
        style={{
          ...Fonts.whiteColor30Medium,
          marginTop: Sizes.fixPadding + 5.0,
        }}>
        What'd you like to watch today?
      </Text>
    );
  }
};

const styles = StyleSheet.create({
  searchFieldWrapStyle: {
    flexDirection: 'row',
    backgroundColor: '#424242',
    borderRadius: Sizes.fixPadding * 2.5,
    paddingVertical: Sizes.fixPadding,
    alignItems: 'center',
    marginRight: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    marginTop: Sizes.fixPadding + 5.0,
  },
  categoryContentStyle: {
    borderRadius: Sizes.fixPadding - 3.0,
    paddingVertical: Sizes.fixPadding - 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.fixPadding * 2.5,
    marginRight: Sizes.fixPadding + 2.0,
  },
  listItemsContentStyle: {
    paddingBottom: Sizes.fixPadding + 5.0,
  },
  moviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  typesOfMoviesAndWebSeriesWrapStyle: {
    backgroundColor: '#424242',
    borderRadius: Sizes.fixPadding - 3.0,
    paddingVertical: Sizes.fixPadding - 3.0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.fixPadding + 7.0,
    marginRight: Sizes.fixPadding + 2.0,
    marginBottom: Sizes.fixPadding + 2.0,
    maxWidth: width / 3.45,
  },
});

export default SearchScreen;
