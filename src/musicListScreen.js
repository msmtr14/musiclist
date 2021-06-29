import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppStyles as style} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getMusics} from './redux/actions/listActions';

const MusicListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const musicsData = useSelector(state => state.music);
  const data = musicsData?.music ?? [];
  useEffect(() => {
    dispatch(getMusics());
  }, []);

  const renderCard = ({item}) => (
    <Pressable
      style={style.card}
      onPress={() => navigation.navigate('MusicDetailScreen', {data: item})}>
      <FastImage
        style={style.img}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={style.name}>
        {item?.trackName} ({item?.artistName})
      </Text>
      <Text style={style.subTitle}>Track Price: ${item?.trackPrice}</Text>
      <Text style={style.subTitle}>
        Collection Price: ${item?.collectionPrice}
      </Text>
      <Text style={style.subTitle}>Collection: {item?.collectionName}</Text>
      <Text style={style.subTitle}>
        Released on: {new Date(item?.releaseDate).toDateString()}
      </Text>
    </Pressable>
  );

  const ListEmptyComponent = () => (
    <Text style={style.noData}>No data found!</Text>
  );

  return (
    <SafeAreaView style={style.body}>
      <Text style={style.title}>Music List</Text>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={item =>
          item.artistId?.toString() + item.trackId?.toString()
        }
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default MusicListScreen;
