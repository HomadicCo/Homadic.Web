import React from 'react';
import { browserHistory } from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete'
import { apiSearchAutocomplete } from "../../../api";
import { convertToSlug } from "../../../functions";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: "" }
        this.handleSelect = this.handleSelect.bind(this);
        this.onChange = (address) => this.setState({ address })
    }

    handleSelect(e) {
        this.setState({ address: "" });
        browserHistory.push("/" + convertToSlug(e));
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            placeholder: "Search cities"
        }

        const options = {
            types: ['(cities)']
        }

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete
                    inputProps={inputProps}
                    options={options}
                    onSelect={this.handleSelect} />
            </form>
        )
    }
}

export default SearchBar;