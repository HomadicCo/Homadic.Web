import React from 'react';
import { Link } from 'react-router';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import FontAwesome from 'react-fontawesome';
import SearchBar from './Components/SearchBar';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const markers = [{
            position: { lat: 18.802512, lng: 98.963678 },
            key: `Bliss Hotel`,
            defaultAnimation: 2,
        }];

        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 18.802512, lng: 98.963678 }}>
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                    />
                ))}
            </GoogleMap>
        ));

        return (
            <div className="map">
                <SearchBar {...this.props} />
                <GettingStartedGoogleMap
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    markers={markers}
                />
            </div>
        )
    }
}

export default Map;
