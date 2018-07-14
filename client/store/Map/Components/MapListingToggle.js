import React from 'react';

class MapListingToggle extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMapView = this.toggleMapView.bind(this);
    }

    toggleMapView() {
        let { toggleMapView, ui } = this.props;
        toggleMapView(ui.mapView ? false : true);
    }

    renderMapViewButton() {
        let { ui } = this.props;

        return (
            <div className="map-listing-toggle d-sm-none" onClick={this.toggleMapView}>
                {ui.mapView ? <i className="fas fa-list" /> : <i className="fas fa-map-marked-alt" />}
            </div>
        )
    }

    render() {
        let { map } = this.props;

        return (
            map.selectedListing != null ? <div /> : this.renderMapViewButton()
        )
    }
}

export default MapListingToggle;