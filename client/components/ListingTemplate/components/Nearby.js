import React from 'react';
import { icons } from '../../../Images/Images';

class Nearby extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPointOfInterest(poi) {
        let { listing } = this.props
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
                <p className="place-type">{label} <img src={icons[poi.place_type]} /></p>
                <p className="place-name text-truncate"><a href={directionsUrl} target="_blank">{poi.name}</a></p>
                <p className="transit-details small"><strong>{poi.distance_label}</strong> {poi.duration_label} {transitLabel} <img src={icons[poi.transit_mode]} /></p>
            </div>
        )
    }

    render() {
        let { listing, previewMode } = this.props;
        let previewModeString = 'Nearby points of interest will be calculated and displayed after submission.';

        return (
            <div id="nearby">
                {listing.points_of_interest ?
                    <div className="content-box">
                        <h2 className="fancy blue">Nearby</h2>
                        <hr />
                        <div className="row">
                            {previewMode ? <div className="col-12"><p>{previewModeString}</p></div> : listing.points_of_interest.map((poi, i) => (<div key={i} className="col-md-4">{this.renderPointOfInterest(poi)}</div>))}
                        </div>
                    </div> : undefined}
            </div>
        )
    }
}

export default Nearby;
