import React from 'react';
import { Link } from 'react-router';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import FontAwesome from 'react-fontawesome';
import Header from './ActionBar/ActionBar';
import MapStyle from './Components/MapStyle';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 18.7061,
            lng: 98.9817
        }

        this.updateLatLong(this.props.params.citySlug);
    }

    updateLatLong(slug) {
        geocodeByAddress(slug)
            .then(results =>
                getLatLng(results[0])
            ).then(({ lat, lng }) => {
                console.log({ lat, lng });
                this.setState({ coordinates: { lat, lng } });
            });
    }

    componentWillReceiveProps(nextProps) {
        let { location, params } = this.props;

        // check if route has changed
        if (location != nextProps.location) {
            this.updateLatLong(nextProps.params.citySlug);
        }
    }

    render() {
        const markers = [{
            position: { lat: 18.802512, lng: 98.963678 },
            key: `Bliss Hotel`
        }];

        const RenderMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={13}
                center={this.state.coordinates}
                defaultOptions={{ styles: MapStyle }}>
                {
                    props.markers.map(marker => (
                        <Marker
                            {...marker}
                        />
                    ))
                }
            </GoogleMap >
        ));

        return (
            <div className="map">
                <Header {...this.props} />
                <RenderMap
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
