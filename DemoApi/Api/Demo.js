import React ,{Component} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

export default  class DemoApi extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      mssv: '',
      nhhk: '',
      error: '',
    };
  };

  componentDidMount(){
    fetch('http://edusoft.net.vn:8080/TestAPI/aq/lichthisv/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mssv:this.state.mssv,
      nhhk:this.state.nhhk,
      })
  }).then((respone) => respone.json())
  .then((json) => {
    this.state({data: json});
    })
  .catch(function(error){
    console.log(
      'There has been a problem with your fetch operation:' + error.message,
    );
    throw error;
    })
  }
  render() {
    const { data, isLoading } = this.state;
  return(
    <View>
      <Text>Demo API</Text>
      {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={this.state.data}
              keyExtractor={( index) => index.toString()}
              renderItem={(item) => {
                return (
                  <View>
                    <Text>{item.ma_mon_hoc}</Text>
                    <Text>{item.ten_mon_hoc}</Text>
                    <Text>{item.ma_phong}</Text>
                    <Text>{item.ten_phong}</Text>
                    <Text>{item.gio_bat_dau}</Text>
                    <Text>{item.so_phut}</Text>
                    <Text>{item.tiet_bat_dau}</Text>
                    <Text>{item.so_tiet}</Text>
                    <Text>{item.hinh_thuc}</Text>
                    <Text>{item.to_thi}</Text>
                    <Text>{item.nhom_thi}</Text>
                    <Text>{item.ngay_thi}</Text>
                  </View>
                );
              }}
            />
          )}
      </View>
    );
  };
}
