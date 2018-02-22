import React, { Component } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import Util from "./Util";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component {
    static propTypes = {
        hide: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            transformAnim: new Animated.Value(1),
            opacityAnim: new Animated.Value(1)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.transformAnim, {
            toValue: 50,
            duration: 1200,
            delay: 2000,
            easing: Easing.elastic(2)
        }).start();

        Animated.timing(this.state.opacityAnim, {
            toValue: 0,
            duration: 800,
            delay: 2200,
            easing: Easing.elastic(1)
        }).start();

        setTimeout(() => {
            this.props.hide();
        }, 3300);
    }

    render() {
        return (
            <Animated.View
                style={[styles.entrance, { opacity: this.state.opacityAnim }]}
            >
                <AnimatedIcon
                    size={60}
                    style={[
                        styles.twitter,
                        { transform: [{ scale: this.state.transformAnim }] }
                    ]}
                    name="logo-twitter"
                />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    entrance: {
        position: "absolute",
        height: Util.size.height,
        width: Util.size.width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1b95e0"
    },
    twitter: {
        color: "#fff"
    }
});

export default Entrance;
