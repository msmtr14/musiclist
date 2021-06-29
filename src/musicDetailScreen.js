import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppStyles as style} from './styles';

const MusicDetailScreen = ({route}) => {
  console.log(data);
  const [data, setData] = useState(null);
  useEffect(() => {
    //route.params.name
    setData(route.params?.data);
  }, [route.params?.data]);
  console.log(data?.previewUrl);

  const renderCard = (item, prefix) => (
    <View style={{marginBottom: 10}}>
      {/*
      <Text style={style.name}>
        {item?.trackName} ({item?.artistName})
      </Text>
      <Text style={style.subTitle}>Track Price: ${item?.trackPrice}</Text>
      <Text style={style.subTitle}>
        Collection Price: ${item?.collectionPrice}
      </Text>
      <Text style={style.subTitle}>Collection: {item?.collectionName}</Text> */}
      <Text style={{}}>
        {item}: {prefix || ' '}
        <Text style={{fontSize: 15, fontWeight: '500'}}>{data[item]}</Text>
      </Text>
    </View>
  );

  const ListEmptyComponent = () => <Text>No data found!</Text>;

  if (!data) {
    return <ListEmptyComponent />;
  }

  return (
    <SafeAreaView style={style.body}>
      <View style={{width: '100%', paddingHorizontal: '2%'}}>
        <ScrollView>
          <FastImage
            style={{...style.img, marginBottom: 30}}
            source={{
              uri: data?.artworkUrl100,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          {/* <FlatList
          data={keys}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.toString()}
          ListEmptyComponent={ListEmptyComponent}
        /> */}
          {renderCard('artistId')}
          {renderCard('collectionId')}
          {renderCard('trackId')}
          {renderCard('artistName')}
          {renderCard('collectionName')}
          {renderCard('trackName')}
          {renderCard('collectionCensoredName')}
          {renderCard('trackCensoredName')}
          {renderCard('collectionPrice', '$')}
          {renderCard('trackPrice', '$')}
          <Text>release on: {new Date(data?.releaseDate).toDateString()}</Text>
          {renderCard('discCount')}
          {renderCard('discNumber')}
          {renderCard('trackCount')}
          {renderCard('trackNumber')}
          {renderCard('trackTimeMillis')}
          {renderCard('country')}
          {renderCard('primaryGenreName')}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MusicDetailScreen;
