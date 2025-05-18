import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Snackbar} from 'react-native-paper';

const {width} = Dimensions.get('screen');

const episodesList = [
  {
    id: '1',
    episodeHookImage: require('../../assets/images/episode/episode_1.jpg'),
    episodeNumber: 1,
  },
  {
    id: '2',
    episodeHookImage: require('../../assets/images/episode/episode_2.jpg'),
    episodeNumber: 2,
  },
  {
    id: '3',
    episodeHookImage: require('../../assets/images/episode/episode_3.jpg'),
    episodeNumber: 3,
  },
  {
    id: '4',
    episodeHookImage: require('../../assets/images/episode/episode_4.jpg'),
    episodeNumber: 4,
  },
];

const alsoLikeMoviesList = [
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

const WebSeriesScreen = ({navigation}) => {
  const [state, setState] = useState({
    isFavorite: false,
    showSnackBar: false,
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {isFavorite, showSnackBar} = state;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blackColor}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{flex: 1}}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.fixPadding * 2.0}}>
          {moviePosterWithPalyButton()}
          {movieInfo()}
          {dummyText()}
          {episodeTitle()}
          {episodes()}
          {youMayAlsoLikeTitle()}
          {alsoLikeMovies()}
        </ScrollView>
      </View>
      <Snackbar
        style={styles.snackBarStyle}
        visible={showSnackBar}
        onDismiss={() => updateState({showSnackBar: false})}>
        <Text style={{...Fonts.blackColor16Medium}}>
          {isFavorite ? 'Added to Watch Later' : 'Remove from Watch Later'}
        </Text>
      </Snackbar>
    </SafeAreaView>
  );

  function alsoLikeMovies() {
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
        data={alsoLikeMoviesList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listItemsContentStyle}
      />
    );
  }

  function youMayAlsoLikeTitle() {
    return (
      <View style={styles.titleWithMoreTextContentStyle}>
        <Text style={{...Fonts.whiteColor20Medium}}>You May Also Like</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('MoreMovies')}>
          <Text style={{...Fonts.primaryColor16Light}}>MORE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function episodes() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.push('ShowEpisode', {
            episode: require('../../assets/videos/video.mp4'),
            episodeNumber: 1,
          })
        }>
        <Image
          source={item.episodeHookImage}
          style={styles.episodeHookImageStyle}
          resizeMode="stretch"
        />
        <Text
          style={{...Fonts.grayColor19Medium, marginLeft: Sizes.fixPadding}}>
          S1 - E{item.episodeNumber}
        </Text>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={episodesList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Sizes.fixPadding,
          paddingLeft: Sizes.fixPadding + 5.0,
        }}
      />
    );
  }

  function episodeTitle() {
    return (
      <Text
        style={{
          ...Fonts.whiteColor20Medium,
          marginHorizontal: Sizes.fixPadding + 5.0,
        }}>
        Episodes
      </Text>
    );
  }

  function dummyText() {
    return (
      <Text
        style={{
          ...Fonts.grayColor17Medium,
          marginHorizontal: Sizes.fixPadding + 5.0,
          textAlign: 'justify',
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    );
  }

  function movieInfo() {
    return (
      <View style={styles.movieInfoContentStyle}>
        <View style={{width: width / 2.0}}>
          <Text numberOfLines={1} style={{...Fonts.whiteColor20Medium}}>
            Criminal Justice
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="download"
            size={30}
            color={Colors.whiteColor}
          />
          <MaterialIcons
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={30}
            color={Colors.whiteColor}
            onPress={() =>
              updateState({showSnackBar: true, isFavorite: !isFavorite})
            }
            style={{marginHorizontal: Sizes.fixPadding + 5.0}}
          />
          <View style={styles.ratingOuterContentStyle}>
            <View style={styles.ratingInnerContentStyle}>
              <Text style={{...Fonts.blackColor16Regular, marginRight: 1.0}}>
                4.5
              </Text>
              <MaterialIcons name="star" size={15} color="black" />
            </View>
          </View>
        </View>
      </View>
    );
  }

  function moviePosterWithPalyButton() {
    return (
      <View style={{height: 430.0}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/special_latest_movies/special_latest_movies_5.jpg')}
            style={styles.moviePosterImageStyle}
            resizeMode="stretch"
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              navigation.push('ShowEpisode', {
                episode: require('../../assets/videos/video.mp4'),
                episodeNumber: 1,
              })
            }
            style={styles.playButtonStyle}>
            <MaterialIcons
              name="play-arrow"
              size={30}
              color={Colors.whiteColor}
            />
          </TouchableOpacity>
        </View>
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
          onPress={() => navigation.pop()}
          style={{position: 'absolute', left: 10.0}}
        />
        <Text style={{...Fonts.whiteColor20Medium}}>Web Series</Text>
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
  playButtonStyle: {
    position: 'absolute',
    bottom: -30.0,
    backgroundColor: 'red',
    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  episodeHookImageStyle: {
    height: 140.0,
    width: 200.0,
    borderRadius: Sizes.fixPadding - 3.0,
    marginRight: Sizes.fixPadding + 5.0,
  },
  movieInfoContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 10.0,
  },
  ratingOuterContentStyle: {
    height: 47.0,
    width: 47.0,
    borderRadius: 23.5,
    borderColor: Colors.whiteColor,
    borderWidth: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingInnerContentStyle: {
    height: 39.5,
    width: 39.5,
    borderRadius: 19.7,
    backgroundColor: Colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  moviePosterImageStyle: {
    height: 400.0,
    width: width - 40,
    alignSelf: 'center',
    borderRadius: Sizes.fixPadding - 5.0,
  },
  titleWithMoreTextContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding + 5.0,
    alignItems: 'center',
  },
  moviesHookImageStyle: {
    height: 140.0,
    width: 110.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 2.0,
  },
  listItemsContentStyle: {
    paddingLeft: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
  },
  snackBarStyle: {
    position: 'absolute',
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: Colors.whiteColor,
  },
});

export default WebSeriesScreen;
