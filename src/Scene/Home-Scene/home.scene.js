import React, { Component } from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import './home.scene.css';
import HomeComponent from '../../Component/Home-Component/home.component';

export default class HomeScene extends Component {
    render() {
        return (
            <Tabs forceRenderTabPanel defaultIndex={1}>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Booking</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Upcoming</Tab>
                            <Tab>Active</Tab>
                            <Tab>Completed</Tab>
                            <Tab>Cancelled</Tab>
                        </TabList>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab>Upcoming</Tab>
                            <Tab>Active</Tab>
                            <Tab>Completed</Tab>
                            <Tab>Cancelled</Tab>
                        </TabList>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        )
    }
}