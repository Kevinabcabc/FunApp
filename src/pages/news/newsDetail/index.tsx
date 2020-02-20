import React, { Component } from "react";
import { Platform,StyleSheet } from "react-native"; 
import { WebView } from 'react-native-webview'
import {
  Container,
  Text,
} from "native-base";
import {Get} from '../../../utils/http'

interface Props {
  route: any
}

interface State {
    content: string
}
class NewsDetail extends Component<Props ,State> {
  constructor(props) {
    super(props);
    this.state = {
        content : ''
    }
  }
  async componentDidMount () {
    let data = await Get('https://www.mxnzp.com/api/news/details',{newsId:this.props.route.params.newsId})


    let content = data.data.content
    
    if(data.data.images){
        data.data.images.forEach((item,index)=>{
            content = content.replace(item.position,`<img width="100%" height="520" src="${item.imgSrc}" />`)
        })
    }

    
    content = `<div style="font-size:30px">${content}</div>`
    this.setState({
        content: content
    })
    
    // data = data.data.filter((item,index)=>{return item.typeId!==518 && item.typeId!==516 && item.typeId!==521})
    // this.setState({
    //   videoList: data,
    //   // videoList: [{title:1,data:'hello'},{title:2,data:'hihao'}],
    // })
  }
//   goDetailList(id,name){
//     this.props.store.navigation.navigate('newsDetailList',{id,name})
//   }
  render() {
    return (
      <Container style={styles.container}>
        <WebView
            originWhitelist={['*']}
            source={{ html: this.state.content }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default NewsDetail;