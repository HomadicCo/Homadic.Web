import React from 'react';
import { icons } from '../../Images/Images';

class IconsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWifi() {
        let { listing } = this.props;

        switch (listing.wifi.type) {
            case 'free':
                return (<img src={icons.wifiStrong} />);
            case 'paid':
                return (<img src={icons.wifi} />);
            case 'canInstall':
                return (<img src={icons.wifi} />);
            case 'none':
                return (<img src={icons.wifiNone} />);
        }
    }

    renderKitchen() {
        let { listing } = this.props;

        switch (listing.amenities.kitchen) {
            case 'included':
                return (<img src={icons.kitchen} />);
            case 'shared':
                return (<img src={icons.kitchen} />);
            case 'none':
                return undefined;
        }
    }

    renderLaundry() {
        let { listing } = this.props;

        switch (listing.amenities.laundry) {
            case 'included':
                return (<img src={icons.laundry} />);
            case 'shared':
                return (<img src={icons.laundry} />);
            case 'none':
                return undefined;
        }
    }

    renderAC() {
        let { listing } = this.props;

        return (listing.amenities.air_conditioning ? <img src={icons.ac} /> : undefined)
    }

    renderGym() {
        let { listing } = this.props;

        return (listing.amenities.gym ? <img src={icons.gym} /> : undefined)
    }

    renderPool() {
        let { listing } = this.props;

        return (listing.amenities.pool ? <img src={icons.pool} /> : undefined)
    }

    render() {
        let { className } = this.props;

        return (
            <p className={'icons ' + className}>
                {this.renderWifi()}
                {this.renderAC()}
                {this.renderLaundry()}
                {this.renderKitchen()}
                {this.renderGym()}
                {this.renderPool()}
            </p>
        )
    }
}

export default IconsBar;
