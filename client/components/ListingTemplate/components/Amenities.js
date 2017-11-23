import React from 'react';
import { icons } from '../../../Images/Images';

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWifi() {
        let { listing } = this.props;
        let wifiQuality = {}

        switch (listing.wifi.type) {
            case 'free':
                wifiQuality = {
                    icon: 'wifiStrong',
                    label: 'Free WiFi'
                }
                break;
            case 'paid':
                wifiQuality = {
                    icon: 'wifi',
                    label: 'Paid WiFi'
                }
                break;
            case 'canInstall':
                wifiQuality = {
                    icon: 'wifi',
                    label: 'Can Install'
                }
                break;
            case 'none':
                wifiQuality = {
                    icon: 'wifiNone',
                    label: 'No WiFi'
                }
                break;
        }

        return (
            <div className="col">
                <img src={icons[wifiQuality.icon]} className="mb-2" />
                <p><small><strong>{wifiQuality.label}</strong></small></p>
            </div>
        );
    }

    renderPool() {
        return (
            <div className="col">
                <img src={icons.pool} className="mb-2" />
                <p><small><strong>Pool</strong></small></p>
            </div>
        )
    }

    renderGym() {
        return (
            <div className="col">
                <img src={icons.gym} className="mb-2" />
                <p><small><strong>Gym</strong></small></p>
            </div>
        )
    }

    renderAC() {
        return (
            <div className="col">
                <img src={icons.ac} className="mb-2" />
                <p><small><strong>A/C</strong></small></p>
            </div>
        )
    }

    renderLaundry() {
        return (
            <div className="col">
                <img src={icons.laundry} className="mb-2" />
                <p><small><strong>Laundry</strong></small></p>
            </div>
        )
    }

    renderKitchen() {
        return (
            <div className="col">
                <img src={icons.kitchen} className="mb-2" />
                <p><small><strong>Kitchen</strong></small></p>
            </div>
        )
    }

    render() {
        let { listing } = this.props;

        return (
            <div className="row justify-content-md-center hero-icons my-2">
                {this.renderWifi()}
                {listing.amenities.air_conditioning ? this.renderAC() : undefined}
                {listing.rooms.filter(room => room.laundry != 'none').length > 0 ? this.renderLaundry() : undefined}
                {listing.rooms.filter(room => room.kitchen != 'none').length > 0 ? this.renderKitchen() : undefined}
                {listing.amenities.gym ? this.renderGym() : undefined}
                {listing.amenities.pool ? this.renderPool() : undefined}
            </div>
        )
    }
}

export default Amenities;
