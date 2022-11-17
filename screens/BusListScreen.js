import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const BusListScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.backBtn}>
                    <Ionicons name="chevron-back-outline" size={28} color="#2d179b" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.busList}>
                <View style={styles.busItem}>
                    <View style={styles.busItemLeft}>
                        <Text style={styles.busName}>Bus 1</Text>
                        <Text style={styles.busNumber}>UP 8900</Text>
                        <View style={styles.route}>
                            <Text style={styles.routeSource}>Kathmandu</Text>
                            <MaterialIcons name="compare-arrows" size={28} color="#2d179b" />
                            <Text style={styles.routeDest}>Pokhara</Text>
                        </View>
                    </View>
                    <View style={styles.busItemRight}>
                        <View style={styles.crowdBox}>
                            <Text style={styles.crowd}>56%</Text>
                        </View>
                        <Text style={styles.price}>Rs. 500</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    backBtn: {
        padding: 12,
        backgroundColor: '#e1dbff',
        borderRadius: 10,
    },
})

export default BusListScreen
