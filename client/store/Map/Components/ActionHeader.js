import React from 'react';
import PlacesTypeahead from '../../../Components/PlacesTypeahead/PlacesTypeahead';

class MapSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter() {
        let { map, setFilterMode } = this.props;

        setFilterMode(map.filterMode ? false : true);
    }

    render() {
        const classNames = {
            root: 'form-group map-typeahead',
            input: 'form-control',
            autocompleteContainer: ''
        }

        const inputProps = {
            placeholder: 'Search cities...'
        }

        return (
            <div className="row map-action-header">
                <div className="col-9 mt-3">
                    <PlacesTypeahead {...this.props} classNames={classNames} inputProps={inputProps} />
                </div>
                <div className="col-3 mt-3 filter">
                    <button className="btn btn-action" onClick={this.toggleFilter}>Filter <i className="fas fa-filter" /></button>
                </div>
            </div>
        );
    }
}

export default MapSidebar;