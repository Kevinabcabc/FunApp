import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { Container, Content, FooterTab, Button, Text ,Icon,List,ListItem} from 'native-base';
import VideoCover from '../../components/videoCover'

interface Props {
    data: any
}

export default class VideoListCom extends Component<Props> {
    constructor(props){
        super(props)
    }   


    render() {
        return (
        <>
            {
                this.props.data.map((item,index)=>{
                    return <VideoCover imgUrl={item.thumbnail} videoUrl={item.video} title={item.text} id={item.sid} key={item.sid} puper={item.header} name={item.name} passtime={item.passtime.split(' ')[0]}/>
                })
            }
        </>
        );
    }
}

