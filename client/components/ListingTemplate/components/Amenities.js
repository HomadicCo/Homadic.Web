import React from 'react';
import { icons } from '../../../Images/Images';

class Amenities extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAmenity(icon, name) {
        let { displayLabel, size, margin } = this.props;
        const imgSize = size != null ? size : 30;
        margin = margin != null ? margin : 5;

        return (
            <li style={{ margin: '0 ' + margin + 'px' }} >
                <img src={icon} height={imgSize} width={imgSize} className="mb-2" />
                {displayLabel ? <p><small><strong>{name}</strong></small></p> : undefined}
            </li>
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
        let { customClass, listing } = this.props;

        return (
            <ul id="amenities" className={'amenities-icons my-2 ' + customClass}>
                {this.renderWifi()}
                {listing.amenities.air_conditioning ? this.renderAmenity(icons.ac, 'A/C') : undefined}
                {listing.rooms.filter(room => room.laundry != 'none').length > 0 ? this.renderAmenity(icons.laundry, 'Laundry') : undefined}
                {listing.rooms.filter(room => room.kitchen != 'none').length > 0 ? this.renderAmenity(icons.kitchen, 'Kitchen') : undefined}
                {listing.amenities.gym ? this.renderAmenity(icons.gym, 'Gym') : undefined}
                {listing.amenities.pool ? this.renderAmenity(icons.pool, 'Pool') : undefined}
            </ul>
        )
    }
}

export default Amenities;
