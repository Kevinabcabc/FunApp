import React, { Component } from "react";
import { StyleSheet ,TouchableWithoutFeedback} from 'react-native'
import {
  Container,
  Text,
  View
} from "native-base";
import { inject, observer } from 'mobx-react'
interface Props {
    store: any
}


@inject('store') @observer
class Tools extends Component<Props> {
  goOtherRouteAction(id:string){
    switch (id) {
      case 'qianfeng':
        console.log(this.props.store.navigation);
        this.props.store.navigation.push('qianfeng')
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <TouchableWithoutFeedback 
          onPress={ this.goOtherRouteAction.bind(this,'qianfeng')}
          >
          <View style={styles.qianfeng}>
              <Text style={styles.qifengGText}>点击进入千锋直播课堂</Text>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFF" ,
  },
  qianfeng: {
    height : 100,
    backgroundColor: '#ededed',
    margin: 20,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  qifengGText: {
    color: '#4551A9',
    fontSize: 20
  }
});

export default Tools;