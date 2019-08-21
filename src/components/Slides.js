import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

    renderSlides = () => {
        return this.props.data.map((item, index) => {
            return (
                <View key={index} style={[styles.slideView, { backgroundColor: item.color}]}>
                    <Text style={styles.textSlide}>{item.text}</Text>
                    {index == this.props.data.length -1 &&
                        <Button
                            title="I'm ready"
                            raised
                            containerStyle={styles.buttonStyle}
                            onPress={this.props.onComplete}/>
                    }
                </View>
            )
        })
    }

    render() {
        return(
            <ScrollView
                horizontal
                style={{flex: 1}}
                pagingEnabled>
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textSlide : {
        fontSize: 30,
        color: 'white'
    },
    slideView : {
        flex : 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        marginTop: 15
    }
})