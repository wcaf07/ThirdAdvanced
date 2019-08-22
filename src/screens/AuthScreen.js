import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('main')
        }
    }

    render() {
        return(
            <View>
                <Text>
                AuthScreen
                </Text>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return { token : state.auth.token}
}

export default connect(mapStateToProps, actions) (AuthScreen);