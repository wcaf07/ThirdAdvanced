import React, {Component} from 'react'
import {Text, View} from 'react-native'
import _ from 'loadash'
import {AppLoading} from 'expo'
import {AsyncStorage} from 'react-native'

import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4'},
    { text: 'Use to get a Job', color: '#009688'},
    { text: 'Get a map of jobs around you', color: '#03A9F4'},
]

export default class WelcomeScreen extends Component {

    state = { token : null}

    componentDidMount = async() => {
        let token = AsyncStorage.getItem('fb_login');
        if (token) {
            this.setState({ token : token})
            this.props.navigation.navigate('map')
        } else {
            this.setState({ token : false})
        }
    }

    onCompleteSlide = () => {
        this.props.navigation.navigate('auth')
    }

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading/>
        }
        return(
            <View style={{flex : 1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onCompleteSlide}/>
            </View>
        )
    }
}
