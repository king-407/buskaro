import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';

const BusBoardingScreen = () => {
    const nav = useNavigation();

    return (
        <View>
            <Text>BusBoardingScreen</Text>
        </View>
    )
}

export default BusBoardingScreen
