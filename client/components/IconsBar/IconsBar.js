import React from 'react';
import FontAwesome from 'react-fontawesome';
import { icons } from '../../Images/Images';

class IconsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWifi() {
        let { home } = this.props;

        switch (home.wifi.type) {
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
        let { home } = this.props;

        switch (home.amenities.kitchen) {
            case 'included':
                return (<img src={icons.kitchen} />);
            case 'shared':
                return (<img src={icons.kitchen} />);
            case 'none':
                return undefined;
        }
    }

    renderLaundry() {
        let { home } = this.props;

        switch (home.amenities.laundry) {
            case 'included':
                return (<img src={icons.laundry} />);
            case 'shared':
                return (<img src={icons.laundry} />);
            case 'none':
                return undefined;
        }
    }

    renderAC() {
        let { home } = this.props;

        return (home.amenities.air_conditioning ? <img src={icons.ac} /> : undefined)
    }

    renderGym() {
        let { home } = this.props;

        return (home.amenities.gym ? <img src={icons.gym} /> : undefined)
    }

    renderPool() {
        let { home } = this.props;

        return (home.amenities.pool ? <img src={icons.pool} /> : undefined)
    }

    render() {
        let { className, home } = this.props;

        return (
            <p className={"icons " + className}>
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
