import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import FontAwesome from 'react-fontawesome';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { apiNearbyAutocomplete } from '../../../api';

class SelectPlaceTypeahead extends React.Component {
    constructor(props) {
        super(props)
        this.handlePerformQuery = this.handlePerformQuery.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.state = {
            options: []
        };
    }

    handlePerformQuery(q) {
        let { lat, lng } = this.props;
        if (!q) {
            return;
        }

        apiNearbyAutocomplete(lat, lng, q)
            .then((results) => {
                this.setState({ options: results.data.results })
            });
    }

    filterBy(option) {
        return option;
    }

    render() {
        return (
            <AsyncTypeahead
                {...this.state}
                labelKey="name"
                onSearch={this.handlePerformQuery}
                filterBy={this.filterBy}
                placeholder="Search for a place..."
            />
        )
    }
}

export default SelectPlaceTypeahead;