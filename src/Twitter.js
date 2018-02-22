import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Platform, StyleSheet } from "react-native";

import Entrance from "./Entrance";
import TwitterTab from "./TwitterTab";
import Util from "./Util";

class Twitter extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
    }

    _hideEntrance() {
        this.setState({ show: false });
    }

    render() {
        let entrance = this.state.show ? <Entrance hide={() => this._hideEntrance()} /> : <View />;

        return (
            <View style={styles.twitterContainer}>
                <TwitterTab />
                {entrance}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    twitterContainer: {
        width: Util.size.width,
        height: Util.size.height
    }
});

export default Twitter;
