import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import {
  Container,
} from "native-base";
interface Props {
    navigation: any
}

class QianFeng extends Component<Props> {
  render() {
    return (
      <Container style={styles.container}>

        <WebView
          source={{uri:'http://nz.1000phone.com/livingroom?id=49'}}
          style={{
            width:'100%',
            height: '100%'
          }}
        >

        </WebView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default QianFeng;