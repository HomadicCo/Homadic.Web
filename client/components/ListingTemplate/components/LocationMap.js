/* global google */
import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapStyle from '../../MapStyle/MapStyle';
import { icons } from '../../../Images/Images';

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        zoom={props.zoom}
        center={props.center}
        options={{
            styles: MapStyle,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            minZoom: 14,
            draggableCursor: props.draggableCursor
        }}
    >
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
        var markers = [listing];

        return (
            <div id="map" className="content-box" style={{ paddingBottom: 0 }}>
                <RenderMap
                    center={new google.maps.LatLng(center)}
                    markers={markers}
                    zoom={16}
                    containerElement={
                        <div className="map-container" style={{ height: '400px' }} />
                    }
                    mapElement={
                        <div style={{ height: '100%' }} />
                    }
                />
                <div className="pt-3 pb-1">
                    <p><i className="fas fa-map-marker red-light" /> <a href={'https://www.google.com/maps/place/?q=place_id:' + listing.google_place_id} target="_blank">{listing.address}</a></p>
                </div>
            </div>
        )
    }
}

export default LocationMap;