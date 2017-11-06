import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { icons } from '../../../Images/Images';

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        zoom={props.zoom}
        center={props.center}
        options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            minZoom: 12,
            draggableCursor: props.draggableCursor
        }}>
        {
            props.markers.map(marker => (
                <Marker
                    key={marker.id}
                    position={{
                        lat: marker.location.coordinates[0],
                        lng: marker.location.coordinates[1],
                    }}
                    options={{ icon: icons[marker.type] }}
                />
            ))
        }
    </GoogleMap >
));

class LocationMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: props.listing.location.coordinates[0],
                lng: props.listing.location.coordinates[1]
            }
        };
    }

    render() {
        let { listing } = this.props;
        let { center } = this.state;
        var markers = [];
        markers.push(listing);

        return (
            <div className="mb-5 box-shadow">
                <RenderMap
                    center={new google.maps.LatLng(center)}
                    markers={markers}
                    zoom={16}
                    containerElement={
                        <div style={{ height: `400px` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        )
    }
}

export default LocationMap;