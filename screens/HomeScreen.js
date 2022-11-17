import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';

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
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.userInfo}>
                    <Image source={require('../assets/icon.png')}
                        style={styles.userPhoto} />
                    <Text style={styles.userName}>@username</Text>
                </View>
                <TouchableOpacity style={styles.settingsBtn}>
                    <AntDesign name="setting" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#000',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userPhoto: {
        height: 50,
        width: 50,
    },
    userName: {
        marginLeft: 10,
        fontSize: 20,
    },
    settingsBtn: {
        padding: 10,
        backgroundColor: '#2d179b',
        borderRadius: 10,
    }
})

export default HomeScreen
