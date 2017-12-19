import React from 'react';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFilter = this.toggleFilter.bind(this);
        this.closeSelectedListing = this.closeSelectedListing.bind(this);
    }

    toggleFilter() {
        let { map, setFilterMode } = this.props;

        setFilterMode(map.filterMode ? false : true);
    }

    closeSelectedListing() {
        let { setSelectedListing } = this.props;

        setSelectedListing(null);
    }

    renderActionButton() {
        let { selectedListing } = this.props.map;

        return (
            selectedListing == null ?
                <button className="btn btn-action" onClick={this.toggleFilter}>Filter <i className="fas fa-filter" /></button>
                :
                <button className="btn btn-danger" onClick={this.closeSelectedListing}>Close <i className="fas fa-times" /></button>
        )
    }

    render() {
        const classNames = {
            root: 'form-group map-typeahead',
            input: 'form-control',
            autocompleteContainer: 'search-results',
            autocompleteItem: 'result',
            autocompleteItemActive: 'result active'
        }

        const inputProps = {
            placeholder: 'Search cities...'
        }

        return (
            <div className="row map-sidebar-header">
                <div className="col-9 mt-3">
                    <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                </div>
                <div className="col-3 mt-3 action-button">
                    {this.renderActionButton()}
                </div>
            </div>
        );
    }
}

export default MapSidebar;