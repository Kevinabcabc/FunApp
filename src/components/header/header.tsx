import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

interface Props {
    headerTitle: string,
    navigation?: any,
    hasBack: boolean,
}
export default class HeaderExample extends Component <Props> {
    constructor(props){
        super(props)
    }
    
    

  render() {
    return (
         <Header  style={styles.header} iosBarStyle='light-content'>
          <Left>
            {
              this.props.hasBack?<Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={styles.bottomIcon} name="arrow-back" />
            </Button>:null
            }

            
          </Left>
          <Body>
            <Title  style={styles.bottomIcon} >{this.props.headerTitle}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={styles.bottomIcon} name="home" />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F51B5',
    borderBottomColor: '#3F51B5'
  },
  bottomIcon: {
    color: 'white'
  }
});