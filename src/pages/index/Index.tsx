import React,{useMemo} from 'react';
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo';
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
import * as Device from 'expo-device';
import {StyleSheet}  from 'react-native'
import Home from '../home'
import Tools from '../tool'
import Joke from '../joke'
import News from '../news'
import {inject,observer} from 'mobx-react'
interface Props {
  navigation: any,
  store: any
}

interface State {
  tab: number,
  DeviceName: string
}

@inject('store')
@observer
export default class Index extends React.Component<Props,State> {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      DeviceName: Device.modelName
    };
  }


  toggleTab(tab:number) {
    this.setState({
      tab: tab,
    })
    switch (tab) {
      case 1:
          this.props.navigation.setOptions({ title: 'Fun应用' })
        break;
      case 2:
          this.props.navigation.setOptions({ title: '工具' })
        break;
      case 3:
        this.props.navigation.setOptions({ title: 'Joke' })
      break;
      case 4:
        this.props.navigation.setOptions({ title: '新闻' })
      break;
      default:
        break;
    }
  }
  componentDidMount(){
    this.props.store.setDeviceIfIphoneX((this.state.DeviceName.indexOf('iPhone 11')===0)||(this.state.DeviceName.indexOf('iPhone X')===0))
    this.props.store.setNavigation(this.props.navigation)
  }
 
  render() {


    return (
      <Container style={styles.appContainer}>
         <StatusBar barStyle="light-content"  />
         {/* <Provider data={this.props.navigation}> */}
            {
              this.state.tab===1?<Home/>:this.state.tab===2?<Tools/>:this.state.tab===3?<Joke/>:<News/>
            }
        {/* </Provider> */}
        <Footer style={{...styles.footer,...((this.state.DeviceName.indexOf('iPhone 11')===0)||(this.state.DeviceName.indexOf('iPhone X')===0))?{marginBottom: 20,height: 20}:{marginBottom: 0,}}}>
          <FooterTab>
            <Button
              active={this.state.tab===1}

              onPress={() => this.toggleTab(1)}
            >
              <Icon style={{...styles.footerIcon,...this.state.tab===1?{color:"#3F51B5"}:{} }} active={this.state.tab===1} name="apps" />
              <Text style={{...styles.footerText,...this.state.tab===1?{color:"#3F51B5"}:{} }}>Fun</Text>
            </Button>
            <Button vertical active={this.state.tab===2} onPress={() => this.toggleTab(2)}>
              <Icon style={{...styles.footerIcon,...this.state.tab===2?{color:"#3F51B5"}:{} }} active={this.state.tab===2} name="paper" />
              <Text style={{...styles.footerText,...this.state.tab===2?{color:"#3F51B5"}:{} }}>Tools</Text>
            </Button>
            <Button
              active={this.state.tab===3}
              onPress={() => this.toggleTab(3)}
            >
              <Icon style={{...styles.footerIcon,...this.state.tab===3?{color:"#3F51B5"}:{} }} active={this.state.tab===3} name="happy" />
              <Text style={{...styles.footerText,...this.state.tab===3?{color:"#3F51B5"}:{} }}>Joke</Text>
            </Button>
            <Button vertical active={this.state.tab===4} onPress={() => this.toggleTab(4)}>
              <Icon style={{...styles.footerIcon,...this.state.tab===4?{color:"#3F51B5"}:{} }} active={this.state.tab===4} name="paper-plane" />
              <Text style={{...styles.footerText,...this.state.tab===4?{color:"#3F51B5"}:{} }}>News</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor : '#3F51B5',

  },
  footer: {
      backgroundColor : '#3F51B5',
      
  },
  footerText: {
      color: 'white'
  },
  footerIcon: {
    color: 'white',
  }
})





