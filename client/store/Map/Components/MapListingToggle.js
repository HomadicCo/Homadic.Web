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

    render() {
        let { ui } = this.props;

        return (
            <div className="map-listing-toggle d-sm-none" onClick={this.toggleMapView}>
                {ui.mapView ? <i className="fas fa-list" /> : <i className="fas fa-map-marked-alt" />}
            </div>
        )
    }
}

export default MapListingToggle;