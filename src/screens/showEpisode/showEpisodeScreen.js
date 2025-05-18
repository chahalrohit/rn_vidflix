import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';

const {width} = Dimensions.get('screen');

const episodesList = [
  {
    id: '2',
    episodeHookImage: require('../../assets/images/episode/episode_2.jpg'),
    episodeNumber: 2,
    episode: require('../../assets/videos/video.mp4'),
  },
  {
    id: '3',
    episodeHookImage: require('../../assets/images/episode/episode_3.jpg'),
    episodeNumber: 3,
    episode: require('../../assets/videos/video.mp4'),
  },
  {
    id: '4',
    episodeHookImage: require('../../assets/images/episode/episode_4.jpg'),
    episodeNumber: 4,
    episode: require('../../assets/videos/video.mp4'),
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

const Episode = ({episode}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <View style={styles.videoContainerStyle}>
      <Video
        source={episode}
        ref={videoRef}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={!isPlaying}
        controls // shows native playback controls
        onEnd={() => setIsPlaying(false)}
        onError={e => console.error('Video error:', e)}
      />
      {!isPlaying && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setIsPlaying(true)}
          style={styles.button}>
          <MaterialIcons name="play-arrow" size={30} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const ShowEpisodeScreen = ({navigation, route}) => {
  const episode = route.params.episode;
  const episodeNumber = route.params.episodeNumber;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.blackColor}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{flex: 1}}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.fixPadding * 2.0}}>
          <Episode episode={episode} />
          {videoInfo()}
          {moreEpisodesInfo()}
          {youMayAlsoLikeInfo()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  function youMayAlsoLikeInfo() {
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
      <View>
        <View style={styles.titleWithMoreTextContentStyle}>
          <Text style={{...Fonts.whiteColor20Medium}}>You May Also Like</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('MoreMovies')}>
            <Text style={{...Fonts.primaryColor16Light}}>MORE</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={alsoLikeMoviesList}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: Sizes.fixPadding + 5.0,
            paddingBottom: Sizes.fixPadding + 5.0,
          }}
        />
      </View>
    );
  }

  function moreEpisodesInfo() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.push('ShowEpisode', {
            episode: item.episode,
            episodeNumber: item.episodeNumber,
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
      <View>
        <Text
          style={{
            ...Fonts.whiteColor20Medium,
            marginHorizontal: Sizes.fixPadding + 5.0,
            marginBottom: Sizes.fixPadding - 5.0,
          }}>
          More Episodes
        </Text>
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
      </View>
    );
  }

  function videoInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding + 5.0,
          marginVertical: Sizes.fixPadding * 2.0,
        }}>
        <Text style={{...Fonts.whiteColor20Medium}}>Criminal Justice</Text>
        <Text style={{...Fonts.grayColor19Medium}}>S1 - E{episodeNumber}</Text>
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
        <Text style={{...Fonts.whiteColor20Medium}}>Criminal Justice</Text>
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
  videoContainerStyle: {
    backgroundColor: 'black',
  },
  video: {
    alignSelf: 'center',
    width: width,
    height: 210,
  },
  button: {
    position: 'absolute',
    backgroundColor: Colors.whiteColor,
    left: width / 2.3,
    top: 70.0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
  },
  episodeHookImageStyle: {
    height: 140.0,
    width: 200.0,
    borderRadius: Sizes.fixPadding - 3.0,
    marginRight: Sizes.fixPadding + 5.0,
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
});

export default ShowEpisodeScreen;
