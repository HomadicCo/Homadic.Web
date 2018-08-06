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

    renderSubway() {
        let { listing } = this.props;

        const i = listing.points_of_interest.findIndex((p) => p.place_type == 'subway_station');

        if (i > -1) {
            const station = listing.points_of_interest[i];
            const mins_walk = parseInt(station.duration_label.split(' ')[0]);
            if (mins_walk < 15 && station.transit_mode == 'walking')
                return (this.renderAmenity(icons.subway_station, mins_walk + ' min walk'));
        }

        return (undefined);
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
            <ul id="amenities" className={'amenities-icons ' + customClass}>
                {this.renderWifi()}
                {this.renderSubway()}
                {listing.rooms.filter(room => room.laundry != 'none').length > 0 ? this.renderAmenity(icons.laundry, 'Laundry') : undefined}
                {listing.rooms.filter(room => room.kitchen != 'none').length > 0 ? this.renderAmenity(icons.kitchen, 'Kitchen') : undefined}
                {listing.amenities.gym ? this.renderAmenity(icons.gym, 'Gym') : undefined}
                {listing.amenities.pool ? this.renderAmenity(icons.pool, 'Pool') : undefined}
                {listing.amenities.air_conditioning ? this.renderAmenity(icons.ac, 'A/C') : undefined}
            </ul>
        )
    }
}

export default Amenities;
