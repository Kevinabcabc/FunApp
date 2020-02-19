import React, { Component } from "react";
import { StyleSheet ,Image,  Alert} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
  View
} from "native-base";
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Consumer } from '../../utils/mycontext'
import {inject,observer} from 'mobx-react'
interface Props {
    imgUrl:string,
    videoUrl: string
    title: string,
    name: string,
    passtime: string,
    puper: string,
    // [key:string]: any
    id: string|number,
    store?: any
}

interface State {
    isPlay: boolean
}
@inject('store')
@observer
class VideoCover extends Component<Props,State> {
    constructor(props){
        super(props)
        this.state = {
            isPlay: false
        } 
    }

    fullScreenPage(){
        this.setState({
            isPlay: false
        })
        console.log(this.props.store.navigation);
        // this.props.store.navigation.setOptions({ title: this.props })
        this.props.store.navigation.navigate('videoDetail',{url:this.props.videoUrl})
    }
  render() {
    return (

        <Consumer>
        {
          (navigation)=>(
            <View style={styles.ListItem} key={this.props.id}>
            {/* <TouchableWithoutFeedback  onPress={this.openVideopage.bind(this)}> */}
                <View style={styles.itemImageBox}>
                    
                        <VideoPlayer
                            videoProps={{
                                shouldPlay: this.state.isPlay,
                                resizeMode: Video.RESIZE_MODE_CONTAIN,
                                source: {
                                    uri: this.props.videoUrl,
                                },
                            }}
                            height={210}
                            switchToLandscape={this.fullScreenPage.bind(this,navigation)}
                        />
                </View>
            {/* </TouchableWithoutFeedback> */}
                <View style={styles.ListItem}>
                    <ListItem last thumbnail>
                        <Left>
                            <Thumbnail  size={55} source={{uri:this.props.puper}} />
                        </Left>
                        <Body>
                            <Text numberOfLines={2} style={styles.listitemText}>{this.props.title}</Text>
                            <Text numberOfLines={1} style={styles.listItemNameAndTime}>
                                {this.props.name} <Icon active name="pulse" style={styles.dote} /> {this.props.passtime}
                            </Text>
                        </Body>
                    </ListItem>
                </View>
            </View>
          )
          
        }
         
      </Consumer>
        
    );
  }
}

const styles = StyleSheet.create({
    ListItem: {
    },
    itemImageBox:{
        height: 210,
        width: '100%'
    },
    ListImage : {
        height: 210,
        width: '100%',
    },
    listItemVideo:{
        width: '100%',
        height: 210
    },
    videoMask:{
        backgroundColor: 'red',
    },
    listitemText: {
        paddingBottom: 5,
        color: '#333',
        fontSize: 16
    },
    listItemNameAndTime: {
        color: '#888',
        fontSize: 12
    },
    dote: {
        color: '#888',
        fontSize: 15,
    }
})


export default VideoCover;