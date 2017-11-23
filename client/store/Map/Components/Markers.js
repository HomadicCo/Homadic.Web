import React from 'react';
import { Marker } from 'react-google-maps';

export class AddListingMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onMarkerDragged, map } = this.props;

        return (
            map.addNewListingCoordinates ?
                <Marker
                    position={{
                        lat: map.addNewListingCoordinates.lat,
                        lng: map.addNewListingCoordinates.lng,
                    }}
                    draggable
                    onDragEnd={onMarkerDragged}
                />
                :
                <span />
        )
    }
}