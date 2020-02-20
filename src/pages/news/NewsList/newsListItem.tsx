import React, { Component } from "react";
import { Platform,StyleSheet, FlatList ,Image, TouchableWithoutFeedback} from "react-native";
import {
  View,
  Text
} from "native-base";
const shivraj = require("../../../../assets/news.jpeg");
import {Get} from '../../../utils/http'
import { observer, inject } from 'mobx-react'



interface Props {
    store? : any,
    data?: any
}

@inject('store') @observer
class NewsListItem extends Component<Props> {

componentDidMount(){
    
}
ToNewsDetail(){
    if(this.props.data.videoList){
        this.props.store.navigation.navigate('videoDetail',{url: this.props.data.videoList[0]})
    }else {
        this.props.store.navigation.navigate('newsDetail',{newsId: this.props.data.newsId})
    }
}

  render() {
      const data = this.props.data;
      
    return (
    <TouchableWithoutFeedback  key={data.postTime} onPress={this.ToNewsDetail.bind(this)}>
        <View  key={data.postTime}  style={styles.container}>
            <Image style={styles.img} source={{uri: data.imgList?data.imgList[0]:shivraj}}></Image>
            <View style={styles.textWraper}>
                <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                <Text style={styles.time} numberOfLines={1} note>{data.postTime}</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#eee",
      flexDirection: 'row',
      height: 100,
      width: '100%',
      marginTop: 10,
      alignItems: 'center',
      color: '#333'
    },
    textWraper: {
        paddingLeft: 15,
        paddingRight: 15
    },
    img: {
        height: 100,
        width: 130
    },
    time: {
        marginTop: 10
    },
    title: {
        width: 220,
        lineHeight: 20,
        fontSize: 15
    }
  });


export default NewsListItem;