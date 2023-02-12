import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Button, Text } from 'expo-ui-kit'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient, } from 'expo-linear-gradient';

// import screen
import Dashboard from '../screens/Dashboard';
import Messages from '../screens/Messages';
import Contact from '../screens/Contact';
import Animated, { interpolate, Extrapolate, useAnimatedStyle } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Screens({ navigation }) {

    const drawerProgress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 15], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        return {
            transform: [{ scale }],
            borderRadius,
        };
    });


    return (
        <Animated.View style={[{ flex: 1, overflow: "hidden" }, animatedStyle]}>
            <Stack.Navigator
                screenOptions={{
                    headerTransparent: true,
                    title: null,
                    headerRight: () => {
                        return (
                            <Button primary padding marginHorizontal onPress={() => navigation.openDrawer()}>
                                <Text white small>MENU</Text>
                            </Button>
                        )
                    }
                }}>
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Messages' component={Messages} />
                <Stack.Screen name='Contact' component={Contact} />
            </Stack.Navigator>
        </Animated.View>
    )
}

const DrawerContent = props => {

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, }}>
            <Block>
                <Block flex={0.4} margin={20} bottom>
                    <Image source={require("../assets/pngaaa.com-5966782.png")} style={styles.image} resizeMode="center" />
                    <Text white title marginTop="2x">idan_kazam</Text>
                    <Text white size={10} marginTop>kazam11@bezeqint.net</Text>
                </Block>
                <Block>
                    <DrawerItem
                        label="Dashboard"
                        labelStyle={{ color: "white", fontSize: 15, }}
                        onPress={() => props.navigation.navigate("Dashboard")}
                        icon={() => <AntDesign name='dashboard' style={styles.icons} />}
                    />
                    <DrawerItem
                        label="Messages"
                        labelStyle={{ color: "white", fontSize: 15, }}
                        onPress={() => props.navigation.navigate("Messages")}
                        icon={() => <AntDesign name='message1' style={styles.icons} />}
                    />
                    <DrawerItem
                        label="Contact"
                        labelStyle={{ color: "white", fontSize: 15, }}
                        onPress={() => props.navigation.navigate("Contact")}
                        icon={() => <AntDesign name='contacts' style={styles.icons} />}
                    />
                </Block>
                <Block noflex marginBottom="2x">
                    <DrawerItem
                        label="Logout"
                        labelStyle={{ color: "white", fontSize: 15, }}
                        onPress={() => alert("Are you sure to logout?")}
                        icon={() => <AntDesign name='logout' style={styles.icons} />}
                    />
                </Block>
            </Block>
        </DrawerContentScrollView>
    )
}

export default () => {

    return (
        <LinearGradient style={{ flex: 1 }} colors={["red", "blue"]}>
            <Drawer.Navigator
                initialRouteName='Dashboard'
                drawerContent={props => { return <DrawerContent {...props} /> }}
                screenOptions={{
                    headerShown: false,
                    drawerType: "slide",
                    drawerPosition: 'left',
                    overlayColor: "transparent",
                    sceneContainerStyle: { backgroundColor: "transparent" },
                    inactiveTintColor: "green",
                    drawerStyle: { width: "50%", backgroundColor: "transparent" }
                }}
                activeBackgroundColor="transparent"
                activeTintColor="green"
            >
                <Drawer.Screen name="Home" >
                    {(props) => <Screens {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        alignSelf: "flex-end",
    },
    icons: {
        position: "absolute",
        right: 10,
        color: "white",
        fontSize: 20,
    }
})