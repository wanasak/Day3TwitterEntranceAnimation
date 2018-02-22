import React, { Component } from "react";
import { ScrollView, RefreshControl, Image } from "react-native";

import Util from "./Util";

class TwitterPost extends Component {
    constructor() {
        super();
        this.state = {
            isRefreshing: false
        };
    }

    _onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            this.setState({ isRefreshing: false });
        }, 1000);
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this._onRefresh()}
                        tintColor="#ddd"
                    />
                }
            >
                <Image
                    source={ require("./img/day3.png") }
                    style={{
                        width: Util.size.width,
                        height: Util.size.height - 110
                    }}
                />
            </ScrollView>
        );
    }
}

export default TwitterPost;
