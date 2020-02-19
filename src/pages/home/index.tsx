import React, { Component } from 'react';
import {StyleSheet,Image, FlatList} from 'react-native'
import { Container, Content, FooterTab, Button, Text ,Icon,List,ListItem,Spinner} from 'native-base';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import VideoListCom from './videoListCom'
import {Get} from '../../utils/http'
// import {inject,observer} from 'mobx-react'
import VideoCover from '../../components/videoCover'
interface State {
    videoList: [],
    freshFlat: boolean,
    page: number
}

interface Props {

}

// @inject('store')
// @observer
export default class FooterExample extends Component<Props,State> {
  // async componentDidUpdate
  // state

  state: State = {
    videoList: [],
    freshFlat: false,
    page: 1,
    // imgurl: ''
  }
  async componentDidMount () {
    
      
      
    let data = await Get('https://api.apiopen.top/getJoke',{page:1,count:9,type:'video'})
    // console.log(data);
    this.setState({
      videoList: data.result,
      // videoList: [{title:1,data:'hello'},{title:2,data:'hihao'}],
    })
  }
  async onRefresh(navigation){
    // console.log(navigation);
    // console.log(this.props.store.setNavigation);
    let data = await Get('https://api.apiopen.top/getJoke',{page:this.state.page+1,count:9,type:'video'})
    // console.log(data);
    this.setState({
      videoList: data.result,
      freshFlat: false,
      page: ++this.state.page
      // videoList: [{title:1,data:'hello'},{title:2,data:'hihao'}],
    })
  }
  render() {
    return (
      <Container>
                <FlatList
                    data = {this.state.videoList}
                    renderItem = {({item})=><VideoCover imgUrl={item.thumbnail} videoUrl={item.video} title={item.text} id={item.sid} key={item.sid} puper={item.header} name={item.name} passtime={item.passtime.split(' ')[0]}/>}
                    onRefresh = {this.onRefresh.bind(this)}
                    refreshing={this.state.freshFlat}
                />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  homeContener: {
    backgroundColor: 'white'
  }
})

