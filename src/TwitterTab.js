import React, { Component } from "react";
import { StyleSheet, View, Platform, TabBarIOS, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ScrollableTabView from "react-native-scrollable-tab-view";

import TwitterFlow from "./TwitterFlow";
import TwitterPost from "./TwitterPost";

class TwitterTab extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: "home",
            title: "Home"
        };
    }

    _changeTab(tabName) {
        this.setState({ tabName });
    }

    _updateTitle(obj) {
        const { i } = obj;
        let title = "";
        switch (i) {
            case 0:
                title = "Home";
                break;
            case 1:
                title = "Notifications";
                break;
            case 2:
                title = "Mail";
                break;
            case 3:
                title = "Person";
                break;
        }
        this.setState({ title });
    }

    render() {
        const iosTabView = (
            <TabBarIOS>
                <Icon.TabBarItem
                    title="Home"
                    iconName="ios-home-outline"
                    selectedTabName="ios-home"
                    onPress={() => this._changeTab("home")}
                    selected={this.state.selectedTab === "home"}
                >
                    <TwitterFlow />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Notifications"
                    iconName="ios-notifications-outline"
                    selectedTabName="ios-notifications"
                    onPress={() => this._changeTab("notifications")}
                    selected={this.state.selectedTab === "notifications"}
                >
                    <TwitterFlow />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Mail"
                    iconName="ios-mail-outline"
                    selectedTabName="ios-mail"
                    onPress={() => this._changeTab("mail")}
                    selected={this.state.selectedTab === "mail"}
                >
                    <TwitterFlow />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title="Person"
                    iconName="ios-person-outline"
                    selectedTabName="ios-person"
                    onPress={() => this._changeTab("person")}
                    selected={this.state.selectedTab === "person"}
                >
                    <TwitterFlow />
                </Icon.TabBarItem>
            </TabBarIOS>
        );
        const androidTabView = (
            <View>
                <View>
                    <View>
                        <Icon size={27} name="logo-twitter" color="#fff" />
                        <Text>{this.state.title}</Text>
                    </View>
                    <View>
                        <Icon size={25} name="ios-search" color="#fff" />
                        <Icon
                            size={25}
                            name="ios-create-outline"
                            color="#fff"
                        />
                    </View>
                </View>
                <ScrollableTabView onChangeTab={obj => this._updateTitle(obj)}>
                    <TwitterPost tabLabel="ios-home" />
                    <TwitterPost tabLabel="ios-notifications" />
                    <TwitterPost tabLabel="ios-mail" />
                    <TwitterPost tabLabel="ios-person" />
                </ScrollableTabView>
            </View>
        );

        return Platform.OS === "ios" ? iosTabView : androidTabView;
    }
}

const styles = StyleSheet.create({});

export default TwitterTab;
