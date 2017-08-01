import React from 'react';
import { Link } from 'react-router';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import ActionBar from './Components/ActionBar';
import MapStyle from './Components/MapStyle';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { icons } from '../../Images/Images'

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        onClick={props.onMapClick}
        defaultZoom={13}
        center={props.center}
        defaultOptions={{
            styles: MapStyle,
            mapTypeControl: false,
            streetViewControl: false,
            minZoom: 12,
            draggableCursor: props.draggableCursor
        }}>
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

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: undefined
        };
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.isLoading = this.isLoading.bind(this);
        this.updateLatLong(this.props.params.citySlug);
    }

    updateLatLong(slug) {
        geocodeByAddress(slug)
            .then(results =>
                getLatLng(results[0])
            ).then(({ lat, lng }) => {
                this.setState({ center: { lat, lng } });
            });
    }

    handleMapLoad(map) {
        this._map = map;
    }

    handleMapClick(event) {
        if (!this.props.map.addNewPlaceMode) return;
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        const addPlaceMarker = {
            position: event.latLng,
            draggable: true,
            key: "add-new-place"
        };

        this.props.setAddNewPlaceMarker(addPlaceMarker);
        this.setState({ center: { lat, lng } });
    }

    isLoading() {
        let { center } = this.state;
        let { profile } = this.props;

        if (profile.updating) return true;
        if (!center) return true;
        return false;
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
        let { map } = this.props;

        return (
            <div>
                {this.isLoading() ? <LoadingScreen /> :
                    <div className="map">
                        <ActionBar {...this.props} />
                        <RenderMap
                            onMapLoad={this.handleMapLoad}
                            onMapClick={this.handleMapClick}
                            center={new google.maps.LatLng(center)}
                            draggableCursor={map.addNewPlaceMode ? 'crosshair' : undefined}
                            containerElement={
                                <div style={{ height: `100%` }} />
                            }
                            mapElement={
                                <div style={{ height: `100%` }} />
                            }
                            markers={map.markers}
                        />
                    </div>}
            </div>
        )
    }
}

export default Map;
