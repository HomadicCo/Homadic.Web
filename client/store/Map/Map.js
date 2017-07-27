import React from 'react';
import { Link } from 'react-router';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import Header from './ActionBar/ActionBar';
import MapStyle from './Components/MapStyle';
import { icons } from '../../Images/Images'

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { center: undefined };
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.updateLatLong(this.props.params.citySlug);
    }

    handleMapLoad(map) {
        this._map = map;
    }

    updateLatLong(slug) {
        geocodeByAddress(slug)
            .then(results =>
                getLatLng(results[0])
            ).then(({ lat, lng }) => {
                this.setState({ center: { lat, lng } });
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state == nextState) {
            return false;
        }

        return true;
    }

    componentWillReceiveProps(nextProps) {
        let { location } = this.props;

        // check if route has changed
        if (location != nextProps.location) {
            this.updateLatLong(nextProps.params.citySlug);
        }
    }

    render() {
        let { center } = this.state;
        const markers = [{
            position: { lat: -37.73622, lng: 144.730286 },
            key: "Jessie's Hostel",
            icon: "hostel"
        }];

        const RenderMap = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={13}
                defaultCenter={props.center}
                defaultOptions={{ styles: MapStyle, mapTypeControl: false, streetViewControl: false, minZoom: 12 }}>
                {
                    props.markers.map(marker => (
                        <Marker
                            {...marker}
                            options={{ icon: icons[marker.icon] }}
                        />
                    ))
                }
            </GoogleMap >
        ));

        return (
            <div>
                {!!center ? <div className="map">
                    <Header {...this.props} />
                    <RenderMap
                        onMapLoad={this.handleMapLoad}
                        center={new google.maps.LatLng(center)}
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                        markers={markers}
                    /> </div> :
                    <div className="loading-map"><h2><FontAwesome name="plane" size="2x" className="blue" spin /></h2></div>}
            </div>
        )
    }
}

export default Map;
