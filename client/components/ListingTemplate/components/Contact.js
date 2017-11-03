import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { icons } from '../../../Images/Images'

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

class Contact extends React.Component {
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
            <div>
                <div className="content-header">
                    <h5><FontAwesome name="map-marker" /> Contact</h5>
                </div>
                <div className="m-3">
                    <p><strong>Email:</strong> <span className="lowercase">{listing.email}</span></p>
                    <p><strong>Phone:</strong> {listing.formatted_phone_number}</p>
                    <p><strong>Address:</strong> {listing.formatted_address}</p>
                </div>
                <div className="m-3 mb-5">
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
            </div>
        )
    }
}

export default Contact;
