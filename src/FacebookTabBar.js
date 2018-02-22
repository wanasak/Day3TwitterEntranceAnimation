import React, { Component } from "react";
import PropTypes from "prop-types";

class FacebookTabBar extends Component {
    tabIcons = [];

    static propTypes = {
        gotoPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array
    };

    componentDidMount() {
        
    }

    render() {

    }
}

export default FacebookTabBar;
