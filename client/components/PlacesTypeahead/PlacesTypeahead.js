import React from 'react';
import { browserHistory } from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete'
import { convertToSlug } from '../../functions';
import FontAwesome from 'react-fontawesome';

class PlacesTypeahead extends React.Component {
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
            ...this.props.inputProps
        }

        const options = {
            types: ['(cities)']
        }

        const AutocompleteItem = ({ suggestion }) => (<div className="result"><FontAwesome name="map-marker" size="lg" className="red-light" /> {suggestion}</div>)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete
                    inputProps={inputProps}
                    options={options}
                    styles={this.props.styles}
                    classNames={this.props.classNames}
                    onSelect={this.handleSelect}
                    autocompleteItem={AutocompleteItem} />
            </form>
        )
    }
}

export default PlacesTypeahead;