import React, { Component } from "react";
import { StyleSheet ,TouchableWithoutFeedback, Image,TextInput} from 'react-native'
import {
  Container,
  Text,
  View
  
} from "native-base";
import { inject, observer } from 'mobx-react'
interface Props {
    store?: any
}
import {Get} from '../../utils/http'


interface State {
  verifyCode: string,
  verifyCodeImgUrl: string,
  inputVal: string
}

@inject('store') @observer
class Joke extends Component<Props,State> {

  constructor(props){
    super(props)
    this.state={
      verifyCode: '',
      verifyCodeImgUrl: '',
      inputVal: ''
    }
  }
  async goOtherRouteAction(pic?:string){
    if(this.state.inputVal===this.state.verifyCode){
      if(pic==='pic'){
        this.props.store.navigation.push('eyepro')
        return
      }
      this.props.store.navigation.push('jokers')
    }else{
      let data = await Get('https://www.mxnzp.com/api/verifycode/code?len=5&type=0')
      this.setState({
        verifyCodeImgUrl: data.data.verifyCodeImgUrl,
        verifyCode: data.data.verifyCode
      })
      }
  }
  async componentDidMount(){
    let data = await Get('https://www.mxnzp.com/api/verifycode/code?len=5&type=0')
    this.setState({
      verifyCodeImgUrl: data.data.verifyCodeImgUrl,
      verifyCode: data.data.verifyCode
    })
  }
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.imgWraper}>
          {
            this.state.verifyCodeImgUrl?<Image source={{uri: this.state.verifyCodeImgUrl}} style={styles.image}></Image>:null

          }
          <TextInput
            numberOfLines={1}
            onChangeText={text=>this.setState({inputVal: text})}
            value={this.state.inputVal}
            placeholder='输入验证码'
            style={styles.input}
          />
        </View>
        <TouchableWithoutFeedback 
          onPress={ this.goOtherRouteAction.bind(this)}
          >
          <View style={styles.qianfeng}>
              <Text style={styles.qifengGText}>验证获取10条笑话</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback 
          onPress={ this.goOtherRouteAction.bind(this,'pic')}
          >
          <View style={styles.qianfeng}>
              <Text style={styles.qifengGText}>验证获取10张养眼美图</Text>
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
    height : 60,
    backgroundColor: '#ededed',
    margin: 20,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  qifengGText: {
    color: '#4551A9',
    fontSize: 20
  },
  image: {
    height: 130,
    width: 350,
  },
  imgWraper: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  input: {
    // borderWidth: 2,
    // borderColor: '#ddd',
    height: 35,
    lineHeight: 30,
    fontSize: 30,
    backgroundColor: '#eee',
    marginTop: 20,
    width: 350
  }
});

export default Joke;