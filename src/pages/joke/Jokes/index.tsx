import React, { Component } from "react";
import { Platform,StyleSheet } from "react-native"; 
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
    jokerlist: []
}
class Jokers extends Component<Props ,State> {
  constructor(props) {
    super(props);
    this.state = {
        jokerlist : []
    }
  }
  async componentDidMount () {
console.log(11111111111);

    let data = await Get('https://www.mxnzp.com/api/jokes/list',{page:1})
    console.log(data.data.list);

    this.setState({
        jokerlist: data.data.list
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {this.state.jokerlist.length!==0?this.state.jokerlist.map((data, i) => (
              <ListItem style={styles.listItem}>
                  <Text style={styles.listItemtext} >{data.content}</Text>
              </ListItem>
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
  listItem: {
    //   backgroundColor: 'red'
    marginBottom: 5
  },
  listItemtext:  {
    fontSize: 20
  }
});

export default Jokers;