import React,{useMemo} from 'react';
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
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Provider} from 'mobx-react'
import store from './src/store'


import Index from './src/pages/index/Index'
import VideoDetail from './src/pages/videoDetail'
import NewsDetailList from './src/pages/news/NewsList'
import NewsDetail from './src/pages/news/newsDetail'
import QianFeng from './src/pages/tool/qianfeng'
import Jokers from './src/pages/joke/Jokes'
import EyePro from './src/pages/joke/EyePro'
const Stack = createStackNavigator()


interface Props {

}

interface State {
  tab: number,
  DeviceName: string
}

export default class App extends React.Component<Props,State> {
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
  }
  componentDidMount(){

    console.log(Device.modelName);
    
  }
 
  render() {


    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{ 
              headerStyle: {
                backgroundColor: '#4251AF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18
              } 
            }}
          >
              <Stack.Screen 
                name="Index" 
                component={Index}
                options={{ 
                  title: 'Fun'
                }}
              />
              <Stack.Screen 
                name="videoDetail" 
                component={VideoDetail}
                options={{ 
                  title: '视频详情'
                }}
              />
              <Stack.Screen 
                name="newsDetailList" 
                component={NewsDetailList}
                options={{ 
                  title: '实时热点'
                }}
              />
              <Stack.Screen 
                name="newsDetail" 
                component={NewsDetail}
                options={{ 
                  title: '新闻详情'
                }}
              />
               <Stack.Screen 
                name="qianfeng" 
                component={QianFeng}
                options={{ 
                  title: '千锋课堂'
                }}
              />
               <Stack.Screen 
                name="jokers" 
                component={Jokers}
                options={{ 
                  title: 'jokers'
                }}
              />
               <Stack.Screen 
                name="eyepro" 
                component={EyePro}
                options={{ 
                  title: '养眼美图'
                }}
              />
              
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
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





