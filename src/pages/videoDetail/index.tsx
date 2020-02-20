import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import { observer,inject } from 'mobx-react'
// import store from '../../store'
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
  View
} from "native-base";
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
interface Props {
    route: any,
    navigation: any,
    store: any
}
@inject('store') @observer
class NHListDivider extends Component<Props> {

  render() {
    return (
      <Container style={styles.container}>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: this.props.route.params.url,
                    },
                    useNativeControls: false
                    
                }}
                height={ this.props.store.getDevideIfIphoneX()?800:600}
                switchToLandscape={()=>{
                    this.props.navigation.goBack()
                }}
                inFullscreen={true}
            />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  },
});

export default NHListDivider;