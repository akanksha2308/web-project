import React, { Component } from 'react';

import { CarImage } from '../../Config/image.config';

export default class HomeScene extends Component {
    render() {
        return (
            <div>
                <img src={CarImage()} style={{ width: '100%', height: '400%' }} alt="Car" />
            </div>
        )
    }
}