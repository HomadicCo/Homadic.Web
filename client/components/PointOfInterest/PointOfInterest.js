import React from 'react';
import { icons } from '../../Images/Images';

class PointOfInterest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { listing, poi } = this.props
        let label;
        let transitLabel;

        const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(listing.name)}&origin_place_id=${listing.google_place_id}&destination=${encodeURIComponent(poi.name)}&destination_place_id=${poi.place_id}`;

        switch (poi.place_type) {
            case ('bus_station'):
                label = 'Bus station';
                break;
            case ('train_station'):
                label = 'Train station';
                break;
            case ('subway_station'):
                label = 'Subway station';
                break;
            case ('convenience_store'):
                label = 'Convenience store';
                break;
            case ('gas_station'):
                label = 'Gas station';
                break;
            case ('post_office'):
                label = 'Post office';
                break;
            case ('pharmacy'):
                label = 'Pharmacy';
                break;
            case ('laundry'):
                label = 'Laundry';
                break;
            case ('police'):
                label = 'Police station';
                break;
        }

        switch (poi.transit_mode) {
            case ('walking'):
                transitLabel = 'walk';
                break;
            case ('driving'):
                transitLabel = 'drive';
                break;
        }

        return (
            <div className="nearby-place">
                <p className="place-type text-truncate"><img src={icons[poi.place_type]} /> {label}</p>
                <p className="place-name text-truncate"><a href={directionsUrl} target="_blank">{poi.name}</a></p>
                <p className="transit-details small"><strong>{poi.distance_label}</strong> {poi.duration_label} {transitLabel} <img src={icons[poi.transit_mode]} /></p>
            </div>
        )
    }
}

export default PointOfInterest;
