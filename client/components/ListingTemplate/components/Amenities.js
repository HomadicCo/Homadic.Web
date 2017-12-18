import React from 'react';
import { icons } from '../../../Images/Images';

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAmenity(icon, name) {
        let { colClass, displayLabel, size } = this.props;
        const imgSize = size != null ? size : 30;

        return (
            <div className={colClass != null ? colClass : 'col'}>
                <img src={icon} height={imgSize} width={imgSize} className="mb-2" />
                {displayLabel ? <p><small><strong>{name}</strong></small></p> : undefined}
            </div>
        )
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
            this.renderAmenity(icons[wifiQuality.icon], wifiQuality.label)
        );
    }

    render() {
        let { listing } = this.props;

        return (
            <div id="amenities" className="row justify-content-md-center hero-icons my-2">
                {this.renderWifi()}
                {listing.amenities.air_conditioning ? this.renderAmenity(icons.ac, 'A/C') : undefined}
                {listing.rooms.filter(room => room.laundry != 'none').length > 0 ? this.renderAmenity(icons.laundry, 'Laundry') : undefined}
                {listing.rooms.filter(room => room.kitchen != 'none').length > 0 ? this.renderAmenity(icons.kitchen, 'Kitchen') : undefined}
                {listing.amenities.gym ? this.renderAmenity(icons.gym, 'Gym') : undefined}
                {listing.amenities.pool ? this.renderAmenity(icons.pool, 'Pool') : undefined}
            </div>
        )
    }
}

export default Amenities;
