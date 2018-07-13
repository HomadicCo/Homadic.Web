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

        this.props.renderQueryParams({
            remove: [{ key: 'listing' }]
        });
        setSelectedListing(null);
    }

    renderActionButton() {
        let { selectedListing } = this.props.map;

        return (
            selectedListing == null ?
                <button className="btn btn-action" onClick={this.toggleFilter}><i className="fas fa-filter" /></button>
                :
                <button className="btn btn-danger" onClick={this.closeSelectedListing}><i className="fas fa-times" /></button>
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
            <div className="row map-sidebar-header pt-3">
                <div className="col-12">
                    <div className="d-inline float-left">
                        <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                    </div>
                    <div className="d-inline float-right action-button">
                        {this.renderActionButton()}
                    </div>
                </div>
            </div>
        );
    }
}

export default MapSidebar;