import React, { Component } from "react";
import { Platform,StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator
} from "native-base";
import {Get} from '../../utils/http'
import { observer ,inject } from 'mobx-react'

interface State {
  videoList: []
}
interface Props {
  store: any
}

@inject('store') @observer
class NHListIcon extends Component<Props ,State> {
  constructor(props) {
    super(props);
    this.state = {
      videoList: []
    };
  }

  async componentDidMount () {
    let data = await Get('https://www.mxnzp.com/api/news/types')
    console.log(data.data);
    data = data.data.filter((item,index)=>{return item.typeId!==518 && item.typeId!==516 && item.typeId!==521})
    this.setState({
      videoList: data,
      // videoList: [{title:1,data:'hello'},{title:2,data:'hihao'}],
    })
  }
  goDetailList(id,name){
    this.props.store.navigation.navigate('newsDetailList',{id,name})
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          
          {
            this.state.videoList.map(({typeId,typeName})=>{
              return (
                <ListItem icon style={styles.ListItem} key={typeId} onPress={this.goDetailList.bind(this,typeId,typeName)}>
                  <Left>
                    <Button style={{ backgroundColor: "#FD3C2D" }}>
                      <Icon active name="paper" />
                    </Button>
                  </Left>
                  <Body>
                    <Text style={{fontSize:18,color: '#333',paddingLeft: 15}}>{typeName}</Text>
                  </Body>
                  <Right>
                    {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
                  </Right>
                </ListItem>
              )
            })
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee"
  },
  // ListItem: {
  //   height: 50
  // }
});

export default NHListIcon;