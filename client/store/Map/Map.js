/* global google */
import React from 'react';
import { browserHistory } from 'react-router';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ActionBar from './Components/ActionBar';
import AddListingMarker from './Components/AddListingMarker';
import ListingMarker from './Components/ListingMarker';
import MapStyle from '../../components/MapStyle/MapStyle';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { icons } from '../../Images/Images';

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        onClick={props.onMapClick}
        zoom={props.zoom}
        onZoomChanged={props.onMapChanged}
        onCenterChanged={props.onMapChanged}
        center={props.center}
        options={{
            styles: MapStyle,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            minZoom: 14,
            draggableCursor: props.addNewListingMode ? 'url(' + icons.dart + ') 10 16, crosshair' : undefined
        }}
    >
        {
            props.addNewListingMode ?
                <AddListingMarker {...props} />
                :
                props.listings.map((listing, i) => (
                    <ListingMarker listing={listing} key={i} {...props} />
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
        this.handleMapChanged = this.handleMapChanged.bind(this);
        this.handleMarkerDrag = this.handleMarkerDrag.bind(this);
        this.isLoading = this.isLoading.bind(this);
    }

    componentWillMount() {
        let { query } = this.props.location;

        this.props.setAddNewListingMode(false);

        this.updateLatLong({
            slug: this.props.params.citySlug,
            lat: parseFloat(query.lat),
            lng: parseFloat(query.lng),
            zoom: parseFloat(query.z)
        });
    }

    componentWillReceiveProps(nextProps) {
        let { location } = this.props;

        // check if route has changed
        if (location.pathname != nextProps.location.pathname) {
            this.updateLatLong({ slug: nextProps.params.citySlug });
        }
    }

    updateLatLong(params) {
        if (!params.lat || !params.lng) {
            geocodeByAddress(params.slug)
                .then(results =>
                    getLatLng(results[0])
                ).then(({ lat, lng }) => {
                    this.props.handleGetListings({ lat: params.lat, lng: params.lng, zoom: 14 });
                    this.setState({ center: { lat, lng }, zoom: 14 });
                });
        } else {
            this.props.handleGetListings({ lat: params.lat, lng: params.lng, zoom: params.zoom ? params.zoom : 14 });
            this.setState({ center: { lat: params.lat, lng: params.lng }, zoom: params.zoom ? params.zoom : 14 });
        }
    }

    handleMapLoad(map) {
        this._map = map;
    }

    handleMarkerDrag(e) {
        let { setAddNewListingCoordinates } = this.props;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        setAddNewListingCoordinates({ lat, lng });
    }

    handleMapClick(e) {
        let { map, setAddNewListingCoordinates } = this.props;
        if (!map.addNewListingMode) return;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        setAddNewListingCoordinates({ lat, lng });
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

    handleMapChanged() {
        let { location } = this.props;
        const centerObj = this._map.getCenter();
        const zoom = this._map.getZoom();
        const lat = centerObj.lat();
        const lng = centerObj.lng();

        const nextCenter = { lat, lng };
        if (nextCenter !== this.state.center) {
            this.setState({
                center: nextCenter,
            });
            // update route
            browserHistory.push(location.pathname + '?lat=' + lat.toFixed(6) + '&lng=' + lng.toFixed(6) + '&z=' + zoom);
        }
    }

    openListingInNewWindow(slug) {
        if (slug) {
            window.open(window.location.origin + '/listing/' + slug);
        }
    }

    isLoading() {
        let { center } = this.state;
        let { profile } = this.props;

        if (profile.updating) return true;
        if (!center) return true;
        return false;
    }

    render() {
        let { center, zoom } = this.state;
        let { listings, map } = this.props;

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
                            addNewListingMode={map.addNewListingMode}
                            onMapChanged={this.handleMapChanged}
                            onMarkerDragged={this.handleMarkerDrag}
                            setHoveredListing={this.props.setHoveredListing}
                            openListingInNewWindow={this.openListingInNewWindow}
                            containerElement={
                                <div style={{ height: '100%' }} />
                            }
                            mapElement={
                                <div style={{ height: '100%' }} />
                            }
                            listings={listings.data}
                            map={map}
                        />
                    </div>}
            </div>
        )
    }
}

export default Map;
