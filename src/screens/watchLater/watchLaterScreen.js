import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Snackbar} from 'react-native-paper';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const watchLaterData = [
  {
    key: '1',
    movieHookImage: require('../../assets/images/slider/4.png'),
    movieName: 'Pirates of the Caribbean',
  },
  {
    key: '2',
    movieHookImage: require('../../assets/images/slider/3.png'),
    movieName: 'Frozen',
  },
  {
    key: '3',
    movieHookImage: require('../../assets/images/slider/2.png'),
    movieName: 'The Lion King',
  },
  {
    key: '4',
    movieHookImage: require('../../assets/images/slider/1.png'),
    movieName: 'Maleficent',
  },
];

const rowSwipeAnimatedValues = {};

Array(watchLaterData.length + 1)
  .fill('')
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });

const WatchLaterScreen = ({navigation}) => {
  const [showSnackBar, setShowSnackBar] = useState(false);

  const [listData, setListData] = useState(watchLaterData);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setShowSnackBar(true);
    setListData(newData);
  };

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = data => (
    <TouchableHighlight
      style={{backgroundColor: Colors.blackColor}}
      activeOpacity={0.9}>
      <ImageBackground
        source={data.item.movieHookImage}
        style={styles.movieHookImageStyle}
        borderRadius={Sizes.fixPadding * 2.0}>
        <View style={styles.moviePosterContentStytle}>
          <Text style={{...Fonts.whiteColor20Medium}}>
            {data.item.movieName}
          </Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={{alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        style={styles.backDeleteContinerStyle}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[data.item.key].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <MaterialIcons
            name="delete"
            size={24}
            color={Colors.whiteColor}
            style={{alignSelf: 'center'}}
          />
          <Text style={{...Fonts.whiteColor16Medium}}>Delete</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {header()}
      {listData.length == 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="heart-broken"
            size={70}
            color="#9E9E9E"
          />
          <Text
            style={{
              ...Fonts.grayColor20Bold,
              marginTop: Sizes.fixPadding * 2.0,
            }}>
            No Item in Watch Later
          </Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-100}
            onSwipeValueChange={onSwipeValueChange}
            contentContainerStyle={{
              paddingTop: Sizes.fixPadding * 2.0,
              paddingBottom: Sizes.fixPadding * 8.0,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      <Snackbar
        style={styles.snackBarStyle}
        visible={showSnackBar}
        onDismiss={() => setShowSnackBar(false)}>
        <Text style={{...Fonts.blackColor16Medium}}>Item Removed</Text>
      </Snackbar>
    </View>
  );

  function header() {
    return (
      <View style={styles.headerConentStyle}>
        <Text style={{...Fonts.whiteColor20Medium}}>Watch Later</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerConentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackColor,
    paddingTop: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
  },
  snackBarStyle: {
    bottom: 60.0,
    position: 'absolute',
    left: -10.0,
    right: -10.0,
    backgroundColor: Colors.whiteColor,
  },
  backDeleteContinerStyle: {
    alignItems: 'center',
    bottom: 26.5,
    justifyContent: 'center',
    position: 'absolute',
    top: 0.0,
    width: 100,
    backgroundColor: 'red',
    right: 0,
  },
  moviePosterContentStytle: {
    position: 'absolute',
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
    paddingVertical: Sizes.fixPadding - 5.0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
    borderBottomLeftRadius: Sizes.fixPadding * 2.0,
    borderBottomRightRadius: Sizes.fixPadding * 2.0,
  },
  movieHookImageStyle: {
    height: 170.0,
    marginHorizontal: Sizes.fixPadding + 5.0,
    marginBottom: Sizes.fixPadding * 2.5,
  },
});

export default WatchLaterScreen;
