import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Icon,
  TouchableOpacity,
} from 'react-native';

const users = [
  {id: 1, name: 'Kim Jun Myeon'},
  {id: 2, name: 'Kim Min Seok'},
  {id: 3, name: 'Buyn Baek Hyun'},
  {id: 4, name: 'Kim Jong Dae'},
  {id: 5, name: 'Park Chan Yeol'},
];

const UserListScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {users.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      {/* <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Button
            title="Create New"
            containerViewStyle={styles.buttonStyle}></Button>
        </View>
      </View> */}
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}>
          <Icon name="plus" size={30} color="#01a699" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  rowContainer: {
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '130px',
  },
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
    elevation: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
