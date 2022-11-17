import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            // headerTitle: 'Home',
            // headerTitleAlign: 'center',
            headerShown: false,
        })
    }, [nav])

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen
