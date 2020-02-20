import React, { Component } from "react";
import { Platform,StyleSheet, FlatList ,Image} from "react-native";
import {
  Container
} from "native-base";
const shivraj = require("../../../../assets/logo.png");
import {Get} from '../../../utils/http'
import NewsListItem from './newsListItem'
interface State {
  newsList: [],
  pages:number,
  freshFlat: boolean
}
interface Props {
  store: any,
  route: any
}

class NewsDetailList extends Component<Props ,State> {

    constructor(props){
        super(props)
        this.state = {
            pages: 1,
            newsList: [],
            freshFlat: false
        }
    }
  async componentDidMount(){
      let data = await Get('https://www.mxnzp.com/api/news/list',{typeId:this.props.route.params.id,page:1})
        
      this.setState({
        newsList: data.data,
      })
  }
  async onRefresh(){
    let data = await Get('https://www.mxnzp.com/api/news/list',{typeId:this.props.route.params.id,page:this.state.pages+1})
    this.setState({
        newsList: data.data,
        freshFlat: false,
      pages: this.state.pages+1
    })
  }
  render() {
    return (
      <Container style={styles.container}>
            <FlatList
                data={this.state.newsList}
                renderItem={({item})=>{
                    return <NewsListItem data={item} key={item.postTime}/>
                }}
                onRefresh = {this.onRefresh.bind(this)}
                refreshing={this.state.freshFlat}
            >

            </FlatList>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default NewsDetailList;