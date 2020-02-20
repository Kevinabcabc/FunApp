import React, { Component } from "react";
import { Platform,StyleSheet ,Image} from "react-native"; 
import { WebView } from 'react-native-webview'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Left,
    Right,
    Body
  } from "native-base";
import {Get} from '../../../utils/http'

interface Props {
  route?: any
}

interface State {
    eyelist: []
}
class EyePro extends Component<Props ,State> {
  constructor(props) {
    super(props);
    this.state = {
      eyelist : []
    }
  }
  async componentDidMount () {
    
    let data = await Get('https://www.mxnzp.com/api/image/girl/list/random')

    this.setState({
      eyelist: data.data
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        {/* <Text>{this.state.eyelist[0]}</Text> */}
        <Content>
          <List>
            {this.state.eyelist.length!==0?this.state.eyelist.map((data, i) => (
              // <Text key={i}>{data.imageUrl}</Text>
              <Image key={i}source={{uri:data.imageUrl}}  style={styles.image} />
            )):null}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  image: {
    height: 400,
    width: '100%'
  }
});

export default EyePro;