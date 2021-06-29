import {StyleSheet} from 'react-native';

export const AppStyles = StyleSheet.create({
  body: {flex: 1},
  scroll: {},
  card: {
    padding: 10,
    paddingHorizontal: 5,
    marginBottom: 15,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {height: 1, width: 1},
    borderRadius: 5,
    width: '94%',
    alignSelf: 'center',
  },
  name: {fontSize: 16, fontWeight: '800'},
  subTitle: {fontSize: 13, marginVertical: 2},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  noData: {
    textAlign: 'center',
  },
});
