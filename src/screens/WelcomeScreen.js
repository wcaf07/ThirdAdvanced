import React, {Component} from 'react'
import {Text, View} from 'react-native'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4'},
    { text: 'Use to get a Job', color: '#009688'},
    { text: 'Get a map of jobs around you', color: '#03A9F4'},
]

export default class WelcomeScreen extends Component {

    onCompleteSlide = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        return(
            <View style={{flex : 1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onCompleteSlide}/>
            </View>
        )
    }
}
