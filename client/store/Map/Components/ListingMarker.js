/* global google */
import React from 'react';
import { Marker } from 'react-google-maps';
import { icons } from '../../../Images/Images';

class ListingMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { setSelectedListing, onMarkerDragged, listing } = this.props;
        const icon = {
            url: icons[listing.type],
            scaledSize: new google.maps.Size(40, 40)
        };

        return (
            <Marker
                position={{
                    lat: listing.coordinates.lat,
                    lng: listing.coordinates.lng,
                }}
                onClick={() => setSelectedListing(listing)}
                options={{ icon }}
                onDragEnd={onMarkerDragged}
            />
        )
    }
}

export default ListingMarker;