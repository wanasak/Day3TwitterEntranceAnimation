import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

import TwitterPost from "./TwitterPost";
import Util from "./Util";

class TwitterFlow extends Component {
    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <View style={styles.navLeft}>
                        <Icon size={27} name="ios-person-add" color="#1b95e0" style={{ paddingLeft: 10 }} />
                    </View>
                    <View style={styles.navMid}>
                        <Icon name="logo-twitter" size={23} color="#1b95e0" />
                    </View>
                    <View style={styles.navRight}>
                        <Icon name="ios-search" size={24} style={{ width: 30 }} color="#1b95e0" />
                        <Icon name="ios-create-outline" size={24} style={{ width: 30 }} color="#1b95e0" />
                    </View>
                </View>
                <TwitterPost />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        paddingTop: 30,
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#ddd",
        paddingBottom: 5
    },
    navLeft: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    navMid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    navRight: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    }
})

export default TwitterFlow;
