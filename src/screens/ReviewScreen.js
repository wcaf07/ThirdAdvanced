import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { Button } from "react-native-elements";

export default class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : 'Review Jobs',
        headerRight : (
            <Button
                title="Settings"
                type="clear"
                color="rgba(0, 122, 255, 1)"
                onPress={() => {
                    navigation.navigate("settings");
                }}
            />
        )
    })

    render() {
        return(
            <View>
                <Text>
                ReviewScreen
                </Text>
            </View>
        )
    }
}