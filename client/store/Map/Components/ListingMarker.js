import React from 'react';
import { Marker } from 'react-google-maps';
import { icons } from '../../../Images/Images';

class ListingMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { openListingInNewWindow, setHoveredListing, onMarkerDragged, listing } = this.props;

        return (
            <Marker
                position={{
                    lat: listing.coordinates.lat,
                    lng: listing.coordinates.lng,
                }}
                onClick={() => openListingInNewWindow(listing.slug)}
                onMouseOver={() => setHoveredListing(listing)}
                onMouseOut={() => setHoveredListing(null)}
                options={{ icon: icons[listing.type] }}
                onDragEnd={onMarkerDragged}
            />
        )
    }
}

export default ListingMarker;