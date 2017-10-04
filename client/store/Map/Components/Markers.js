import React from 'react';
import { Marker } from "react-google-maps";
import { icons } from '../../../Images/Images';

export class HomeMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { openHomeInNewWindow, setHoveredHome, onMarkerDragged, home } = this.props;

        return (
            <Marker
                position={{
                    lat: home.location.coordinates[0],
                    lng: home.location.coordinates[1],
                }}
                onClick={() => openHomeInNewWindow(home.slug)}
                onMouseOver={() => setHoveredHome(home)}
                onMouseOut={() => setHoveredHome(null)}
                options={{ icon: icons[home.type] }}
                onDragEnd={onMarkerDragged}
            />
        )
    }
}

export class AddPlaceMarker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onMarkerDragged, map } = this.props;

        return (
            map.addNewPlaceCoordinates ?
                <Marker
                    position={{
                        lat: map.addNewPlaceCoordinates.lat,
                        lng: map.addNewPlaceCoordinates.lng,
                    }}
                    draggable={true}
                    onDragEnd={onMarkerDragged}
                />
                :
                <span></span>
        )
    }
}