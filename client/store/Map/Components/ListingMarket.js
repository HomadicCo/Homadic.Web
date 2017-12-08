import React from 'react';
import { Marker } from 'react-google-maps';
import { icons } from '../../../Images/Images';

//TODO: Is this actually being used?
export class ListingMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { openListingInNewWindow, setHoveredListing, onMarkerDragged, listing } = this.props;

        return (
            <Marker
                position={{
                    lat: listing.location.coordinates[0],
                    lng: listing.location.coordinates[1],
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