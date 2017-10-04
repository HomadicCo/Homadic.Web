import React from 'react';
import { Link } from 'react-router';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FontAwesome from 'react-fontawesome';
import ActionBar from './Components/ActionBar';
import MapStyle from './Components/MapStyle';
import { AddPlaceMarker, HomeMarker } from './Components/Markers';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { icons } from '../../Images/Images';

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        onClick={props.onMapClick}
        zoom={props.zoom}
        onZoomChanged={props.onZoomChanged}
        onCenterChanged={props.onCenterChanged}
        center={props.center}
        options={{
            styles: MapStyle,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            minZoom: 12,
            draggableCursor: props.addNewPlaceMode ? 'url(' + icons.dart + ') 10 16, crosshair' : undefined
        }}>
        {
            props.addNewPlaceMode ?
                <AddPlaceMarker {...props} />
                :
                props.homes.map(home => (
                    <HomeMarker home={home} key={home.id} {...props} />
                ))

        }
    </GoogleMap >
));

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: undefined,
            zoom: 14
        };
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleZoomChanged = this.handleZoomChanged.bind(this);
        this.handleCenterChanged = this.handleCenterChanged.bind(this);
        this.handleMarkerDrag = this.handleMarkerDrag.bind(this);
        this.isLoading = this.isLoading.bind(this);
        this.updateLatLong(this.props.params.citySlug);
    }

    updateLatLong(slug) {
        geocodeByAddress(slug)
            .then(results =>
                getLatLng(results[0])
            ).then(({ lat, lng }) => {
                this.props.handleGetHomes();
                this.setState({ center: { lat, lng }, zoom: 14 });
            });
    }

    handleMapLoad(map) {
        this._map = map;
    }

    handleMarkerDrag(e) {
        let { setAddNewPlaceCoordinates } = this.props;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        setAddNewPlaceCoordinates({ lat, lng });
    }

    handleMapClick(e) {
        let { map, setAddNewPlaceCoordinates } = this.props;
        if (!map.addNewPlaceMode) return;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        setAddNewPlaceCoordinates({ lat, lng });
        this.setState({ center: { lat, lng }, zoom: 18 });
    }

    handleZoomChanged() {
        const nextZoom = this._map.getZoom();
        if (nextZoom !== this.state.zoom) {
            this.setState({
                zoom: nextZoom,
            });
        }
    }

    handleCenterChanged() {
        const centerObj = this._map.getCenter();
        const lat = centerObj.lat();
        const lng = centerObj.lng();

        const nextCenter = { lat, lng };
        if (nextCenter !== this.state.center) {
            this.setState({
                center: nextCenter,
            });
        }
    }

    openHomeInNewWindow(slug) {
        if (slug) {
            window.open(window.location.origin + "/home/" + slug);
        }
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

    componentWillMount() {
        this.props.setAddNewPlaceMode(false);
    }

    render() {
        let { center, zoom } = this.state;
        let { homes, map } = this.props;

        return (
            <div>
                {this.isLoading() ? <LoadingScreen /> :
                    <div className="map">
                        <ActionBar {...this.props} />
                        <RenderMap
                            onMapLoad={this.handleMapLoad}
                            onMapClick={this.handleMapClick}
                            center={new google.maps.LatLng(center)}
                            zoom={zoom}
                            addNewPlaceMode={map.addNewPlaceMode}
                            onZoomChanged={this.handleZoomChanged}
                            onCenterChanged={this.handleCenterChanged}
                            onMarkerDragged={this.handleMarkerDrag}
                            setHoveredHome={this.props.setHoveredHome}
                            openHomeInNewWindow={this.openHomeInNewWindow}
                            containerElement={
                                <div style={{ height: `100%` }} />
                            }
                            mapElement={
                                <div style={{ height: `100%` }} />
                            }
                            homes={homes.data}
                            map={map}
                        />
                    </div>}
            </div>
        )
    }
}

export default Map;
