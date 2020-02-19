import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge
} from "native-base";

interface Props {
    navigation: any
}

interface State {
    tab1: boolean,
    tab2: boolean,
    tab3: boolean,
    tab4: boolean,
}
class BadgeFooter extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  }
  toggleTab(tab:string) {
    switch (tab) {
      case 'tab1':
        this.setState({
          tab1: true,
          tab2: false,
          tab3: false,
          tab4: false
        })
        break;
      case 'tab2':
        this.setState({
          tab1: false,
          tab2: true,
          tab3: false,
          tab4: false
        })
        break;
      case 'tab3':
        this.setState({
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false
        })
        break;
      case 'tab4':
        this.setState({
          tab1: false,
          tab2: false,
          tab3: false,
          tab4: true
        })
        break;
      default:
        break;
    }
  }
 
  render() {
    return (
      <Container style={styles.footerContainer}>
        <Footer style={styles.footer}>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab('tab1')}
            >
              <Icon style={{...styles.footerIcon,...this.state.tab1?{color:"#3F51B5"}:{} }} active={this.state.tab1} name="apps" />
              <Text style={{...styles.footerText,...this.state.tab1?{color:"#3F51B5"}:{} }}>Fun</Text>
            </Button>
            <Button vertical active={this.state.tab2} onPress={() => this.toggleTab('tab2')}>
              <Icon style={{...styles.footerIcon,...this.state.tab2?{color:"#3F51B5"}:{} }} active={this.state.tab2} name="camera" />
              <Text style={{...styles.footerText,...this.state.tab2?{color:"#3F51B5"}:{} }}>Tools</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.toggleTab('tab3')}
            >
              <Icon style={{...styles.footerIcon,...this.state.tab3?{color:"#3F51B5"}:{} }} active={this.state.tab3} name="compass" />
              <Text style={{...styles.footerText,...this.state.tab3?{color:"#3F51B5"}:{} }}>Joke</Text>
            </Button>
            <Button vertical active={this.state.tab4} onPress={() => this.toggleTab('tab4')}>
              <Icon style={{...styles.footerIcon,...this.state.tab4?{color:"#3F51B5"}:{} }} active={this.state.tab4} name="contact" />
              <Text style={{...styles.footerText,...this.state.tab4?{color:"#3F51B5"}:{} }}>News</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#FFF"
  },
  footer: {
      backgroundColor : '#3F51B5'
  },
  footerText: {
      color: 'white'
  },
  footerIcon: {
    color: 'white'
  }

});

export default BadgeFooter;